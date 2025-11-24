import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🎨 Estilos globales opcionales (puedes crear global.css si quieres)
// import "./global.css";

// 🔥 Animación de fade-in para toda la app
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", "Arial", sans-serif;
    background: #0f0f10;
    color: white;
    overflow: hidden;
  }

  #root {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;

// Inyectamos estilos globales sin usar archivos extra
const styleTag = document.createElement("style");
styleTag.textContent = globalStyles;
document.head.appendChild(styleTag);

// 💡 Asegurar que #root existe y es HTMLDivElement
const rootElement = document.getElementById("root") as HTMLElement | null;

if (!rootElement) {
  throw new Error("❌ No se encontró el elemento #root en el HTML.");
}

// 🚀 Crear el root y renderizar tu App bacana
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
