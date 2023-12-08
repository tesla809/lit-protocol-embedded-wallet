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
 * Send OTP code to user
 */
export async function sendOTPCode(emailOrPhone: string) {
  const otpProvider = litAuthClient.initProvider<OtpProvider>(
    ProviderType.Otp,
    {
      userId: emailOrPhone,
    } as unknown as ProviderOptions
  );
  const status = await otpProvider.sendOtpCode();
  return status;
}

/**
 * Get auth method object by validating the OTP code
 */
export async function authenticateWithOTP(
  code: string
): Promise<AuthMethod | undefined> {
  const otpProvider = litAuthClient.getProvider(ProviderType.Otp);
  const authMethod = await otpProvider?.authenticate({ code });
  return authMethod;
}
