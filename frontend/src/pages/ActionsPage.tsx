import React from "react";
import OSCard from "../components/OSCard";

const Acciones: React.FC = () => {
    return (
        <div
            style={{
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
            }}
        >
            <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "black" }}>
                Acciones ODSfera
            </h1>

            {/* GRID de tarjetas */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.5rem",
                    width: "100%",
                    maxWidth: "1100px",
                }}
            >
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