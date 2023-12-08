module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
};
