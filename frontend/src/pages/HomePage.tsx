import React from "react";
import "./HomePage.css";

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
        ODS0, ODS1, ODS2, ODS3, ODS4, ODS5, ODS6, ODS7,
        ODS8, ODS9, ODS10, ODS11, ODS12, ODS13, ODS14,
        ODS15, ODS16, ODS17,
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
    }, [images.length]);

    return (
        <div className="home-container">
            <main className="home-main">
                {/* COLUMNA IZQUIERDA */}
                <div className="home-carousel-container">
                    <div className="home-carousel-inner">
                        <img
                            src={images[currentImage]}
                            alt="ODS rotatoria"
                            className={`home-carousel-img ${isFading ? "fade-out" : "fade-in"}`}
                        />
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className="home-text">
                    <h1>Bienvenido a ODSfera</h1>
                    <p>
                        Herramienta social centrada en crear, difundir y compartir iniciativas con metas de desarrollo sostenible.
                        Enfocada en las distintas ODS, ODSfera crea un espacio en el que podrás explorar actividades, eventos o
                        iniciativas para ayudar a un futuro sostenible y sin pobreza.
                    </p>
                    <p>
                        Si formas parte de una plataforma o iniciativas que apoyan esta visión también puedes crear acciones para impulsarlas
                        y que esta comunidad forme parte de ellas.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
