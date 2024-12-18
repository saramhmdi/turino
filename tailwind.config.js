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
        vazirmatnMedium: ["var(--font-vazirmatn-medium)", "sans-serif"],
        vazirmatnBold: ["var(--font-vazirmatn-bold)", "sans-serif"],
        iranSans :  ["var(--font-iran-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
