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
 * Get auth method object by validating Stytch JWT
 */
export async function authenticateWithStytch(
  accessToken: string,
  userId?: string
) {
  const provider = litAuthClient.initProvider(ProviderType.StytchOtp, {
    appId: process.env.NEXT_PUBLIC_STYTCH_PROJECT_ID,
  });
  // @ts-ignore
  const authMethod = await provider?.authenticate({ accessToken, userId });
  return authMethod;
}
