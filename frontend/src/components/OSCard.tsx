import React from "react";

export type OSCardProps = {
    title: string;
    img: string;
    ods: string[];   // etiquetas ODS como botones
    date: string;
};

const OSCard: React.FC<OSCardProps> = ({ title, img, ods, date }) => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "380px",
                
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .2s ease, box-shadow .2s ease",
                cursor: "pointer",
                minHeight: "420px", // un poco más alta
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 26px rgba(0,0,0,0.20)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
            }}
        >
            {/* Imagen */}
            <img
                src={img}
                alt={title}
                style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                }}
            />

            {/* Contenido */}
            <div style={{ padding: "1.2rem" }}>
                {/* Título */}
                <h3
                    style={{
                        margin: 0,
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        
                    }}
                >
                    {title}
                </h3>

                {/* Etiquetas ODS */}
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginTop: "0.8rem",
                        flexWrap: "wrap",
                    }}
                >
                    {ods.map((o: string) => (
                        <span
                            key={o}
                            style={{
                                padding: "0.3rem 0.7rem",
                                backgroundColor: "#E3FBE3",
                                borderRadius: "999px",
                                border: "1px solid #4ade80",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "#166534",
                            }}
                        >
                            {o}
                        </span>
                    ))}
                </div>

                {/* Fecha */}
                <div
                    style={{
                        marginTop: "1rem",
                        fontSize: "0.85rem",
                        color: "#6b7280",
                    }}
                >
                    <span>Fecha: {date}</span>
                </div>
            </div>
        </div>
    );
};

export default OSCard;