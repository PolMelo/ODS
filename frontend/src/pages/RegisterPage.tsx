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

// **********************************************
// ********* Imports de Avatares (CORREGIDOS) *******
// **********************************************

import Avatar1 from "../assets/avatar png/Avatar 1.png";
import Avatar2 from "../assets/avatar png/Avatar 2.png";
import Avatar3 from "../assets/avatar png/Avatar 3.png";
import Avatar4 from "../assets/avatar png/Avatar 4.png";
import Avatar5 from "../assets/avatar png/Avatar 5.png";
import Avatar6 from "../assets/avatar png/Avatar 6.png";

// Lista de avatares para mapear más fácilmente
const AVATARS = [
    { name: "avatar1", src: Avatar1 },
    { name: "avatar2", src: Avatar2 },
    { name: "avatar3", src: Avatar3 },
    { name: "avatar4", src: Avatar4 },
    { name: "avatar5", src: Avatar5 },
    { name: "avatar6", src: Avatar6 },
];
// **********************************************
// **********************************************


const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const mode = theme.palette.mode;

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // El estado 'avatar' almacenará el nombre del avatar seleccionado
    const [avatar, setAvatar] = useState<string | null>(null); 
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // ⚠️ IMPLEMENTACIÓN DEL ESTADO REQUIRED PARA EL AVATAR
        if (!avatar) {
            setError("Debes escoger un avatar para poder registrarte.");
            return; // Detiene la ejecución si el avatar no está seleccionado
        }
        // ----------------------------------------------------

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, email, password, avatar }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Ha ocurrido un error.");
                return;
            }

            localStorage.setItem("odsferaUser", JSON.stringify(data));
            navigate("/");
        } catch {
            setError("No se ha podido conectar con el servidor.");
        }
    };

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
                {/* Formulario a la izquierda */}
                <Box component="form" onSubmit={handleRegister} sx={{ flex: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{ textAlign: "center", mb: "1.5rem" }}
                    >
                        Crear cuenta
                    </Typography>

                    <Typography>Nombre</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{ mb: 2, mt: 0.5 }}
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />

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
                        }}
                    >
                        Registrarse
                    </Button>

                    <Button
                        onClick={() => navigate("/login")}
                        sx={{ mt: "10px" }}
                    >
                        ¿Ya tienes cuenta? Inicia sesión
                    </Button>
                </Box>

                {/* Selector de Avatares a la derecha */}
                <Box>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Escoge tu avatar
                    </Typography>
                    {/* ********************************************** */}
                    {/* ******* MODIFICACIÓN EN EL SELECTOR DE AVATAR ******** */}
                    {/* ********************************************** */}
                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 80px)", gap: 2 }}>
                        {AVATARS.map((item) => (
                            <Box
                                key={item.name}
                                component="img"
                                src={item.src} // Usamos la variable importada (item.src)
                                alt={`Avatar ${item.name}`}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    border: avatar === item.name ? "3px solid #4f46e5" : "2px solid #ccc",
                                    cursor: "pointer",
                                    objectFit: 'cover'
                                }}
                                onClick={() => setAvatar(item.name)} // Almacenamos el nombre del avatar
                            />
                        ))}
                    </Box>
                    {/* ********************************************** */}
                    {/* ********************************************** */}
                </Box>
            </Paper>
        </Box>
    );
};

// **********************************************
// ********** Export del Componente (CORRECTO) **********
// **********************************************
export default RegisterPage;