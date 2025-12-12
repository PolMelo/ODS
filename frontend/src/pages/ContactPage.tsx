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
  const [errorEnvio, setErrorEnvio] = useState(false);

  const emailValido = /.+@.+\..+/.test(email);
  const mensajeValido = mensaje.trim().length >= 10;
  const formValido = emailValido && mensajeValido;


  // Fem servir un sctript de Google Apps per gestionar els enviaments del formulari
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyEiYmR6qdLUmGaUXkOgaVhrkzF6DtFmPuouvxCX8oKqif-HtTfWzK1Th1ltr4iNYk3YA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValido) return;

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("mensaje", mensaje);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setEnviado(true);
      setErrorEnvio(false);
      setEmail("");
      setMensaje("");
    } catch (err) {
      console.error(err);
      setErrorEnvio(true);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

          {errorEnvio && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Hubo un error al enviar el mensaje
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
