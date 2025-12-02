import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/* ---------------------- TEMAS PERSONALIZADOS ---------------------- */

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#D8D262" }, //colores principales de tema dia - Arnau
        background: {                       //Aquest groc ¿m'agrada? pero ara que tenim aixo podem provar a buscar una paleta
            default: "#d4cd49ff",          // fins i tot una paleta "gradient" es a dir que el color cambii poc a poc
            paper: "#ffffff",               // Vull dir coses semblants a la pagina de registre en mode nit, que ja estic molt cansat per ficarme a mirar. 
        },
        text: { primary: "#292624" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#292624" },  //colores principales de tema noche - Arnau
        background: {
            default: "#1a1817",
            paper: "#292624",
        },
        text: { primary: "#f0eedd" },
    },
});

/* ---------------------- CONTEXTO ---------------------- */

type ThemeContextType = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

/* ---------------------- PROVIDER ---------------------- */

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};


// ctrl+k y ctrl+c para comentar en bloque
//ctrl+k y ctrl+u para descomentar en bloque
