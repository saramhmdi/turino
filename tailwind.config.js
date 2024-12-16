/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        text: "var(--text-color)",
        complementary: "var(--complementary)",
      },
      fontFamily: {
        yekanBakh: ["var(--font-yekan-bakh)", "sans-serif"],
        vazirFd: ["var(--font-vazir-fd)", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
