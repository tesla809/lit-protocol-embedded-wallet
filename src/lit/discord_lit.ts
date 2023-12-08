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
 * Redirect to Lit login
 */
export async function signInWithDiscord(redirectUri: string): Promise<void> {
  const discordProvider = litAuthClient.initProvider<DiscordProvider>(
    ProviderType.Discord,
    { redirectUri }
  );
  await discordProvider.signIn();
}

/**
 * Get auth method object from redirect
 */
export async function authenticateWithDiscord(
  redirectUri: string
): Promise<AuthMethod | undefined> {
  const discordProvider = litAuthClient.initProvider<DiscordProvider>(
    ProviderType.Discord,
    { redirectUri }
  );
  const authMethod = await discordProvider.authenticate();
  return authMethod;
}
