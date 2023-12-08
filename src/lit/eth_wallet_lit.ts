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

import { litAuthClient } from "./lit_ref.ts";

/**
 * Get auth method object by signing a message with an Ethereum wallet
 */
export async function authenticateWithEthWallet(
  address?: string,
  signMessage?: (message: string) => Promise<string>
): Promise<AuthMethod | undefined> {
  const ethWalletProvider = litAuthClient.initProvider<EthWalletProvider>(
    ProviderType.EthWallet,
    {
      domain: DOMAIN,
      origin: ORIGIN,
    }
  );
  const authMethod = await ethWalletProvider.authenticate({
    address,
    signMessage,
  });
  return authMethod;
}
