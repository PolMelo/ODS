import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/* ---------------------- TEMAS PERSONALIZADOS ---------------------- */

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#D8D262" },
        background: {
            default: "#d4cd49ff",
            paper: "#ffffff",
        },
        text: { primary: "#292624" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#292624" },
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
    // Detecta tema del sistema
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Estado inicial:
    // → si hay algo guardado en localStorage, úsalo
    // → si no, usa el tema del sistema
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return systemPrefersDark; // autodetección por defecto
    });

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const nuevo = !prev;
            localStorage.setItem("theme", nuevo ? "dark" : "light");
            return nuevo;
        });
    };

    // Si el usuario cambia el tema en su sistema operativo
    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const listener = (event: MediaQueryListEvent) => {
            const saved = localStorage.getItem("theme");
            // solo aplicamos el cambio si NO hay override del usuario
            if (!saved) {
                setIsDarkMode(event.matches);
            }
        };

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

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
