'use client'
import { createTheme } from '@mui/material';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#EB2C29",
    },
    secondary: {
      main: "#333333",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#111111",
    },
  },
});
theme.shadows[1]="0px 5px 22px lightgray"


