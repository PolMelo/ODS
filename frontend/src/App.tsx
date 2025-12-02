import React from "react";
import { Route, Routes } from "react-router-dom";

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
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBarComponent />

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

      <FooterComponent />
    </Box>
  );
};

export default App;

