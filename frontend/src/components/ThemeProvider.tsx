import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { 
    ThemeProvider as MUIThemeProvider, 
    createTheme, 
    useTheme // Necesario para obtener el modo actual dentro del provider
} from "@mui/material/styles";
import { 
    CssBaseline, 
    Box, // Necesario para aplicar el fondo con la gradiente
    Button,
    Typography,
    Container,
    Paper,
    Switch 
} from "@mui/material";

/* ---------------------- TEMAS PERSONALIZADOS ---------------------- */

// Paleta Clara: Limpia y moderna (Basada en el gradiente claro)
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

// Paleta Oscura: Profunda, oscura y basada en Indigo/Slate
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#292624" },  //colores principales de tema noche - Arnau
        background: {
            // Fondo predeterminado: El color más oscuro del gradiente radial (#020617 - Slate-950)
            default: "#020617",
            // Fondo de papel/tarjetas: Un gris oscuro (Slate-900) para las tarjetas
            paper: "#0F172A", 
        },
        text: { 
            primary: "#E2E8F0", // Gris muy claro
            secondary: "#94A3B8", // Gris azulado suave
        },
    },
    // Sobrescribimos el fondo del cuerpo si no se usa el Box con la gradiente
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#020617",
                },
            },
        },
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

/* ---------------------- WRAPPER DE GRADIENTES ---------------------- */

// Este componente aplica el fondo degradado y el theme de MUI
const ThemeGradientWrapper = ({ children }: { children: ReactNode }) => {
    // Usamos el hook para obtener el modo actual
    const theme = useTheme(); 
    const mode = theme.palette.mode;

    return (
        // El Box envuelve a todos los hijos y aplica el degradado
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                // Lógica de la gradiente del RegisterMUI
                background:
                    mode === "dark"
                        ? "radial-gradient(circle at top left, #4f46e5 0, #0f172a 45%, #020617 100%)"
                        : "radial-gradient(circle at top left, #dbeafe 0, #ffffff 60%)",
            }}
        >
            {children}
        </Box>
    );
};


/* ---------------------- PROVIDER PRINCIPAL ---------------------- */

/**
 * Proveedor principal de temas. Maneja el estado y persiste en localStorage.
 */
export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    // Selecciona el tema actual
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                {/* CssBaseline debe ir DENTRO de ThemeProvider */}
                <CssBaseline enableColorScheme />
                
                {/* El Wrapper de gradiente envuelve a los hijos */}
                <ThemeGradientWrapper>
                    {children}
                </ThemeGradientWrapper>
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};


// ctrl+k y ctrl+c para comentar en bloque
//ctrl+k y ctrl+u para descomentar en bloque
