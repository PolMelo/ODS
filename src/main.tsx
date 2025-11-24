import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6e8efb, #a777e3)",
      color: "white",
      fontFamily: "Arial",
      fontSize: "2rem",
    },
    card: {
      padding: "2rem 3rem",
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        Hola, React funciona bonito! 🚀✨
      </div>
    </div>
  );
}

root.render(<App />);
