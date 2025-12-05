import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";

/* -----------------------------------------------------------
   🌞 TEMA CLARO
----------------------------------------------------------- */
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#0EA5E9" },
        background: {
            default: "#F7F7F7",
            paper: "#FFFFFF",
        },
        text: { primary: "#111111", secondary: "#4B5563" },
    },
    typography: {
        fontFamily: "Oswald, sans-serif",
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    transition: "0.2s ease",
                },
                contained: {
                    background: "#0EA5E9",
                    "&:hover": { background: "#0284C7" },
                },
                outlined: {
                    borderColor: "#0EA5E9",
                    "&:hover": {
                        background: "rgba(14, 165, 233, 0.1)",
                        borderColor: "#0284C7",
                    },
                },
                text: {
                    color: "#0EA5E9",
                    "&:hover": { background: "rgba(0,0,0,0.04)" },
                },
            },
        },
    },
});

/* -----------------------------------------------------------
   🌙 TEMA OSCURO
----------------------------------------------------------- */
export const darkTheme = createTheme({
    palette: {
        mode: "dark",       
        primary: { main: "#38BDF8" },
        background: {
            default: "#0D1117",
            paper: "#161B22",
        },
        text: { primary: "#E5E7EB", secondary: "#9CA3AF" },
    },
    typography: {
        fontFamily: "Oswald, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: { backgroundColor: "#0D1117" },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(13,17,23,0.75)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    transition: "0.2s ease",
                },
                contained: {
                    background: "#1F2937",
                    color: "#E5E7EB",
                    "&:hover": { background: "#374151" },
                },
                outlined: {
                    borderColor: "#38BDF8",
                    "&:hover": {
                        background: "rgba(56,189,248,0.08)",
                        borderColor: "#7DD3FC",
                    },
                },
                text: {
                    color: "#38BDF8",
                    "&:hover": { background: "rgba(255,255,255,0.08)" },
                },
            },
        },
    },
});

/* -----------------------------------------------------------
   CONTEXTO DEL TEMA
----------------------------------------------------------- */
type ThemeContextType = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

/* -----------------------------------------------------------
   WRAPPER DE FONDO
----------------------------------------------------------- */
const ThemeGradientWrapper = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                background:
                    mode === "dark"
                        ? "radial-gradient(circle at 20% 20%, #1E293B, #0D1117 70%)"
                        : "linear-gradient(180deg, #FFFFFF, #F7F7F7)",
            }}
        >
            {children}
        </Box>
    );
};

/* -----------------------------------------------------------
   PROVIDER PRINCIPAL DEL TEMA
----------------------------------------------------------- */
export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("theme") === "dark";
    });

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <ThemeGradientWrapper>{children}</ThemeGradientWrapper>
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};
