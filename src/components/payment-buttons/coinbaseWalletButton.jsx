export default function CoinbaseWalletButton() {
  return (
    <button
      type="button"
      class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
    >
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: "6px" }}
      >
        <circle cx="512" cy="512" r="512" style={{ fill: `#0052ff` }} />{" "}
        <path
          d="M516.3 361.83c60.28 0 108.1 37.18 126.26 92.47H764C742 336.09 644.47 256 517.27 256 372.82 256 260 365.65 260 512.49S370 768 517.27 768c124.35 0 223.82-80.09 245.84-199.28H642.55c-17.22 55.3-65 93.45-125.32 93.45-83.23 0-141.56-63.89-141.56-149.68.04-86.77 57.43-150.66 140.63-150.66z"
          style={{ fill: `#fff` }}
        />
      </svg>
      Connect with Coinbase
    </button>
  );
}
