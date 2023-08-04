module.exports = {
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        // light: {
        //   ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        //   primary: "#d06516",
        //   secondary: "#00134a",
        //   accent: "#d06516",
        //   neutral: "#3D3D3D",
        //   info: "#3984b8",
        //   success: "#398e55",
        //   warning: "#f5bd26",
        //   error: "#b81f42",
        // },
        light: {
          "primary": "#06114d",
          "secondary": "#4b5784",
          "accent": "#d06516",
          "neutral": "#2a323c",
          "base-100": "#ffffff",
          "info": "#0097d1",
          "success": "#009d5f",
          "warning": "#ffbe32",
          "error": "#dc2642",
        }
      }
    ]
  }
};