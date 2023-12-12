import "./App.css";
import SignUp from "./components/signUp.jsx";
import SignIn from "./components/signIn.jsx";
import ConnectWallet from "./components/connectWallet.jsx";
import RegisterPassKey from "./components/registerPasskey.jsx";
import PhoneSignUp from "./components/phoneSignUp.jsx";
import EmailSignIn from "./components/email.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <SignUp />
          </div>
        }
      />
      <Route path="/email-signup" element={<EmailSignIn />} />
      <Route
        path="/phone-signup"
        element={
          <PhoneSignUp
            header="Sign up with your phone"
            prompt="Connect your wallet then sign a message to verify you're the owner of the address."
          />
        }
      />
      <Route
        path="/passkey-signup"
        element={
          <RegisterPassKey
            header="Connect your passkey"
            prompt="Connect your passkey to create a credential."
          />
        }
      />
      <Route
        path="/web3-wallet-signup"
        element={
          <ConnectWallet
            header="Connect your web3 wallet"
            prompt="Connect your wallet then sign a message to verify you're the owner of the address."
          />
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;
