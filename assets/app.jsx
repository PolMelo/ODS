import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <div><h1>Hola desde React + Vite</h1></div>;
}

// monta en el elemento con id "react-root" (ver Twig abajo)
const el = document.getElementById('react-root');
if (el) {
  createRoot(el).render(<App />);
}
