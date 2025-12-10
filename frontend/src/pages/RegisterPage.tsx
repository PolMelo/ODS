import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    useTheme,
} from "@mui/material";
import Loader from "../components/Loader";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const mode = theme.palette.mode;

    const [loading, setLoading] = useState(false);

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true); // Activamos la ruleta

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Ha ocurrido un error.");
                setLoading(false); // Detenemos si falla
                return;
            }

            localStorage.setItem("odsferaUser", JSON.stringify(data));
            navigate("/");
        } catch {
            setError("No se ha podido conectar con el servidor.");
            setLoading(false);
        }
    };

    // Pantalla de carga igual que en login
    if (loading) return <Loader size={320} />;


    return (
        <Box
            sx={{
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                background:
                    mode === "dark"
                        ? "radial-gradient(circle at top left, #1E293B, #0D1117 70%)"
                        : "radial-gradient(circle at top left, #dbeafe 0, #ffffff 60%)",
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    width: 700,
                    display: "flex",
                    gap: 4,
                    bgcolor: "background.paper",
                }}
            >
                <Box component="form" onSubmit={handleRegister} sx={{ flex: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{ textAlign: "center", mb: "1.5rem" }}
                    >
                        Crear cuenta
                    </Typography>

                    <Typography>Nombre *</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, mt: 0.5 }}
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />

                    <Typography>Email *</Typography>
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

                    <Typography>Contraseña *</Typography>
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
                        }}
                    >
                        Registrarse
                    </Button>

                    <Button onClick={() => navigate("/login")} sx={{ mt: "10px" }}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default RegisterPage;
