/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    mode: 'jit',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};