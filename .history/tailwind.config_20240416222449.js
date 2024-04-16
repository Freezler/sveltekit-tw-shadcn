import { fontFamily } from "tailwindcss/defaultTheme";


const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts,css}"],
  safelist: ["dark"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    },
    fontFamily: {
      sans: ["system-ui", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
      roboto: ["Roboto"],
      display: ["Oswald"],
      montserrat: ["Montserrat"],
      inter: ["Inter"],
      cursive: ["cursive"]

    }
  }
};

export default config;
