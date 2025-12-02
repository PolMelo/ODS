import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

// -----------------------------
// 🎨 Creamos el tema
// -----------------------------
let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
  },

  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "3.2em",
      lineHeight: 1.1,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: 500,
          fontFamily: "inherit",
          backgroundColor: "#1a1a1a",
          transition: "border-color 0.25s",
          "&:hover": {
            borderColor: "#8dff64",
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#646cff",
          textDecoration: "none",
          "&:hover": {
            color: "#fcfcfc",
          },
        },
      },
    },
  },
});

// Ajusta fuentes responsivas
theme = responsiveFontSizes(theme);

// -----------------------------
// 🪟 Buscar elemento root
// -----------------------------
const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error("❌ No se encontró el elemento #root en el HTML.");
}

const root = ReactDOM.createRoot(rootElement);

// -----------------------------
// 🚀 Render del proyecto
// -----------------------------
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
