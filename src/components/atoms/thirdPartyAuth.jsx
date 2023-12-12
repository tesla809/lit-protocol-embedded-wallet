import AuthButton from "./authButton.jsx";
import appleLogo from "./logos/appleLogo.svg";
import googleLogo from "./logos/googleLogo.svg";
import emailLogo from "./logos/emailLogo.svg";
import phoneLogo from "./logos/phoneLogo.svg";
import web3WalletLogo from "./logos/web3WalletLogo.svg";
import passKey from "./logos/passKey.svg";
import connectWallet from "../connectWallet.jsx";
import { Link } from "react-router-dom";

export default function ThirdPartyAuth({ prompt }) {
  return (
    <div className="third-party-auth">
      <br />
      <div className="flex flex-row">
        <AuthButton text={`${prompt} with Google`} image={googleLogo} />
        <AuthButton text={`${prompt}with Apple`} image={appleLogo} />
      </div>
      <Link to="/email-signup">
        <AuthButton text={`${prompt} with Email`} image={emailLogo} />
      </Link>
      <Link to="/phone-signup">
        <AuthButton text={`${prompt} with Phone`} image={phoneLogo} />
      </Link>
      <Link to="/web3-wallet-signup">
        <AuthButton
          text={`${prompt} with Web3 Wallet`}
          image={web3WalletLogo}
        />
      </Link>
      <Link to="/passkey-signup">
        <AuthButton text={`${prompt} with Passkey`} image={passKey} />
      </Link>
    </div>
  );
}
