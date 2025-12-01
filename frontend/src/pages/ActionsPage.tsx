import React from "react";
import OSCard from "../components/OSCard";
import "./ActionsPage.css";

const Acciones: React.FC = () => {
  return (
    <div className="actions-page">
      
      <h1 className="actions-title">Acciones ODSfera</h1>

      {/* GRID de tarjetas */}
      <div className="actions-grid">
        
        <OSCard
          title="Reduce tu consumo eléctrico"
          img="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg"
          ods={["ODS 7", "Energía asequible", "Eficiencia energética"]}
          date="15/02/2025"
        />

        <OSCard
          title="Compra productos a granel"
          img="https://images.pexels.com/photos/3735175/pexels-photo-3735175.jpeg"
          ods={["ODS 12", "Consumo responsable"]}
          date="20/02/2025"
        />

        <OSCard
          title="Muévete sin contaminar"
          img="https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg"
          ods={["ODS 13", "Acción por el clima", "Movilidad sostenible"]}
          date="25/02/2025"
        />

      </div>
    </div>
  );
};

export default Acciones;
