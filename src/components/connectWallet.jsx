import MetamaskButton from "./payment-buttons/metamaskButton.jsx";
import CoinbaseWalletButton from "./payment-buttons/coinbaseWalletButton.jsx";
import WalletConnectButton from "./payment-buttons/walletConnectButton.jsx";

export default function ConnectWallet({ prompt, header, placeholder }) {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {header}
            </h2>
            <h3>{prompt}</h3>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
            ></form>
            <div className="flex flex-col">
              <MetamaskButton />
              <CoinbaseWalletButton />
              <WalletConnectButton />
              <a
                type="submit"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Back
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
