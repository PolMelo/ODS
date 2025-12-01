import React from "react";
import "./OSCard.css";

export type OSCardProps = {
  title: string;
  img: string;
  ods: string[];
  date: string;
};

const OSCard: React.FC<OSCardProps> = ({ title, img, ods, date }) => {
  return (
    <div className="oscard">
      
      {/* Imagen */}
      <img src={img} alt={title} className="oscard-img" />

      {/* Contenido */}
      <div className="oscard-content">

        {/* Título */}
        <h3 className="oscard-title">{title}</h3>

        {/* Etiquetas ODS */}
        <div className="oscard-ods-container">
          {ods.map((o) => (
            <span key={o} className="oscard-ods-tag">
              {o}
            </span>
          ))}
        </div>

        {/* Fecha */}
        <div className="oscard-date">
          <span>Fecha: {date}</span>
        </div>

      </div>
    </div>
  );
};

export default OSCard;
