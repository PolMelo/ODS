import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Borrar token y cualquier info de usuario
    localStorage.removeItem("token");
    localStorage.removeItem("odsferaUser");

    // Redirigir al login
    navigate("/login", { replace: true });
  }, [navigate]);

  return null; // No necesita renderizar nada
};

export default LogoutPage;
