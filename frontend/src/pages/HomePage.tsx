import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box, useTheme } from '@mui/material'; // <-- Asegurarse de importar useTheme y Box

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
    { ods: ODS0, card: ODS0 },
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

    // 💡 Obtener el tema actual para aplicar estilos dinámicos
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    /* -----------------------------------------
      ✅ Funciones para cambiar ODS
    ----------------------------------------- */
    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % odspairs.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? odspairs.length - 1 : prev - 1
        );
    };

    /* -----------------------------------------
      🔄 Auto-rotación (pausa cuando haces hover)
    ----------------------------------------- */
    React.useEffect(() => {
        if (hovering) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % odspairs.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [hovering]);

    /* -----------------------------------------
      ⌨️ Flechas del teclado
    ----------------------------------------- */
    React.useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);
    
    // 💡 Estilos dinámicos para las tarjetas de Features
    const cardStyle = {
        padding: "32px",
        borderRadius: "16px",
        
        // Fondo de la tarjeta (usa el color 'paper' o 'default' para contrastar)
        backgroundColor: theme.palette.background.paper, 
        
        // Borde dinámico
        border: `1px solid ${isDark ? theme.palette.divider : theme.palette.grey[300]}`,
        
        // Estilos de interacción
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease",
        textDecoration: 'none', 
        color: theme.palette.text.primary, 
        cursor: 'pointer',
        
        '&:hover': {
            transform: "translateY(-4px)",
            // Sombra más intensa en oscuro, más sutil en claro
            boxShadow: isDark ? '0 8px 15px rgba(0,0,0,0.5)' : '0 8px 15px rgba(0,0,0,0.1)', 
            // Resaltar el borde con el color primario del tema
            borderColor: theme.palette.primary.main, 
        },
    };


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
                        {/* IZQUIERDA */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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

                            <p style={{ fontSize: "1.25rem", lineHeight: "1.75" }}>
                                ODSfera es una herramienta social diseñada para crear, difundir y compartir iniciativas
                                orientadas a los Objetivos de Desarrollo Sostenible. 
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <Button variant="contained" component={Link} to="/signup">Regístrate ahora →</Button>
                                <Button variant="outlined" component={Link} to="/login">Iniciar sesión</Button>
                            </div>
                        </div>

                        {/* DERECHA — TARJETA QUE GIRA */}
                        <div
                            style={{ perspective: "1000px" }}
                            onMouseEnter={() => { setHovering(true); setFlip(true); }}
                            onMouseLeave={() => { setHovering(false); setFlip(false); }}
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
                                {/* FRONT */}
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

                                {/* BACK */}
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

            {/* FEATURES - SECCIÓN ACTUALIZADA */}
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
                        {/* 1. DESCUBRE -> /acciones */}
                        <Box component={Link} to="/acciones" sx={cardStyle}>
                            <div style={{
                                width: "56px",
                                height: "15px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", }}>
                                Descubre 🌍
                            </h3>
                            <p>Explora iniciativas, eventos y proyectos cerca de ti.</p>
                        </Box>

                        {/* 2. CREA -> /ODS */}
                        <Box component={Link} to="/ODS" sx={cardStyle}>
                            <div style={{
                                width: "56px",
                                height: "15px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                                Crea 🎯
                            </h3>
                            <p>Crea iniciativas y proyectos que generen impacto.</p>
                        </Box>

                        {/* 3. CONECTA -> /account */}
                        <Box component={Link} to="/recursos" sx={cardStyle}>
                            <div style={{
                                width: "56px",
                                height: "15px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "24px",
                                fontSize: "28px",
                            }}>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
                                Formate 📖
                            </h3>
                            <p>Toma consciencia sobre las amenazas a nuestro futuro y como combatirlas.</p>
                        </Box>
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
                    <Button variant="contained" component={Link} to="/signup">
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