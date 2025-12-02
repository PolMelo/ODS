import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            localStorage.setItem("odsferaUser", JSON.stringify(data));
            navigate("/");
        } catch {
            setError("Error conectando con el servidor");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.default",
                px: 2,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    width: 340,
                    bgcolor: "background.paper",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", mb: "1.5rem" }}
                >
                    Iniciar sesión
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Typography>Email</Typography>
                    <TextField
                        fullWidth
                        type="email"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, mt: 0.5 }}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Typography>Contraseña</Typography>
                    <TextField
                        fullWidth
                        type="password"
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, mt: 0.5 }}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <Typography sx={{ color: "error.main", mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{
                            padding: "0.7rem",
                            fontWeight: "bold",
                            borderRadius: "0.5rem",
                            bgcolor: "success.main",
                            "&:hover": {
                                bgcolor: "success.dark",
                            },
                        }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginPage;