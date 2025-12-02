import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <footer
      style={{
       width: "100%",  
    padding: "1.5rem 0",
    textAlign: "center",
    marginTop: "auto",
    boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.6)",
      }}
    >
      <p style={{ margin: 0 }}>
        © 2025 <strong>ODSfera</strong> – Desarrollo Sostenible
      </p>
    </footer>
  );
};

export default FooterComponent;






