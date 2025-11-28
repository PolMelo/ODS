import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// 💡 Asegurar que #root existe (ve del twig base)
const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error("❌ No se encontró el elemento #root en el HTML.");
}

// 🚀 Crear el root y renderizar tu App bacana
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
