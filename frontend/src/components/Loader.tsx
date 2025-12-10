import React from "react";
import ruleta from "../assets/ODS PNG/RULETA.png";

interface LoaderProps {
    size?: number;          // tamaño opcional
    overlay?: boolean;      // si se quiere usar como overlay semitransparente
    message?: string;       // texto opcional
}

const Loader: React.FC<LoaderProps> = ({
    size = 260,
    overlay = false,
    message,
}) => {
    return (
        <div
            style={{
                position: overlay ? "fixed" : "relative",
                inset: 0,
                height: overlay ? "100vh" : "100%",
                width: "100%",
                background: overlay ? "rgba(0,0,0,0.25)" : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backdropFilter: overlay ? "blur(3px)" : undefined,
                zIndex: 9999,
            }}
        >
            <img
                src={ruleta}
                alt="Cargando..."
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    animation: "spin 2s linear infinite",
                }}
            />

            {message && (
                <p
                    style={{
                        marginTop: "1rem",
                        fontSize: "1.1rem",
                        opacity: 0.8,
                        textAlign: "center",
                    }}
                >
                    {message}
                </p>
            )}

            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default Loader;
