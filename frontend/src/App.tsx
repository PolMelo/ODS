import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ActionsPage from "./pages/ActionsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <NavBarComponent darkMode={darkMode} toggleTheme={toggleTheme} />

        {/* Contenido principal */}
        <Box 
          component="main" 
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acciones" element={<ActionsPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="*" element={<h1>404 — Nada por aquí 🌫️</h1>} />
          </Routes>
        </Box>

        {/* Footer */}
        <FooterComponent />
      </Box>
    </ThemeProvider>
  );
};

export default App;