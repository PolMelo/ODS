import React from "react";

import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

// Importo todas las imágenes del carrusel
import ODS0 from "../assets/LOGOS ODS/ODS 0.jpg";
import ODS1 from "../assets/LOGOS ODS/ODS 1.jfif";
import ODS2 from "../assets/LOGOS ODS/ODS 2.jpg";
import ODS3 from "../assets/LOGOS ODS/ODS 3.jpg";
import ODS4 from "../assets/LOGOS ODS/ODS 4.jpg";
import ODS5 from "../assets/LOGOS ODS/ODS 5.jpg";
import ODS6 from "../assets/LOGOS ODS/ODS 6.jpg";
import ODS7 from "../assets/LOGOS ODS/ODS 7.jpg";
import ODS8 from "../assets/LOGOS ODS/ODS 8.jpg";
import ODS9 from "../assets/LOGOS ODS/ODS 9.jpg";
import ODS10 from "../assets/LOGOS ODS/ODS 10.jpg";
import ODS11 from "../assets/LOGOS ODS/ODS 11.jpg";
import ODS12 from "../assets/LOGOS ODS/ODS 12.jpg";
import ODS13 from "../assets/LOGOS ODS/ODS 13.jpg";
import ODS14 from "../assets/LOGOS ODS/ODS 14.jpg";
import ODS15 from "../assets/LOGOS ODS/ODS 15.jpg";
import ODS16 from "../assets/LOGOS ODS/ODS 16.jpg";
import ODS17 from "../assets/LOGOS ODS/ODS 17.jpg";

const HomePage: React.FC = () => {
    const images = [
        ODS0,
        ODS1,
        ODS2,
        ODS3,
        ODS4,
        ODS5,
        ODS6,
        ODS7,
        ODS8,
        ODS9,
        ODS10,
        ODS11,
        ODS12,
        ODS13,
        ODS14,
        ODS15,
        ODS16,
        ODS17,
    ];

    const [currentImage, setCurrentImage] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setIsFading(false);
            }, 300);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                background: "white",
                overflow: "hidden",  // evita scroll global
            }}
        >
            <NavBarComponent />

            <main
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden",
                    padding: "10px"
                }}
            >
                {/* Columna izquierda */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        backgroundColor: "white",
                        
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            
                        }}
                    >
                        <img
                            src={images[currentImage]}
                            alt="Imagen rotatoria"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain", // o "cover" si lo prefieres
                                transition: "opacity 0.3s ease-in-out",
                                opacity: isFading ? 0 : 1,
                            }}
                        />
                    </div>
                </div>

                {/* Columna derecha */}
                <div
                    style={{
                        flex: 1,
                        padding: "40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflow: "hidden",
                        color: "black",
                    }}
                >
                    <h1>Bienvenido a ODSfera</h1>
                    <p>
                        Herramienta social centrada en crear, difundir y compartir iniciativas con metas de desarrollo sostenible.
                        Enfocada en las distintas ods, ODSfera crea un espacio en el que podrás explorar actividades, eventos o
                        iniciativas para ayudar a un futuro sostenible y sin pobreza.
                    </p>
                    <p>
                        Si formas parte de una plataforma o iniciativas que apoyan esta visión también puedes crear acciones para impulsarlas y
                        que esta comunidad forme parte de ellas.
                    </p>
                </div>
            </main>

            <FooterComponent />
        </div>
    );

};

export default HomePage;
