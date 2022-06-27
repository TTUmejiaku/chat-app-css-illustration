/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        textPaleVioletTopApp: "hsl(276, 100%, 81%)",
        textModerateVioChatLeft: "hsl(276, 55%, 52%)",
        textDesDkVioChatRight: "hsl(271, 15%, 43%)",
        textGrBluePlaceholder: "hsl(206, 6%, 79%)",
        textVDkDesVioMainHeading: "hsl(271, 36%, 24%)",
        textDkGrVioParagraph: "hsl(270, 7%, 64%)",
        bgLightMag: "hsl(293, 100%, 63%)",
        bgLightVio: "hsl(264, 100%, 61%)",
        secWhite: "hsl(0, 0%, 100%)",
        appBgLitGraVio: "hsl(270, 20%, 96%)",
        btnBgVDkDesVio: "hsl(271, 36%, 24%)",
        radioBtnOutlineVLightMag: "hsl(289, 100%, 72%)",
        chatLeftBg: "hsl(268, 21%, 88%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "6xl": "4rem",
        "8xl": "8rem",
      },
    },
  },
  plugins: [],
};
