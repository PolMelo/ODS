import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2", // azul principal
        },
        secondary: {
            main: "#ff4081", // rosa
        },
        background: {
            default: "#f5f5f5", // fondo general
            paper: "#ffffff", // fondos de cards, navbar, footer
        },
        text: {
            primary: "#000000", // color del texto
            secondary: "#555555",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9", // azul claro
        },
        secondary: {
            main: "#f48fb1", // rosa claro
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
        text: {
            primary: "#ffffff",
            secondary: "#aaaaaa",
        },
    },
});
