import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ActionsPage from "./pages/ActionsPage";

//Aqui importem navbar y footer per a totes les pages en lloc dde cridarlo

import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

const App: React.FC = () => {
  // 🌙🌞 Estado global del tema
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // 🎨 Definimos el tema de MUI en función de darkMode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          // opcional: puedes personalizar colores aquí
          // primary: { main: "#89e186" },
          // background: {
          //   default: darkMode ? "#121212" : "#f5f5f5",
          //   paper: darkMode ? "#1e1e1e" : "#ffffff",
          // },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      {/* Aplica fondo y colores por defecto según el tema */}
      <CssBaseline />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar siempre visible, con el switch */}
        <NavBarComponent darkMode={darkMode} toggleTheme={toggleTheme} />

        {/* Contenido principal que crece */}
        <Box component="main" sx={{ flexGrow: 1,
            overflow: "auto",
            display:"flex",
         }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acciones" element={<ActionsPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            {/* Ruta comodín */}
            <Route path="*" element={<h1>404 — Nada por aquí 🌫️</h1>} />
          </Routes>
        </Box>

        {/* Footer abajo del todo */}
        <FooterComponent />
      </Box>
    </ThemeProvider>
  );
  
};

export default App;