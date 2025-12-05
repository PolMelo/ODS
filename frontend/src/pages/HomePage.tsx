import React from "react";
import { Button } from "@mui/material";

import ODS0 from "../assets/ODS PNG/ODS 0.png";
import ODS1 from "../assets/ODS PNG/ODS 1.png";
import ODS2 from "../assets/ODS PNG/ODS 2.png";
import ODS3 from "../assets/ODS PNG/ODS 3.png";
import ODS4 from "../assets/ODS PNG/ODS 4.png";
import ODS5 from "../assets/ODS PNG/ODS 5.png";
import ODS6 from "../assets/ODS PNG/ODS 6.png";
import ODS7 from "../assets/ODS PNG/ODS 7.png";
import ODS8 from "../assets/ODS PNG/ODS 8.png";
import ODS9 from "../assets/ODS PNG/ODS 9.png";
import ODS10 from "../assets/ODS PNG/ODS 10.png";
import ODS11 from "../assets/ODS PNG/ODS 11.png";
import ODS12 from "../assets/ODS PNG/ODS 12.png";
import ODS13 from "../assets/ODS PNG/ODS 13.png";
import ODS14 from "../assets/ODS PNG/ODS 14.png";
import ODS15 from "../assets/ODS PNG/ODS 15.png";
import ODS16 from "../assets/ODS PNG/ODS 16.png";
import ODS17 from "../assets/ODS PNG/ODS 17.png";

import CARD1 from "../assets/ODS EXPLICADES/CARD1.jpg";
import CARD2 from "../assets/ODS EXPLICADES/CARD2.jpg";
import CARD3 from "../assets/ODS EXPLICADES/CARD3.jpg";
import CARD4 from "../assets/ODS EXPLICADES/CARD4.jpg";
import CARD5 from "../assets/ODS EXPLICADES/CARD5.jpg";
import CARD6 from "../assets/ODS EXPLICADES/CARD6.jpg";
import CARD7 from "../assets/ODS EXPLICADES/CARD7.jpg";
import CARD8 from "../assets/ODS EXPLICADES/CARD8.jpg";
import CARD9 from "../assets/ODS EXPLICADES/CARD9.jpg";
import CARD10 from "../assets/ODS EXPLICADES/CARD10.jpg";
import CARD11 from "../assets/ODS EXPLICADES/CARD11.jpg";
import CARD12 from "../assets/ODS EXPLICADES/CARD12.jpg";
import CARD13 from "../assets/ODS EXPLICADES/CARD13.jpg";
import CARD14 from "../assets/ODS EXPLICADES/CARD14.jpg";
import CARD15 from "../assets/ODS EXPLICADES/CARD15.jpg";
import CARD16 from "../assets/ODS EXPLICADES/CARD16.jpg";
import CARD17 from "../assets/ODS EXPLICADES/CARD17.jpg";

const odspairs = [
    { ods: ODS0, card: ODS0 }, // ODS0 usa su propia imagen
    { ods: ODS1, card: CARD1 },
    { ods: ODS2, card: CARD2 },
    { ods: ODS3, card: CARD3 },
    { ods: ODS4, card: CARD4 },
    { ods: ODS5, card: CARD5 },
    { ods: ODS6, card: CARD6 },
    { ods: ODS7, card: CARD7 },
    { ods: ODS8, card: CARD8 },
    { ods: ODS9, card: CARD9 },
    { ods: ODS10, card: CARD10 },
    { ods: ODS11, card: CARD11 },
    { ods: ODS12, card: CARD12 },
    { ods: ODS13, card: CARD13 },
    { ods: ODS14, card: CARD14 },
    { ods: ODS15, card: CARD15 },
    { ods: ODS16, card: CARD16 },
    { ods: ODS17, card: CARD17 },
];

