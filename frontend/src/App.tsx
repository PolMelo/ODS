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
import CrearOds from "./pages/CrearOds";
import LogoutPage from "./pages/LogoutPage";

import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

import ProtectedRoute from "./route/ProtectedRoute"; 
import AuthRedirect from "./route/AuthRedirect";  

// ✅ Importamos UserProvider
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    // ✅ Envolvemos toda la app con UserProvider
    <UserProvider>
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
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acciones" element={<AccionesPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/contacto" element={<ContactPage />} />

            {/* LOGIN → Bloquear si ya hay sesión */}
            <Route
              path="/login"
              element={
                <AuthRedirect message="Ya estás logueado">
                  <LoginPage />
                </AuthRedirect>
              }
            />

            {/* SIGNUP → Bloquear si ya hay sesión */}
            <Route
              path="/signup"
              element={
                <AuthRedirect message="Ya tienes una cuenta">
                  <RegisterPage />
                </AuthRedirect>
              }
            />

            <Route path="/logout" element={<LogoutPage />} />

            {/* Ruta protegida */}
            <Route
              path="/crearaccion"
              element={
                <ProtectedRoute>
                  <CrearOds />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>

        <FooterComponent />
      </Box>
    </UserProvider>
  );
};

export default App;
