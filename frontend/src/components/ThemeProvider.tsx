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
        // Color Primario: Indigo vibrante
        primary: { main: "#4f46e5" }, 
        secondary: { main: "#10B981" }, // Esmeralda para contraste ODS
        background: { 
            // Color de fondo principal para cuando NO se aplica la gradiente
            default: "#F1F5F9", 
            // Fondo de papel/tarjetas: Blanco puro
            paper: "#FFFFFF", 
        },
        text: { 
            primary: "#1F2937", 
            secondary: "#6B7280", 
        },
    },
});

// Paleta Oscura: Profunda, oscura y basada en Indigo/Slate
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        // Color Primario: Un Índigo claro y vibrante para acentos
        primary: { main: "#818CF8" }, 
        secondary: { main: "#34D399" }, // Verde brillante para contraste ODS
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
    // Inicializa el estado leyendo de localStorage o asumiendo 'light' por defecto
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    // Función para cambiar el tema
    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    // Efecto para guardar el estado del tema en localStorage cada vez que cambia
    useEffect(() => {
        // Usamos firebase's firestore database instead of localStorage
        // En este caso, usaremos localStorage ya que es solo para preferencias de UI y la persistencia del tema suele ser local.
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

/* ---------------------- COMPONENTE DE EJEMPLO (APP) ---------------------- */

const ToggleButton = () => {
    const { isDarkMode, toggleTheme } = useThemeMode();
    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 4, 
                p: 1.5,
                borderRadius: 2,
                // Aplicamos el estilo glassmorphism a este control
                backdropFilter: "blur(8px)", 
                backgroundColor: mode === "dark" ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.7)",
                border: "1px solid",
                borderColor: mode === "dark" ? "rgba(148,163,184,0.25)" : "rgba(100,116,139,0.2)",
            }}
        >
            <Typography sx={{ color: mode === 'dark' ? 'primary.main' : 'text.primary', mr: 1, fontWeight: 'bold' }}>
                Modo Día
            </Typography>
            <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                color="default"
                inputProps={{ 'aria-label': 'toggle theme' }}
                sx={{
                    '& .MuiSwitch-track': {
                        backgroundColor: mode === 'dark' ? '#4f46e5 !important' : '#3B82F6 !important',
                    },
                    '& .MuiSwitch-thumb': {
                        color: mode === 'dark' ? '#34D399' : '#F1C40F', // Color de botón distintivo
                    },
                }}
            />
            <Typography sx={{ color: mode === 'dark' ? 'primary.main' : 'text.primary', ml: 1, fontWeight: 'bold' }}>
                Modo Noche
            </Typography>
        </Box>
    );
};

const MainContent = () => {
    const { isDarkMode } = useThemeMode();
    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <Container maxWidth="md" sx={{ pt: 8 }}>
            <Box display="flex" justifyContent="center">
                <ToggleButton />
            </Box>
            
            <Paper 
                elevation={8}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    // ESTILO GLASSMORHISM PRINCIPAL
                    backdropFilter: "blur(12px)", 
                    backgroundColor: mode === "dark" ? "rgba(15,23,42,0.85)" : "rgba(255,255,255,0.7)",
                    border: "1px solid",
                    borderColor: mode === "dark" ? "rgba(148,163,184,0.25)" : "rgba(100,116,139,0.2)",
                    transition: 'background-color 0.3s',
                }}
            >
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    fontWeight={700} 
                    color="primary"
                    sx={{ mb: 3 }}
                >
                    Plataforma ODSfera
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Este es un ejemplo de contenido utilizando el nuevo tema con la paleta Indigo/Slate/Esmeralda y el fondo degradado. La tarjeta principal utiliza el efecto "Glassmorphism" con un ligero desenfoque (`backdropFilter`) para resaltar sobre la gradiente.
                </Typography>

                <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
                    Acción Principal
                </Button>
                
                <Button variant="outlined" color="secondary" size="large">
                    Más Información
                </Button>

                <Box sx={{ mt: 4, p: 3, border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
                    <Typography variant="h6" color="text.secondary">
                        Detalles del Tema
                    </Typography>
                    <Typography variant="body2">
                        Modo actual: <strong style={{ color: theme.palette.primary.main }}>{isDarkMode ? 'Noche (Dark)' : 'Día (Light)'}</strong>
                    </Typography>
                    <Typography variant="body2">
                        Color Primario: <span style={{ color: theme.palette.primary.main }}>{theme.palette.primary.main}</span>
                    </Typography>
                    <Typography variant="body2">
                        Fondo de Tarjeta (Paper): <span style={{ color: theme.palette.background.paper }}>{theme.palette.background.paper}</span>
                    </Typography>
                </Box>
            </Paper>
            <Typography 
                variant="caption" 
                align="center" 
                display="block" 
                sx={{ mt: 4, color: 'text.secondary' }}
            >
                El degradado se aplica globalmente en el AppThemeProvider.
            </Typography>
        </Container>
    );
};


// Componente principal que usa el provider
export default function App() {
    return (
        <AppThemeProvider>
            <MainContent />
        </AppThemeProvider>
    );
}