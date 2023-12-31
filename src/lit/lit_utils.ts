import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { AuthMethodType, ProviderType } from "@lit-protocol/constants";
import {
  AuthCallbackParams,
  AuthMethod,
  GetSessionSigsProps,
  IRelayPKP,
  ProviderOptions,
  SessionSigs,
} from "@lit-protocol/types";
import {
  DiscordProvider,
  GoogleProvider,
  EthWalletProvider,
  WebAuthnProvider,
  LitAuthClient,
  OtpProvider,
} from "@lit-protocol/lit-auth-client";

// Environment Variable
export const DOMAIN = process.env.NEXT_PUBLIC_PROD_URL || "localhost";
export const ORIGIN =
  process.env.NEXT_PUBLIC_ENV === "production"
    ? `https://${DOMAIN}`
    : `http://${DOMAIN}:3000`;

export const litNodeClient: LitNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: "serrano",
  debug: true,
});

export const litAuthClient: LitAuthClient = new LitAuthClient({
  litRelayConfig: {
    // relayUrl: 'http://localhost:3001',
    relayApiKey: "test-api-key",
  },
  litOtpConfig: {
    baseUrl: "https://auth-api.litgateway.com",
    port: "443",
    startRoute: "/api/otp/start",
    checkRoute: "/api/otp/check",
  },
  litNodeClient,
});

/**
 * Generate session sigs for given params
 */
export async function getSessionSigs({
  pkpPublicKey,
  authMethod,
  sessionSigsParams,
}: {
  pkpPublicKey: string;
  authMethod: AuthMethod;
  sessionSigsParams: GetSessionSigsProps;
}): Promise<SessionSigs> {
  // const provider = getProviderByAuthMethod(authMethod);
  // if (provider) {
  //   const sessionSigs = await provider.getSessionSigs({
  //     pkpPublicKey,
  //     authMethod,
  //     sessionSigsParams,
  //   });
  //   return sessionSigs;
  // } else {
  //   throw new Error(
  //     `Provider not found for auth method type ${authMethod.authMethodType}`
  //   );
  // }
  await litNodeClient.connect();

  const authNeededCallback = async (params: AuthCallbackParams) => {
    const response = await litNodeClient.signSessionKey({
      statement: params.statement,
      authMethods: [authMethod],
      pkpPublicKey: pkpPublicKey,
      expiration: params.expiration,
      resources: params.resources,
      chainId: 1,
    });
    return response.authSig;
  };

  const sessionSigs = await litNodeClient.getSessionSigs({
    ...sessionSigsParams,
    authNeededCallback,
  });

  return sessionSigs;
}

export async function updateSessionSigs(
  params: GetSessionSigsProps
): Promise<SessionSigs> {
  const sessionSigs = await litNodeClient.getSessionSigs(params);
  return sessionSigs;
}

/**
 * Fetch PKPs associated with given auth method
 */
export async function getPKPs(authMethod: AuthMethod): Promise<IRelayPKP[]> {
  const provider = getProviderByAuthMethod(authMethod);
  const allPKPs = await provider.fetchPKPsThroughRelayer(authMethod);
  return allPKPs;
}

/**
 * Mint a new PKP for current auth method
 */
export async function mintPKP(authMethod: AuthMethod): Promise<IRelayPKP> {
  const provider = getProviderByAuthMethod(authMethod);

  let txHash: string;

  if (authMethod.authMethodType === AuthMethodType.WebAuthn) {
    // Register new WebAuthn credential
    const options = await (provider as WebAuthnProvider).register();

    // Verify registration and mint PKP through relay server
    txHash = await (
      provider as WebAuthnProvider
    ).verifyAndMintPKPThroughRelayer(options);
  } else {
    // Mint PKP through relay server
    txHash = await provider.mintPKPThroughRelayer(authMethod);
  }

  const response = await provider.relay.pollRequestUntilTerminalState(txHash);
  if (response.status !== "Succeeded") {
    throw new Error("Minting failed");
  }
  const newPKP: IRelayPKP = {
    tokenId: response.pkpTokenId,
    publicKey: response.pkpPublicKey,
    ethAddress: response.pkpEthAddress,
  };
  return newPKP;
}

/**
 * Get provider for given auth method
 */
function getProviderByAuthMethod(authMethod: AuthMethod) {
  switch (authMethod.authMethodType) {
    case AuthMethodType.GoogleJwt:
      return litAuthClient.getProvider(ProviderType.Google);
    case AuthMethodType.Discord:
      return litAuthClient.getProvider(ProviderType.Discord);
    case AuthMethodType.EthWallet:
      return litAuthClient.getProvider(ProviderType.EthWallet);
    case AuthMethodType.WebAuthn:
      return litAuthClient.getProvider(ProviderType.WebAuthn);
    case AuthMethodType.OTP:
      return litAuthClient.getProvider(ProviderType.Otp);
    case AuthMethodType.StytchOtp:
      return litAuthClient.getProvider(ProviderType.StytchOtp);
    default:
      return;
  }
}
