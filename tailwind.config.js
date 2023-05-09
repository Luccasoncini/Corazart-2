module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: { min: "576px" },
      md: { min: "768px" },
      lg: { min: "992px" },
      xl: { min: "1400px" },
      xxl: { min: "1900px" }
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat"
      },
      colors: {
        purple_900: "#704293",
        purple_700: "#8B32BD",
        purple_600: "#9949C4",
        purple_500: "#A65DCA",
        purple_400: "#C99BDF",
        purple_300: "#BE87D8",
        green: "#2AA81A",
        blue_900: "#41416C",
        dark_purple_900: "#2e2e59",
        gray_100: "#efefef",
        gray_300: "#919191",
        gray_500: "#CECDDB",
        black_100: "#6c6c6cba"
      }
    }
  },
  variants: {},
  plugins: []
}
