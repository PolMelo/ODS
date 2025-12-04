import React from "react";
import { Box, Typography, Button } from "@mui/material";

const NotFoundPage: React.FC = () => {
    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.5rem",
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    bgcolor: "background.paper",
                    padding: { xs: "2rem 1.5rem", sm: "3rem 2.5rem" },
                    borderRadius: "18px",
                    maxWidth: "540px",
                    width: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    border: "1px solid rgba(150, 200, 150, 0.25)",
                    animation: "fadeIn 0.4s ease",
                    "@keyframes fadeIn": {
                        from: { opacity: 0, transform: "translateY(10px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                    },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "3.2rem", sm: "4.2rem" },
                        fontWeight: 800,
                        margin: 0,
                        color: "success.main",
                        textShadow: "2px 3px 0 rgba(0,0,0,0.08)",
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.3rem", sm: "1.6rem" },
                        margin: "1rem 0",
                        fontWeight: 700,
                        color: "text.primary",
                    }}
                >
                    Oops... Nada por aquí 🌫️
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "0.95rem", sm: "1.05rem" },
                        color: "text.secondary",
                        marginBottom: "2rem",
                    }}
                >
                    La página que buscas no existe o se ha movido a otro lugar.
                </Typography>

                <Button
                    variant="contained"
                    href="/"
                    sx={{
                        padding: "0.9rem 1.4rem",
                        fontWeight: 600,
                        fontSize: "1rem",
                        borderRadius: "10px",
                        backgroundColor: "success.main",
                        transition: "0.25s ease",
                        "&:hover": {
                            backgroundColor: "success.dark",
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Volver al inicio
                </Button>
            </Box>
        </Box>
    );
};

export default NotFoundPage;