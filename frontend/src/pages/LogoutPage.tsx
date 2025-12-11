import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ Importamos hook

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Hook para actualizar usuario

  useEffect(() => {
    // Limpiar token y usuario
    localStorage.removeItem("token");
    localStorage.removeItem("odsferaUser");

    // Resetear usuario en UserContext a "Invitado"
    setUser({
      name: "Invitado",
      email: "inicia.sesion@odsfera.com",
      avatarUrl: "",
    });

    navigate("/login", { replace: true });
  }, [navigate, setUser]);

  return null;
};

export default LogoutPage;
