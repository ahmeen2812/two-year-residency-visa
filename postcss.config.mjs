/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // This is the fix for Tailwind v4
  },
};

export default config;