const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [hovering, setHovering] = React.useState(false);
    const [flip, setFlip] = React.useState(false);

    const [isFading, setIsFading] = React.useState(false);

    const AUTO_TIME = 3000;

    const nextImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsFading(false);
        }, 200);
    };

    const prevImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
            );
            setIsFading(false);
        }, 200);
    };

    React.useEffect(() => {
        const interval = setInterval(nextImage, AUTO_TIME);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);
    React.useEffect(() => {
        if (hovering) return; // pausa la rotación

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % odspairs.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [hovering]);


    return (
        <div style={{ minHeight: "100vh" }}>

            {/* HERO */}
            <section style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 20px" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "48px",
                            alignItems: "center",
                        }}
                    >
                        {/* Izquierda */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                            {/* Título */}
                            <h1 style={{
                                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                                fontWeight: "bold",
                                lineHeight: "1.2",
                                margin: 0,
                            }}>
                                ODSfera
                                <span style={{ display: "block", marginTop: "8px" }}>
                                    Impulsa el futuro
                                </span>
                            </h1>

                            {/* Descripción */}
                            <p style={{ fontSize: "1.25rem", lineHeight: "1.75" }}>
                                ODSfera es una herramienta social diseñada para crear, difundir y compartir iniciativas
                                orientadas a los Objetivos de Desarrollo Sostenible.
                            </p>

                            {/* Botones */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <Button variant="contained" href="/signup">
                                    Regístrate ahora →
                                </Button>

                                <Button variant="outlined" href="/login">
                                    Iniciar sesión
                                </Button>
                            </div>

                            {/* Métricas */}
                            <div style={{ display: "flex", gap: "32px", paddingTop: "16px" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>17</div>
                                    <div style={{ fontSize: "0.875rem" }}>Objetivos</div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>2030</div>
                                    <div style={{ fontSize: "0.875rem" }}>Agenda</div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "2rem", fontWeight: "bold" }}>∞</div>
                                    <div style={{ fontSize: "0.875rem" }}>Impacto</div>
                                </div>
                            </div>

                            {/* Link a la Agenda 2030 */}
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 16px",
                                borderRadius: "9999px",
                                fontSize: "14px",
                                fontWeight: 500,
                                width: "fit-content",
                                cursor: "pointer",
                                textDecoration: "underline"
                            }}
                                onClick={() => window.open("https://www.un.org/sustainabledevelopment/es/", "_blank")}
                            >
                                ✨ Agenda 2030
                            </div>
                        </div>

                        {/* Derecha */}
                        <div
                            style={{
                                perspective: "1000px",
                            }}
                            onMouseEnter={() => {
                                setHovering(true);
                                setFlip(true);
                            }}
                            onMouseLeave={() => {
                                setHovering(false);
                                setFlip(false);
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    maxWidth: "500px",
                                    transition: "transform 0.6s",
                                    transformStyle: "preserve-3d",
                                    transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
                                    borderRadius: "16px",
                                }}
                            >
                                {/* FRONT (ODS) */}
                                <img
                                    src={odspairs[currentIndex].ods}
                                    alt="ODS"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        backfaceVisibility: "hidden",
                                        borderRadius: "16px",
                                    }}
                                />

                                {/* BACK (CARD) */}
                                <img
                                    src={odspairs[currentIndex].card}
                                    alt="CARD"
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        transform: "rotateY(180deg)",
                                        backfaceVisibility: "hidden",
                                        borderRadius: "16px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section style={{ padding: "80px 20px" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                            ¿Qué puedes hacer en ODSfera?
                        </h2>
                        <p style={{ fontSize: "1.25rem", maxWidth: "768px", margin: "0 auto" }}>
                            Una plataforma que conecta personas y organizaciones comprometidas con un futuro sostenible.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "32px",
                        }}
                    >
                        <div style={{ padding: "32px", borderRadius: "16px", border: "1px solid #ccc" }}>
                            <div style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                                🌍
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                                Descubre
                            </h3>
                            <p>Explora iniciativas, eventos y proyectos cerca de ti.</p>
                        </div>

                        <div style={{ padding: "32px", borderRadius: "16px", border: "1px solid #ccc" }}>
                            <div style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                                🎯
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                                Crea
                            </h3>
                            <p>Crea iniciativas y proyectos que generen impacto.</p>
                        </div>

                        <div style={{ padding: "32px", borderRadius: "16px", border: "1px solid #ccc" }}>
                            <div style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                                👥
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                                Conecta
                            </h3>
                            <p>Únete a una red global de personas comprometidas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 20px" }}>
                <div style={{ maxWidth: "896px", margin: "0 auto", textAlign: "center" }}>
                    <div style={{ fontSize: "64px", marginBottom: "24px" }}>❤️</div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", marginBottom: "24px" }}>
                        Sé parte del cambio
                    </h2>
                    <p style={{ fontSize: "1.25rem", marginBottom: "40px", lineHeight: "1.75" }}>
                        Cada acción cuenta. Únete a ODSfera y contribuye al cambio.
                    </p>
                    <Button variant="contained" href="/signup">
                        Regístrate gratis
                    </Button>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ padding: "48px 20px", textAlign: "center" }}>
                <p style={{ fontSize: "1.125rem", marginBottom: "8px" }}>
                    ODSfera - Impulsa el futuro
                </p>
                <p style={{ fontSize: "0.875rem" }}>
                    Comprometidos con los Objetivos de Desarrollo Sostenible
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
