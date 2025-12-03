import React, { useEffect, useState } from "react";
import OSCard from "../components/OSCard";

interface AccionApi {
  id: number;
  nom: string;
  descripcion: string;
  imagen_url: string;
  fecha: string;
  hora?: string;
  lugar?: string;
  link?: string | null;
  etiqueta1?: number | null;
  etiqueta2?: number | null;
  etiqueta3?: number | null;
}

interface AccionCard {
  title: string;
  img: string;
  ods: (number | string)[];
  date: string;
}

const AccionesPage: React.FC = () => {
  const [acciones, setAcciones] = useState<AccionCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:8000/api/ods")
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json();
      })
      .then((data: AccionApi[]) => {
        const accionesFormateadas: AccionCard[] = data.map((item) => {
          const ods = [item.etiqueta1, item.etiqueta2, item.etiqueta3].filter(
            (x) => x !== null && x !== undefined
          );

          return {
            title: item.nom,
            img: item.imagen_url,
            ods,
            date: item.fecha,
          };
        });

        setAcciones(accionesFormateadas);
        setLoading(false);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Cargando acciones...</p>;

  if (acciones.length === 0)
    return <p style={{ padding: "2rem" }}>No hay acciones para mostrar.</p>;

  return (
    <div
      style={{
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        width: "100%",       // ocupa todo el ancho
        maxWidth: "100%",    // sin restricción
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Acciones ODSfera</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // responsivo
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {acciones.map((accion, i) => (
          <OSCard
            key={i}
            title={accion.title}
            img={accion.img}
            ods={accion.ods}
            date={accion.date}
          />
        ))}
      </div>
    </div>
  );
};

export default AccionesPage;
