import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1.5rem 0",
        textAlign: "center",
        color: "white",
        background: "linear-gradient(135deg, #2a2a72 0%, #009ffd 100%)",
        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0 }}>
        © 2025 <strong>ODSfera</strong> – Desarrollo Sostenible
      </p>
      <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.85 }}>
        
      </p>
    </footer>
  );
};

export default FooterComponent;



