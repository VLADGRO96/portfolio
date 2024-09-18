import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#DB2D2E",
				White: "#FFFFFF",
				Black: "#000000",
				Orange: "#DB2D2E",
				WhiteGray: "#BFA37C",
				Blur: "F7F5F2",
      },
    },
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
  },
  plugins: [],
};
export default config;
