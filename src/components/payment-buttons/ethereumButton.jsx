export default function EthereumButton() {
  return (
    <button
      type="button"
      class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
    >
      <svg
        class="w-4 h-4 me-2 -ms-1 text-[#626890]"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="ethereum"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
        ></path>
      </svg>
      Pay with Ethereum
    </button>
  );
}
