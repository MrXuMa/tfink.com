import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      "src/**/*.{html,js,ts,jsx,tsx,astro}",
      "src/components/**/*.{html,js,ts,jsx,tsx,astro}",
      "src/pages/**/*.{html,js,ts,jsx,tsx,astro}",
      "src/layouts/**/*.{html,js,ts,jsx,tsx,astro}",
    ],
  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      sans: ["JetBrains Mono", "ui-monospace", "monospace"],
      display: ["Maple Mono", "ui-monospace", "monospace"],
    },
    colors: {
      darkslate: {
        50: "var(--darkslate-50)",
        100: "var(--darkslate-100)",
        200: "var(--darkslate-200)",
        300: "var(--darkslate-300)",
        400: "var(--darkslate-400)",
        500: "var(--darkslate-500)",
        600: "var(--darkslate-600)",
        700: "var(--darkslate-700)",
        800: "var(--darkslate-800)",
        900: "var(--darkslate-900)",
      },
      primary: {
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)",
      },
    },
  },
  presets: [presetWind3()],
});
