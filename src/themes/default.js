import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
      primary: {
        main: '#2acfcf'
      }
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: 16,
      fontWeightLight: 500,
      fontWeightRegular: 500,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'white',
            borderRadius: 28,
          },
        }, 
      }, 
    },
});

export default Theme;