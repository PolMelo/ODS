import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useUser } from "../context/UserContext"; //Importamos el contexto

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser(); //Hook para actualizar usuario
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "warning">("success");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const doLogout = () => {
      //Si no hay token enviamos warning y te enviamos a home
      if (!token) {
        setMessage("No has iniciado sesión.");
        setSeverity("warning");
        setOpen(true);
        setTimeout(() => navigate("/", { replace: true }), 1500);
        return;
      }

      // Borrar datos de localStorage en caso de haber iniciado sesión
      localStorage.removeItem("token");
      localStorage.removeItem("odsferaUser");

      //Resetear usuario a invitado
      setUser({
        name: "Invitado",
        email: "inicia.sesion@odsfera.com",
        avatarUrl: "",
      });

      setMessage("Has cerrado sesión correctamente.");
      setSeverity("success");
      setOpen(true);

      setTimeout(() => navigate("/login", { replace: true }), 1500);
    };

    // Ejecutar de forma asíncrona para evitar render cascada
    const timer = setTimeout(doLogout, 0);
    return () => clearTimeout(timer);
  }, [navigate, setUser]);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} variant="filled" onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default LogoutPage;
