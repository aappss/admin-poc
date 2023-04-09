import { makeTheme } from "@theme-ui/css/utils";

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
};

export const colors = {
  text: {
    black: "#000",
    primary: "#333333",
    secondary: "#686868",
    tertiary: "#868686",
    quaternary: "#B6B6B6",
    red: "#FF0000",
  },
  blue: {
    primary: "#006FCB",
    secondary: "#349EF5",
    tertiary: "#B6DAFF",
  },
  background: {
    white: "#fff",
    primary: "#F5F5F5",
  },
  card: {
    primary: "#EFF3F6",
    secondary: "#E1E6EE",
  },
  red: {
    primary: "#FF0000",
    secondary: "#F9AA8F",
  },
  muted: "#f6f6f6",
};

const buttonDefault = {
  cursor: "pointer",
  fontFamily: "Roboto",
  fontSize: [0, 1, 1],
};

export const base = makeTheme({
  breakpoints: ["320px", "481px", "769px", "1025px", "1201px"],
  space: [0, 8, 16, 24, 32, 48, 64, 80, 96, 128],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',

    heading: "Roboto",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 22, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      tertiary: colors.text.tertiary,
    },
    background: colors.background.primary,
    primary: colors.blue.primary,
    error: colors.red.primary,
    card: colors.background.white,
    success: "#4BB543",
    border: "#E1E6EE",
    topbar:"#fff",
    // ...colors,
    modes: {
      dark: {
        text: {
          primary: '#fff',
          secondary: '#b1b1b1',
          tertiary: '#999',
        },
        background:"#222",
        topbar:"#000"
      },
      topbar:"#fff",
      background: "#161616",
      card: "#212121",
      primary: "#0cf",
    },
  },
  buttons: {
    primary: {
      ...buttonDefault,
      backgroundColor: colors.blue.primary,
      minWidth: "96px",
      padding: "15px 20px",
      // minHeight: '48px',
      borderRadius: "100px",
      ":hover": {
        backgroundColor: "#005AA3",
      },
      ":active": {
        backgroundColor: "#004F8F",
      },
      ":disabled": {
        backgroundColor: "#EFF3F6",
        color: "#B6B6B6",
      },
    },

    primarylarge: {
      variant: "buttons.primary",
    },

    primarymedium: {
      variant: "buttons.primary",
      minWidth: "84px",
      padding: "10px 16px",
      // minHeight:'40px'
    },

    primarysmall: {
      variant: "buttons.primary",
      minWidth: "67.5px",
      padding: "5px 12px",
      // minHeight:'30px'
    },

    primaryxs: {
      variant: "buttons.primary",
      minWidth: "30px",
      borderRadius: "10px",
      padding: "3px",
    },

    secondary: {
      ...buttonDefault,
      backgroundColor: "#fff",
      border: "1px solid #006FCB",
      color: "#006FCB",
      minWidth: "96px",
      padding: "14px 20px",
      borderRadius: "100px",
      ":hover": {
        border: "1px solid #005AA3",
        color: "#005AA3",
      },
      ":active": {
        border: "1px solid #004F8F",
        color: "#004F8F",
      },
      ":disabled": {
        border: "1px solid #B6B6B6",
        color: "#B6B6B6",
      },
    },

    secondarylarge: {
      variant: "buttons.secondary",
    },

    secondarymedium: {
      variant: "buttons.secondary",
      minWidth: "84px",
      padding: "9px 16px;",
    },

    secondarysmall: {
      variant: "buttons.secondary",
      minWidth: "67.5px",
      padding: "4px 12px",
    },

    secondaryxs: {
      variant: "buttons.secondary",
      minWidth: "30px",
      borderRadius: "10px",
      padding: "2px",
      backgroundColor: "#EFF3F6",
      border: "1px solid #B6B6B6",
      color: "#B6B6B6",
    },

    tab: {
      ...buttonDefault,
      border: "none",
      padding: 0,
      margin: 0,
      background: "transparent",
      display: "flex",
      alignItems: "center",
    },
  },

  text: {
    textMediumPrimary: {
      fontSize: [0, 1, 1, 1, 1],
      fontWeight: 500,
      color: "text.primary",
    },

    textRegularLight: {
      fontWeight: 400,
      fontSize: [0, 1, 1, 1, 1],
      color: "text.primary",
    },

    textRegularPrimary: {
      fontSize: [0, 1, 1, 1, 1],
      fontWeight: 400,
      color: "text.primary",
    },
    textRegularSecondary: {
      fontSize: [0, 1, 1, 1, 1],
      fontWeight: 400,
      color: "text.secondary",
    },

    textBoldBlack: {
      variant: "text.textRegularPrimary",
      fontWeight: 700,
      color: "text.black",
    },

    textMediumBlack: {
      fontSize: [0, 1, 1, 1, 1],
      fontWeight: 500,
      color: "text.black",
    },
    // text26MediumDark: {
    //   fontSize: "26px",
    //   fontWeight: 500,
    //   color: "#484848",
    // },

    textMediumSecondaryBlue: {
      fontSize: [0, 1, 1, 1, 1],
      fontWeight: 500,
      color: colors.blue.secondary,
    },

    textRegularRed: {
      variant: "text.textRegularPrimary",
      color: colors.text.red,
    },

    textRegularTertiary: {
      fontWeight: 400,
      fontSize: [0, 1, 1, 1, 1],
      color: "colors.text.tertiary",
    },
    // textRegularPrimary: {
    //   fontWeight: 500,
    //   fontSize: "24px",
    //   color: colors.text.primary,
    // },
  },

  forms: {
    labelInput: {
      variant: "text.textRegularPrimary",
      fontSize: [0, 0, 0, 0, 1],
      position: "absolute",
      top: "-7px",
      left: "12px",
      width: "inherit",
      backgroundColor: "#fff",
      color: "#686868",
      zIndex: 2,
      px: 1,
    },
    "input[type='radio']": {
      ":focus": {
        outline: "none",
      },
    },
    autoCompleteStyle: {
      backgroundColor: "red",
    },
    appInput: {
      border: "1px solid #E1E6EE",
      borderRadius: "4px",
      padding: 10,
      outline: "none",
      variant: "text.textRegularPrimary",
      background: "#fff",
      ":focus-visible": {
        outline: `1px solid ${colors.blue.primary}`,
      },
      ":active": {
        outline: `1px solid ${colors.blue.primary}`,
      },
      "::placeholder": {
        variant: "text.textRegularPrimary",
        color: "#B6B6B6",
      },
      ":disabled": {
        backgroundColor: "#f7f7f7",
        // backgroundColor:"#F0F0F0",
      },
    },
    inputWithoutBorder: {
      outline: "none",
      border: "1px solid transparent",
      ":focus": {
        outline: "none",
      },
    },
  },

  variants: {
    prospect: {
      // paymentvalue: {
      //   fontSize: [2, 4, 6],
      // },

      "p.pointerLink": {
        color: "blue",
        cursor: "pointer",
        fontSize: ["14px"],
        fontWeight: "500",
      },

      hero: {
        img: {
          maxWidth: ["241px", "241px", "241px", "241px", "241px", "471px"],
          width: "100%",
        },
      },
      logo: {
        pt: [3, 3, 3, 3, 3, "56px"],
        mx: [0, 0, 0, 0, 0, "67px"],
        img: {
          width: "80%",
          maxWidth: ["470px", "470px", "470px", "470px", "470px", "270px"],
        },
      },

      content: {
        p: [3, 3, 3, 3, 3, 0],
        mx: [0, 0, 0, 0, "67px", "67px"],
        mt: [0, 0, 0, 0, 0, "43px"],
        mb: [0, 0, 0, 0, 0, "66px"],
      },
      section: {
        marginTop: ["26px", "26px", "26px", "26px", "26px", "26px"],
      },
      h3: {
        fontSize: [16, 18, 18, 18, 24, 24],
        fontWeight: 500,
        color: "#333333",
        lineHeight: "24px",
      },
      h4: {
        fontSize: [14, 14, 14, 14, 14, 14],
        fontWeight: 500,
        color: "#333333",
        lineHeight: "21px",
      },
      p: {
        fontSize: [12, 12, 12, 12, 12, 12],
        mt: [0, 0, 0, 0, 0, "7px"],
        fontWeight: 400,
        color: "#333333",
        lineHeight: "16px",
      },
      card: {
        "@media screen and (min-width: 1201px)": {
          variant: "variants.card",
          margin: "0 auto",
          width: "70%",
          position: "sticky",
          top: "50px",
          pt: "20px",
          pb: "0px",
          mb: "20px",
          px: "40px",
          border: "none",
          boxShadow: " 0px 0px 4px 0px rgba(0,0,0,0.25)",
        },

        marginTop: "44px",
        marginBottom: ["100px"],
        section: {
          marginTop: "43px",
        },
        div: {
          flex: "1",
          wordWrap: "break-word",
        },
        p: {
          fontSize: [14, 14, 14, 14, 14, 14],
          fontWeight: 400,
          color: "#333333",
          lineHeight: "21px",
        },

        "p.title": {
          mt: [0, 0, 0, 0, 0, 0],
          fontSize: [14, 14, 14, 14, 14, 14],
        },
        //Adding breakpoint

        paymentDetail: {
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      paymentMethods: {
        justifyContent: "center",
        marginTop: "37px",
      },
      cta: {
        justifyContent: "center",
        py: 4,
        // mt: "20px",
        zIndex: "2",
        backgroundColor: [
          "background",
          "background",
          "background",
          "background",
          "background",
          "white",
        ],
        bottom: 0,
        width: "100%",
        left: 0,
        px: 3,
        position: ["fixed", "fixed", "fixed", "fixed", "fixed", "relative"],
      },
      offerexpired: {
        width: ["100", "300"],
      },
      // desktopLoginText: {
      //   color: "#006FCB",
      //   fontWeight: "500",
      //   fontSize: "12px",
      //   heading: {
      //     fontWeight: "500",
      //     fontSize: "14px",
      //     lineHeight: "150%",
      //   },
      // },
      // desktopHeading: {
      //   fontWeight: "500",
      //   fontSize: "14px",
      // },
    },
    appContainer: {
      backgroundColor: "background",
    },

    prospectContainer: {
      variant: "appContainer",
    },

    navContent: {
      overflow: "hidden",
      width: "100%",
    },

    nav: {
      overflow: "hidden",
      position: "relative",
      background: "#fff",
      width: "96px",
      transition: "width 0.2s ease-in-out",

      ".title": {
        // display: "none",
        position: "absolute",
        left: 50,
        visibility: "hidden",
        opacity: "0",
        transition: "opacity .3s ease-in-out",
      },
      "&:hover": {
        width: "200px",
        ".title": {
          // display: "block",
          visibility: "visible",
          opacity: "1",
          color: colors.text.primary,
        },
      },
    },
    card: {
      padding: 2,
      backgroundColor: "card",
      border: "1px solid #E1E6EE",
      borderRadius: "10px",
      overflow: "hidden",
      borderRadius: "10px",
    },

    popover: {
      variant: "variants.card",
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
    },
    appContent: {
      px: 3,
    },
    topBar: {
      background: "topbar",
      py: 2,
      px: 3,
    },
    tableHead: {
      // height: "41px",
      alignItems: "center",
    },
    tableBody: {
      // height: "48px",
      alignItems: "center",
    },

    modal: {
      variant: "variants.card",
      padding: 0,
      position: "absolute",
      minWidth: 800,
      width: 800,
      minHeight: 500,
      height: 500,
      zIndex: 999,
      top: "50%",
      left: "50%",
      overflow: "hidden",
      transform: "translate(-50%,-50%)",
    },
    modalHeader: {
      height: "50px",
      px: 3,
    },
    modalBody: {
      px: 3,
    },
    modalFooter: {
      height: "50px",
      px: 3,
    },
    backdrop: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.5)",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 999,
    },

    paginationNumber: {
      border: "1px solid #E1E6EE",
      borderRadius: "4px",
      padding: 1,
      height: 30,
      marginLeft: 1,
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      a: {
        textDecoration: "none",
        fontSize: [0, 0, 0, 0, 1],
      },
    },
    arrowRight: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "#F3F3F3",
      position: "absolute",
      zIndex: "1",
      top: "9px",
      left: "-22px",
    },

    left: {
      flex: "2",
      marginLeft: "100px",
    },
    right: {
      position: "relative",
      left: "-365px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    // paginationNumberBox: {
    //   border: "1px solid #E1E6EE",
    //   borderRadius: "4px",
    //   padding: "8px",
    //   marginLeft: "0.2rem",
    //   cursor: "pointer",
    //   a: {
    //     textDecoration: "none",
    //     fontSize: "14px",
    //   },
    //   // ":active": {
    //   //   border: "2px solid blue",
    //   // },
    // },
    avatar: {
      img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        overflow: "hidden",
        margin: "10px 10px 0 0",
      },
    },
    avatarDetail: {
      position: "relative",
      ml: 1,

      // rupeeSymbolFlex: {
      //   alignItems: "center",
      // },
      // rupeeBox: {
      //   border: "1px solid #E1E6EE",
      //   padding: "0.2rem",
      //   width: "479.5px",
      // },
      // rupeeSymbolFlex: {
      //   alignItems: "center",
      // },
    },

    styles: {
      root: {
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
      },
      h1: {
        ...heading,
        fontSize: 5,
      },
      h2: {
        ...heading,
        fontSize: "22px",
      },
      h3: {
        ...heading,
        fontSize: 3,
      },
      h4: {
        ...heading,
        fontSize: 2,
      },
      h5: {
        ...heading,
        fontSize: "12px",
      },
      h6: {
        ...heading,
        fontSize: 0,
      },
      p: {
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      },
      a: {
        color: "primary",
      },
      pre: {
        fontFamily: "monospace",
        overflowX: "auto",
        code: {
          color: "inherit",
        },
      },
      code: {
        fontFamily: "monospace",
        fontSize: "inherit",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      img: {
        maxWidth: "100%",
      },
    },
    rupeeBox: {
      variant: "forms.appInput",
      position: "relative",
      height: "100%",
      ":focus-visible": {
        outline: `1px solid ${colors.blue.primary}`,
      },
      ":active": {
        outline: `1px solid ${colors.blue.primary}`,
      },
      "::placeholder": {
        variant: "text.textRegularPrimary",
        color: "#B6B6B6",
      },
      input: {
        padding: "10px",
      },
    },
  },
});

export default base;
