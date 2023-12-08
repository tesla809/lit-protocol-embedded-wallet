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
export async function signInWithGoogle(redirectUri: string): Promise<void> {
  const googleProvider = litAuthClient.initProvider<GoogleProvider>(
    ProviderType.Google,
    { redirectUri }
  );
  await googleProvider.signIn();
}

/**
 * Get auth method object from redirect
 */
export async function authenticateWithGoogle(
  redirectUri: string
): Promise<AuthMethod | undefined> {
  const googleProvider = litAuthClient.initProvider<GoogleProvider>(
    ProviderType.Google,
    { redirectUri }
  );
  const authMethod = await googleProvider.authenticate();
  return authMethod;
}
