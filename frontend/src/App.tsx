import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import UserPage from "./pages/UserPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/perfil" element={<UserPage />} />

            {/* Ruta comodín */}
            <Route path="*" element={<h1>404 — Nada por aquí 🌫️</h1>} />
        </Routes>
    );
};

//  <div
//       style={{
//         minHeight: "100vh",
//         minWidth: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         background: "linear-gradient(135deg, #6e8efb, #a777e3)",
//       }}
//     >
//       <NavBarComponent />

//       {/* Solo footer */}
//       <FooterComponent />
//     </div>

export default App;
