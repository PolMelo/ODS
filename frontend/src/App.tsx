import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ActionsPage from "./pages/ActionsPage";

import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

import "./App.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <div className="fixed-navbar">
        <NavBarComponent darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>

      {/* CONTENIDO SCROLLABLE */}
      <main className="scroll-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acciones" element={<ActionsPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<h1>404 — Nada por aquí 🌫️</h1>} />
        </Routes>
      </main>

      {/* FOOTER */}
      <div className="fixed-footer">
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
