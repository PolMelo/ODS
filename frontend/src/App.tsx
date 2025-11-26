import React from "react";
import FooterComponent from "./components/FooterComponent";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
      }}
    >
      {/* Solo footer */}
      <FooterComponent />
    </div>
  );
};

export default App;


