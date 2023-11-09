/** @type {import('tailwindcss').Config} */
const daisyUI = require("daisyui");
export default {
    content: ["./src/**/*.{js,ts,tsx,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyUI],
};
