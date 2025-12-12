import React, { useEffect } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';

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
import portada from "../assets/portada.png";

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

const FADE_DURATION = 400;

const HomePage: React.FC = () => {

    // 🔵 RECARGA AUTOMÁTICA SOLO UNA VEZ AL ENTRAR
    useEffect(() => {
        if (!sessionStorage.getItem("homeReloaded")) {
            sessionStorage.setItem("homeReloaded", "true");
            window.location.reload();
        }
    }, []);

    // 🔵 SNACKBAR PARA MENSAJE DE REDIRECCIÓN
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    useEffect(() => {
        if ((location.state as any)?.message) {
            setMessage((location.state as any).message);
            setOpen(true);
        }
    }, [location]);

    const handleClose = () => setOpen(false);

    // 🔵 LÓGICA ORIGINAL DE IMÁGENES, HERO Y CARDS
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState<number | null>(null);
    const [isFading, setIsFading] = React.useState(false);
    const [fadeActive, setFadeActive] = React.useState(false);

    const [hovering, setHovering] = React.useState(false);
    const [flip, setFlip] = React.useState(false);

    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const timersRef = React.useRef<number[]>([]);

    useEffect(() => {
        return () => {
            timersRef.current.forEach((id) => window.clearTimeout(id));
            timersRef.current = [];
        };
    }, []);

    const goToIndex = (newIndex: number) => {
        if (newIndex === currentIndex) return;
        setPrevIndex(currentIndex);
        setCurrentIndex(newIndex);
        setIsFading(true);
        setFadeActive(false);

        const t1 = window.setTimeout(() => setFadeActive(true), 20);
        timersRef.current.push(t1);

        const t2 = window.setTimeout(() => {
            setIsFading(false);
            setFadeActive(false);
            setPrevIndex(null);
        }, FADE_DURATION + 50);
        timersRef.current.push(t2);
    };

    const nextImage = () => goToIndex((currentIndex + 1) % odspairs.length);
    const prevImage = () => goToIndex(currentIndex === 0 ? odspairs.length - 1 : currentIndex - 1);

    useEffect(() => {
        if (hovering) return;
        const intervalId = window.setInterval(nextImage, 3000);
        return () => window.clearInterval(intervalId);
    }, [hovering, currentIndex]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [currentIndex]);

    const cardStyle = {
        padding: "32px",
        borderRadius: "16px",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${isDark ? theme.palette.divider : theme.palette.grey[300]}`,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease",
        textDecoration: 'none',
        color: theme.palette.text.primary,
        cursor: 'pointer',
        '&:hover': {
            transform: "translateY(-4px)",
            boxShadow: isDark ? '0 8px 15px rgba(0,0,0,0.5)' : '0 8px 15px rgba(0,0,0,0.1)',
            borderColor: theme.palette.primary.main,
        },
    };

    const layeredImgBase: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "16px",
        transition: `opacity ${FADE_DURATION}ms ease`,
        willChange: "opacity, transform",
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            {/* SNACKBAR */}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity="info" variant="filled" onClose={handleClose}>
                    {message}
                </Alert>
            </Snackbar>

            {/* HERO */}
            <section style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
                        {/* IZQUIERDA */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                          <img src={portada} alt="Portada ODSfera" style={{ width: "100%", borderRadius: "16px", boxShadow: isDark ? '0 8px 15px rgba(0,0,0,0.5)' : '0 8px 15px rgba(0,0,0,0.1)' }} />
                        </div>
                        {/* DERECHA — TARJETA QUE GIRA */}
                        <div style={{ perspective: "1000px", width: "100%", maxWidth: "450px", margin: "0 auto" }}
                             onMouseEnter={() => { setHovering(true); setFlip(true); }}
                             onMouseLeave={() => { setHovering(false); setFlip(false); }}>
                            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", transformStyle: "preserve-3d", transition: "transform 0.6s", transform: flip ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                                {/* ODS FRONT */}
                                {isFading && prevIndex !== null ? (
                                    <>
                                        <img key={`prev-ods-${prevIndex}`} src={odspairs[prevIndex].ods} alt={`ODS prev ${prevIndex}`} style={{ ...layeredImgBase, opacity: fadeActive ? 0 : 1, zIndex: fadeActive ? 1 : 2, backfaceVisibility: "hidden" }} />
                                        <img key={`cur-ods-${currentIndex}`} src={odspairs[currentIndex].ods} alt={`ODS cur ${currentIndex}`} style={{ ...layeredImgBase, opacity: fadeActive ? 1 : 0, zIndex: fadeActive ? 2 : 1, backfaceVisibility: "hidden" }} />
                                    </>
                                ) : (
                                    <img key={`cur-ods-${currentIndex}`} src={odspairs[currentIndex].ods} alt={`ODS cur ${currentIndex}`} style={{ ...layeredImgBase, opacity: 1, zIndex: 2, backfaceVisibility: "hidden" }} />
                                )}
                                {/* CARD BACK */}
                                {isFading && prevIndex !== null ? (
                                    <>
                                        <img key={`prev-card-${prevIndex}`} src={odspairs[prevIndex].card} alt={`CARD prev ${prevIndex}`} style={{ ...layeredImgBase, transform: "rotateY(180deg)", opacity: fadeActive ? 0 : 1, zIndex: fadeActive ? 1 : 2, backfaceVisibility: "hidden" }} />
                                        <img key={`cur-card-${currentIndex}`} src={odspairs[currentIndex].card} alt={`CARD cur ${currentIndex}`} style={{ ...layeredImgBase, transform: "rotateY(180deg)", opacity: fadeActive ? 1 : 0, zIndex: fadeActive ? 2 : 1, backfaceVisibility: "hidden" }} />
                                    </>
                                ) : (
                                    <img key={`cur-card-${currentIndex}`} src={odspairs[currentIndex].card} alt={`CARD cur ${currentIndex}`} style={{ ...layeredImgBase, transform: "rotateY(180deg)", opacity: 1, zIndex: 1, backfaceVisibility: "hidden" }} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section style={{ padding: "80px 20px" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>¿Qué puedes hacer en ODSfera?</h2>
                        <p style={{ fontSize: "1.25rem", maxWidth: "768px", margin: "0 auto" }}>
                            Una plataforma que conecta personas y organizaciones comprometidas con un futuro sostenible.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
                        <Box component={Link} to="/acciones" sx={cardStyle}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Descubre 🌍</h3>
                            <p>Explora iniciativas, eventos y proyectos cerca de ti.</p>
                        </Box>
                        <Box component={Link} to="/ODS" sx={cardStyle}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Crea 🎯</h3>
                            <p>Crea iniciativas y proyectos que generen impacto.</p>
                        </Box>
                        <Box component={Link} to="/recursos" sx={cardStyle}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Formate 📖</h3>
                            <p>Toma consciencia sobre las amenazas a nuestro futuro y cómo combatirlas.</p>
                        </Box>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 20px" }}>
                <div style={{ maxWidth: "896px", margin: "0 auto", textAlign: "center" }}>
                    <div style={{ fontSize: "64px", marginBottom: "24px" }}>❤️</div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "bold", marginBottom: "24px" }}>Sé parte del cambio</h2>
                    <p style={{ fontSize: "1.25rem", marginBottom: "40px", lineHeight: "1.75" }}>Cada acción cuenta. Únete a ODSfera y contribuye al cambio.</p>
                    <Button variant="contained" component={Link} to="/signup">Regístrate gratis</Button>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ padding: "48px 20px", textAlign: "center" }}>
                <p style={{ fontSize: "1.125rem", marginBottom: "8px" }}>ODSfera - Impulsa el futuro</p>
                <p style={{ fontSize: "0.875rem" }}>Comprometidos con los Objetivos de Desarrollo Sostenible</p>
            </footer>
        </div>
    );
};

export default HomePage;
