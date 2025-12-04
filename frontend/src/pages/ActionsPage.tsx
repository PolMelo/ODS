import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import OSCard from "../components/OSCard";
import ruleta from "../assets/ODS PNG/RULETA.png";


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
  ods: number[];
  date: string;
}

const AccionesPage: React.FC = () => {
  const [acciones, setAcciones] = useState<AccionCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroODS, setFiltroODS] = useState<number[]>([]);

  // 🔄 fallback http → https
  const fetchWithFallback = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/ods");
      if (!res.ok) throw new Error("http fail");
      return await res.json();
    } catch {
      const res2 = await fetch("https://localhost:8000/api/ods");
      return await res2.json();
    }
  };

  useEffect(() => {
    fetchWithFallback()
      .then((data: AccionApi[]) => {
        const accionesFormateadas: AccionCard[] = data.map((item) => {
          const ods = [item.etiqueta1, item.etiqueta2, item.etiqueta3].filter(
            (x): x is number => x != null
          );
          return {
            title: item.nom,
            img: item.imagen_url,
            ods,
            date: item.fecha,
          };
        });

        setAcciones(accionesFormateadas);
      })
      .catch((e) => console.error("Error:", e))
      .finally(() => setLoading(false));
  }, []);

  const handleFilterChange = (_: any, nueva: number[]) => {
    setFiltroODS(nueva);
  };

  const accionesFiltradas =
    filtroODS.length === 0
      ? acciones
      : acciones.filter((a) => a.ods.some((o) => filtroODS.includes(o)));

//Logo de carrega donant voltes

if (loading)
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={ruleta}
        alt="Cargando"
        style={{
          width: "320px",
          height: "320px",
          animation: "spin 2.2s linear infinite",
        }}
      />
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );

//Si no hi ha accions mostrem aixo.
  if (acciones.length === 0)
    return <p style={{ padding: "2rem" }}>No hay acciones disponibles.</p>;

return (
  <div
    style={{
      padding: "2.5rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2.5rem",
      width: "100%",
      paddingBottom: "4rem",
      color: "inherit",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >

    {/* ==== FILTRO MINIMAL ==== */}
    <div
      style={{
        padding: "0.8rem 1rem",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <ToggleButtonGroup
        value={filtroODS}
        onChange={handleFilterChange}
        size="small"
        exclusive={false}
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          "& .MuiToggleButton-root": {
            borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            color: "inherit",
            fontWeight: 600,
            border: "1px solid rgba(255,255,255,0.15)",
            transition: ".25s ease",
            "&.Mui-selected": {
              background: "rgba(255,255,255,0.25) !important",
              color: "#000",
              borderColor: "rgba(255,255,255,0.4)",
            },
            "&:hover": {
              background: "rgba(255,255,255,0.18)",
            },
          },
        }}
      >
        {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => (
          <ToggleButton key={n} value={n}>
            {n}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>

    {/* ==== GRID ==== */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        width: "100%",
        maxWidth: "1100px",
        marginBottom: "6rem",
      }}
    >
      {accionesFiltradas.map((accion, i) => (
        <OSCard key={i} {...accion} />
      ))}
    </div>

  </div>
);}

export default AccionesPage;
