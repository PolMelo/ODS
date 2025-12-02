import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CssBaseline,
  useTheme,
} from "@mui/material";

export default function RegisterMUI() {
  const theme = useTheme();  
  const mode = theme.palette.mode;

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, password }),
      });

      const data = await response.json();

      if (!response.ok) setIsError(true);

      setMessage(data.message || data.error || "Ha ocurrido un error.");
    } catch {
      setIsError(true);
      setMessage("No se ha podido conectar con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CssBaseline /> 

      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          background:
            mode === "dark"
              ? "radial-gradient(circle at top left, #4f46e5 0, #0f172a 45%, #020617 100%)"
              : "radial-gradient(circle at top left, #dbeafe 0, #ffffff 60%)",
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 4,
              backdropFilter: "blur(12px)",
              backgroundColor:
                mode === "dark"
                  ? "rgba(15,23,42,0.85)"
                  : "rgba(255,255,255,0.7)",
              border: "1px solid",
              borderColor:
                mode === "dark"
                  ? "rgba(148,163,184,0.25)"
                  : "rgba(100,116,139,0.2)",
            }}
          >
            <Typography variant="h5" align="center" fontWeight={700} mb={1}>
              Crear cuenta
            </Typography>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              mb={3}
            >
              Únete a ODSfera y empieza a sumar acciones 🌍
            </Typography>

            {message && (
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  mb: 2,
                  fontSize: ".9rem",
                  border: "1px solid",
                  bgcolor: isError
                    ? "rgba(220,38,38,0.15)"
                    : "rgba(22,163,74,0.15)",
                  borderColor: isError
                    ? "rgba(248,113,113,0.4)"
                    : "rgba(34,197,94,0.4)",
                  color: isError ? "#fecaca" : "#bbf7d0",
                }}
              >
                {message}
              </Box>
            )}

            <Box
              component="form"
              onSubmit={handleRegister}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                fullWidth
                label="Nombre"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />

              <TextField
                fullWidth
                type="email"
                label="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                fullWidth
                type="password"
                label="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                disabled={isLoading}
                sx={{
                  py: 1.4,
                  fontWeight: 700,
                  background: "linear-gradient(135deg,#4f46e5,#6366f1,#22c55e)",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                {isLoading ? "Creando cuenta..." : "Registrarse"}
              </Button>

              <Typography variant="body2" align="center" color="text.secondary">
                ¿Ya tienes cuenta?{" "}
                <span
                  style={{
                    color: mode === "dark" ? "#818cf8" : "#4f46e5",
                    cursor: "pointer",
                  }}
                >
                  Inicia sesión
                </span>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
