import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff69b4" },   // Hot pink
    secondary: { main: "#ff1493" }, // Accent pink
    background: {
      default: "#000",              // Page background
      paper: "#1a1a1a",             // Card / panel background
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: { color: "#ff69b4", textShadow: "0 0 10px #ff69b4" },
    h5: { color: "#ff69b4", textShadow: "0 0 8px #ff69b4" },
  },


  components: {

    // Buttons
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8,       // Rounded corners
                textTransform: "none", // Keeps button text case as written
                 fontWeight: "bold" }, // Makes button text bold
        containedPrimary: { backgroundColor: "#ff69b4", color: "#000" }, // Pink filled button
        outlinedPrimary: { borderColor: "#ff69b4", color: "#ff69b4" },   // Pink outlined button
      },
    },

    // Icon Buttons
    MuiIconButton: {
      styleOverrides: {
        root: { color: "#ff69b4" },
      },
    },

    // Cards
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: "#1a1a1a", color: "#fff" }, // Dark background with white text
      },
    },


    // Text Fields
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputBase-input": { color: "#fff" },    // White input text
          ".MuiInputLabel-root": { color: "#ff69b4" }, // Pink input labels
        },
      },
    },


    // Select Dropdowns
    MuiSelect: {
      styleOverrides: {
        select: { color: "#ff69b4" }, // Pink selected text
      },
    },
  },
});

export default theme;
