/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF", // Purple accent
          2: "#FFC876", // Yellow/Gold accent
          3: "#FF776F", // Red accent
          4: "#7ADB78", // Green accent
          5: "#858DFF", // Blue accent
          6: "#FF98E2", // Pink accent
        },
        stroke: {
          1: "#26242C", // Dark stroke
        },
        n: {
          1: "#FFFFFF",  // White
          2: "#CAC6DD",  // Light neutral
          3: "#ADA8C3",  // Mid neutral
          4: "#757185",  // Darker neutral
          5: "#3F3A52",  // Dark neutral
          6: "#252134",  // Darker neutral
          7: "#15131D",  // Even darker neutral
          8: "#0E0C15",  // Very dark neutral (used in modals)
          9: "#474060",  // Lighter dark for hover effects
          10: "#43435C", // Similar to dark neutral for background
          11: "#1B1B2E", // Near black neutral
          12: "#2E2A41", // Neutral for cards
          13: "#6C7275", // Mid-range neutral for text
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans], // Main font family
        code: "var(--font-code)", // Code blocks font
        grotesk: "var(--font-grotesk)", // Display font
      },
      letterSpacing: {
        tagline: ".15em", // Tagline letter spacing
      },
      spacing: {
        0.25: "0.0625rem",  // Tiny spacing for elements
        7.5: "1.875rem",     // Custom spacing
        15: "3.75rem",       // Larger spacing
      },
      opacity: {
        15: ".15",  // Custom opacity for background overlays
      },
      transitionDuration: {
        DEFAULT: "200ms",  // Default transition speed
        '2000': '2000ms', // Example: a 2-second transition
        '500': '500ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        DEFAULT: "linear",  // Linear transitions
      },
      zIndex: {
        1: "1",  // Z-index for small overlays
        2: "2",  // Z-index for modal content layers
        3: "3",
        4: "4",
        5: "5",  // Z-index for modal and close buttons
      },
      borderWidth: {
        DEFAULT: "0.0625rem",  // Border width for elements
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",  // Radial gradients
        "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",  // Conic gradients
        "benefit-card-1": "url(assets/benefits/card-1.svg)",  // Card background
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        open: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        close: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'open': 'open 0.3s ease-out forwards',
        'close': 'close 0.3s ease-in forwards',
      },      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add aspect-ratio plugin for embedded media

    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});

      // Component additions for headers, buttons, and container widths
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });

      // Utility classes for custom styles
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
        ".modal-blur": {
          "backdrop-filter": "blur(10px)",  // Utility for modal blur
        },
      });
    }),
  ],
};
