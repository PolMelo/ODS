import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Alert,
  useTheme,
} from "@mui/material";

const ContactPage: React.FC = () => {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  // VALIDACIONES
  const emailValido = /.+@.+\..+/.test(email);
  const mensajeValido = mensaje.trim().length >= 10;
  const formValido = emailValido && mensajeValido;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValido) return;

    setEnviado(true);

    // Aquí harías tu POST real a tu backend
    console.log("Enviado:", { email, mensaje });
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // Fondo adaptado al modo, si es dark la primera linea si no la segona
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #1a1a1a, #0f0f0f)"
            : "linear-gradient(135deg, #e8f5e9, #c8e6c9)",

        padding: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 520,
          borderRadius: 4,
          boxShadow: 6,

          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : "#ffffff",
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Contacta con nosotros
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            Si tienes dudas o problemas, nuestro equipo técnico está listo para ayudarte.
          </Typography>

          {enviado && (
            <Alert severity="success" sx={{ mb: 2 }}>
              ¡Mensaje enviado correctamente!
            </Alert>
          )}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Correo electrónico"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEnviado(false);
              }}
              error={email.length > 0 && !emailValido}
              helperText={
                email.length > 0 && !emailValido
                  ? "Introduce un correo electrónico válido"
                  : ""
              }
            />

            <TextField
              label="Explícanos tu problema"
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
              value={mensaje}
              onChange={(e) => {
                setMensaje(e.target.value);
                setEnviado(false);
              }}
              error={mensaje.length > 0 && !mensajeValido}
              helperText={
                mensaje.length > 0 && !mensajeValido
                  ? "El mensaje debe tener al menos 10 caracteres"
                  : ""
              }
            />

            <Button
              variant="contained"
              color="success"
              type="submit"
              fullWidth
              disabled={!formValido}
              sx={{
                mt: 2,
                py: 1.3,
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactPage;
