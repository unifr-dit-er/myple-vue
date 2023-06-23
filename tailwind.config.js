module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        uni: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#d06516",
          secondary: "#00134a",
          accent: "#d06516",
          neutral: "#3D3D3D",
          info: "#3984b8",
          success: "#398e55",
          warning: "#f5bd26",
          error: "#b81f42",
        },
      },
      {
        unidark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#d06516",
          secondary: "#7981A7",
          accent: "#d06516",
          neutral: "#3D3D3D",
          info: "#3984b8",
          success: "#398e55",
          warning: "#f5bd26",
          error: "#b81f42",
        },
      }
    ],
  },
};