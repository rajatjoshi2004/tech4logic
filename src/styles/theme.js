import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    custom: {
      white: "#fff",
    },
    background: {
      contactUsBg: "#2c2c2c",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      white: "#171527",
    },
    background: {
      contactUsBg: "#fff",
    },
  },
});

let theme = createTheme({
  typography: {
    fontFamily: "'Poppins !important', 'sans-serif'",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: "capitalize",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      xm: 375,
      mobile: 480,
      tablet: 768,
      laptop: 1024,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
  },
};

export default theme;

export { lightTheme, darkTheme };
