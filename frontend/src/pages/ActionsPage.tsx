import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

/* ✅ La interface SIEMPRE fuera del return */
interface Ods {
  id: number;
  nom: string;
  descripcion: string;
}

const ActionsPage: React.FC = () => {
  const [ods, setOds] = useState<Ods[]>([]);

  useEffect(() => {
    apiFetch("http://localhost:8000/api/ods")
      .then(res => res.json())
      .then(data => setOds(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "white",
      }}
    >
      <NavBarComponent />

      <div style={{ flex: 1, padding: "2rem" }}>
        <h1>Listado de ODS</h1>

        {ods.map(o => (
          <div key={o.id}>
            <h3>{o.nom}</h3>
            <p>{o.descripcion}</p>
          </div>
        ))}
      </div>

      <FooterComponent />
    </div>
  );
};

export default ActionsPage;
