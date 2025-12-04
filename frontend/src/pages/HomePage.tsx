import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Link,
  Container,
  Paper,
} from "@mui/material";

// Importo todas las imágenes del carrusel
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


const HomePage: React.FC = () => {
    const images = [
        ODS0, ODS1, ODS2, ODS3, ODS4, ODS5, ODS6, ODS7, ODS8,
        ODS9, ODS10, ODS11, ODS12, ODS13, ODS14, ODS15, ODS16, ODS17,
    ];

    const [currentImage, setCurrentImage] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);

    // Carrusel automático ajustado:
    // (3 segundos).
    const AUTO_TIME = 3000; 

    const nextImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsFading(false);
        }, 200); // transición suave
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

    //  carrusel automático
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, AUTO_TIME);

        return () => clearInterval(interval);
    }, []);


    // Control con flechas del teclado
React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
}, []);


    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                width: "100%",
            }}
        >
            <main
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden",
                    padding: "20px",
                    boxSizing: "border-box",
                    gap: "40px",
                }}
            >
                {/* Columna izquierda - Imagen */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative", // 🔥 Necesario para overlay de flechas
                    }}
                >
                   
                    <img
                        src={images[currentImage]}
                        alt="Objetivos de Desarrollo Sostenible"
                        style={{
                            maxWidth: "500px",
                            maxHeight: "500px",
                            minWidth: "500px",
                            minHeight: "500px",
                            objectFit: "contain",
                            transition: "opacity 0.3s ease-in-out",
                            opacity: isFading ? 0 : 1,
                            borderRadius: "50px",
                        }}
                    />

                </div>

                {/* Columna derecha - Texto */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflow: "auto",
                        padding: "20px",
                    }}
                >
                    <h1 style={{ marginTop: 0 }}>Bienvenido a ODSfera</h1>

                    <p>
                        ODSfera es una herramienta social diseñada para crear, difundir y compartir iniciativas orientadas a los Objetivos de Desarrollo Sostenible (ODS).
                        En este espacio podrás descubrir actividades, eventos y proyectos que impulsan un futuro más justo, sostenible y libre de pobreza.
                    </p>

                    <p>
                        Si formas parte de una plataforma o iniciativas que apoyan esta visión también puedes crear acciones para impulsarlas y
                        que esta comunidad forme parte de ellas.
                    </p>

                    <p>Únete a ODSfera: regístrate y empieza a formar parte del cambio.</p>

                    {/* Botón de registro */}
                    <Button
                        variant="contained"
                        color="primary"
                        href="/signup"
                        style={{ marginBottom: "20px", width: "200px" }}
                    >
                        Regístrate aquí
                    </Button>

                    <p>Si ya estás registrado, accede aquí:</p>

                    {/* Botón de acceso */}
                    <Button
                        variant="outlined"
                        color="primary"
                        href="/login"
                        style={{ width: "200px" }}
                    >
                        Acceder
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
