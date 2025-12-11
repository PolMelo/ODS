import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, useTheme } from "@mui/material";
import Loader from "../components/Loader";
import { useUser } from "../context/UserContext"; // ✅ Importamos hook

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mode = theme.palette.mode;

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { setUser } = useUser(); // ✅ Hook para actualizar usuario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Ha ocurrido un error.");
        setLoading(false);
        return;
      }

      // Guardar token y usuario en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("odsferaUser", JSON.stringify(data.user));

      // Actualizar UserContext
      setUser({
        name: data.user.nom || "Invitado",
        email: data.user.email || "inicia.sesion@odsfera.com",
        avatarUrl: "",
      });

      navigate("/"); // Redirigir a Home
    } catch {
      setError("Error conectando con el servidor");
      setLoading(false);
    }
  };

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
          width: 340,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: "1.5rem" }}>
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
            <Typography sx={{ color: "error.main", mb: 2 }}>{error}</Typography>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ padding: "0.7rem", fontWeight: "bold", borderRadius: "0.5rem" }}
          >
            Entrar
          </Button>
        </Box>

        <Button onClick={() => navigate("/signup")} sx={{ mt: "10px" }}>
          ¿Todavía no tienes cuenta? Únete ya
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
