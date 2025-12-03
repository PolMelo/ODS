import React from "react";
import { Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";

import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import AccionesPage from "./pages/ActionsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/404";

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
          overflow: "auto", // scroll si el contenido es más alto que la pantalla
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acciones" element={<AccionesPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>

      <FooterComponent />
    </Box>
  );
};

export default App;
