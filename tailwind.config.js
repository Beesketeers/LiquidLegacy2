/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                miniolla: ["miniolla", "sans-serif"],
            },
            colors: {
                blue: "#00204A",
                green: "#3F9F7F",
            },
        },
    },
    plugins: [],
};
