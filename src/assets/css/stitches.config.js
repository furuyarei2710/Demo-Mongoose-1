import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssString,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      poppins: "Poppins, sans-serif",
    },
    colors: {
      navyColor1: "#161853",
      navyColor2: "#646fd4",
      navyColor3: "#9ba3eb",
      navyColor4: "#f3f4fb",
      navyColor5: "#f9faff",
      navyColor6: "#676fa3",
      navyColor7: "#c4c6cc",
      navyColor8: "#f3f6f8",
      redColor1: "#f24c4c",
      redColor2: "#ff5959",
      redColor3: "#ff3e4e",
      redDark: 'hsl(360, 67%, 44%)',
      redLight: 'hsl(360, 71%, 66%)',
      yellowColor1: "#ffc93c",
      purpleColor1: "#5046e5",
      purpleColor2: "#9088EC",
      greenColor1: "hsl(125, 71%, 66%)",
      greenColor2: "hsl(125, 67%, 44%)",
      greenColor3: "#4bb679",
      passionFruit100: "hsl(220, 65%, 92%)",
      passionFruit200: "hsl(224, 67%, 82%)",
      passionFruit300: "hsl(228, 74%, 75%)",
      passionFruit400: "hsl(230, 80%, 69%)",
      passionFruit500: "hsl(234, 83%, 64%)",
      passionFruit600: "hsl(235, 58%, 53%)",
      passionFruit700: "hsl(235, 54%, 42%)",
      passionFruit800: "hsl(235, 56%, 33%)",
      passionFruit900: "hsl(235, 56%, 23%)",
      passionFruit1000: "hsl(234, 56%, 14%)",
      greenShades1: 'hsl(162, 61%, 89%)',
      greenShades2: 'hsl(162, 60%, 78%)',
      greenShades3: 'hsl(162, 61%, 67%)',
      greenShades4: 'hsl(162, 61%, 57%)',
      /* primary/main color */
      greenShades5: 'hsl(162, 73%, 46%)',
      /* lighter shades of primary color */
      greenShades6: '#1aa179',
      greenShades7: '#13795b',
      greenShades8: '#0d503c',
      /* darkest grey - used for headings */
      darkShades1: 'hsl(212, 33%, 89%)',
      darkShades2: 'hsl(210, 31%, 80%)',
      darkShades3: 'hsl(211, 27%, 70%)',
      darkShades4: 'hsl(209, 23%, 60%)',
    /* grey used for paragraphs */
      darkShades5: 'hsl(210, 22%, 49%)',
      darkShades6: 'hsl(209, 28%, 39%)',
      darkShades7: 'hsl(209, 34%, 30%)',
      darkShades8: 'hsl(211, 39%, 23%)',
      darkShades9: 'hsl(209, 61%, 16%)',
      blackColor1: "#000",
      blackColor2: "#333",
      whiteColor1: "#fff",
      lightShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      darkShadow: '0 5px 15px rgba(0, 0, 0, 0.4)',

      fontSizes: {
        displayBase: "1.125rem",
        displayLarge: "1.5rem",
        displaySmall: "0.9rem",
        displayExtraSmall: "0.75rem",

        displayMega: "4rem",
        displayH1: "3rem",
        displayH2: "2.125rem",
        displayH3: "1.75rem",
        displayH4: "1.5rem",
        displayH5: "1.25rem",
        displayH6: "0.875rem",

        interfaceBase: "1rem",
        interfaceLarge: "1.25rem",
        interfaceSmall: "0.875rem",
        interfaceExtraSmall: "0.75rem",

        interfaceH1: "2.5rem",
        interfaceH2: "2rem",
        interfaceH3: "1.75rem",
        interfaceH4: "1.4375rem",
        interfaceH5: "1.1875rem",
        interfaceH6: "1rem",
      },
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Padding
    pl: (value) => ({
      paddingLeft: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),

    pt: (value) => ({
      paddingTop: value,
    }),

    pb: (value) => ({
      paddingBottom: value,
    }),

    px: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    py: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    // A property for applying width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value,
    }),
  },
  getCssString: {
    removeStyle: "none",
  },
});
