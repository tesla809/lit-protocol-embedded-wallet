import AuthButton from "./authButton.jsx";
import appleLogo from "./logos/appleLogo.svg";
import googleLogo from "./logos/googleLogo.svg";
import emailLogo from "./logos/emailLogo.svg";
import phoneLogo from "./logos/phoneLogo.svg";
import web3WalletLogo from "./logos/web3WalletLogo.svg";
import passKey from "./logos/passKey.svg";
import { Outlet, Link } from "react-router-dom";

export default function ThirdPartyAuth() {
  return (
    <div className="third-party-auth">
      <br />
      <div className="flex flex-row">
        <AuthButton text="Sign Up with Google" image={googleLogo} />
        <AuthButton text="Sign Up with Apple" image={appleLogo} />
      </div>
      <AuthButton text="Sign Up with Email" image={emailLogo} />
      <AuthButton text="Sign Up with Phone" image={phoneLogo} />
      <AuthButton text="Sign Up with Web3 Wallet" image={web3WalletLogo} />
      <AuthButton text="Sign Up with Web3 Wallet" image={passKey} />
    </div>
  );
}
