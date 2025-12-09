import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup, TextField } from "@mui/material"; 
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
  const [accionesRaw, setAccionesRaw] = useState<AccionApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroODS, setFiltroODS] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [accionSeleccionada, setAccionSeleccionada] = useState<AccionApi | null>(null);

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
        setAccionesRaw(data);

        const accionesFormateadas: AccionCard[] = data.map((item) => {
          const ods = [item.etiqueta1, item.etiqueta2, item.etiqueta3]
            .filter((x): x is number => x != null);

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

  const handleFilterChange = (
    _: React.MouseEvent<HTMLElement>,
    nueva: number[]
  ) => {
    setFiltroODS(nueva);
  };

  const accionesBuscadasYFiltradas = acciones
    .filter((accion) => {
      if (!searchTerm) return true;
      const lowerTitle = accion.title.toLowerCase();
      const lowerSearchTerm = searchTerm.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    })
    .filter((accion) => {
      if (filtroODS.length === 0) return true;
      return accion.ods.some((o) => filtroODS.includes(o));
    });

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

if (acciones.length === 0)
  return <p style={{ padding: "2rem" }}>No hay acciones disponibles.</p>;

return (
  <>
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
      
      <TextField
        label="Buscar acciones por título"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ 
            width: '100%', 
            maxWidth: '400px', 
            mb: -3,
        }} 
      />

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
        {accionesBuscadasYFiltradas.map((accion, i) => (
          <OSCard
            key={i}
            {...accion}
            onClick={() => setAccionSeleccionada(accionesRaw[i])}
          />
        ))}
      </div>
    </div>

    {/* ===== MODAL / OVERLAY ===== */}
{accionSeleccionada && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backdropFilter: "blur(10px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      zIndex: 9999,
    }}
    onClick={() => setAccionSeleccionada(null)}
  >
    <div
      style={{
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: "22px",
        border: "1px solid rgba(255,255,255,0.12)",
        padding: "2rem",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        color: "inherit",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Botón cerrar */}
      <button
        onClick={() => setAccionSeleccionada(null)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "1.4rem",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          width: "35px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "inherit",
        }}
      >
        ✕
      </button>

      {/* Imagen */}
      <img
        src={accionSeleccionada.imagen_url}
        alt={accionSeleccionada.nom}
        style={{
          width: "100%",
          maxHeight: "280px",
          objectFit: "cover",
          borderRadius: "18px",
          marginBottom: "1.2rem",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      />

      <h2 style={{ marginTop: 0 }}>{accionSeleccionada.nom}</h2>

      <p style={{ opacity: 0.85 }}>
        <strong>Descripción:</strong> {accionSeleccionada.descripcion}
      </p>

      <p style={{ opacity: 0.85 }}>
        <strong>Lugar:</strong> {accionSeleccionada.lugar || "No especificado"}
      </p>

      <p style={{ opacity: 0.85 }}>
        <strong>Fecha:</strong> {accionSeleccionada.fecha}
      </p>

      {accionSeleccionada.hora && (
        <p style={{ opacity: 0.85 }}>
          <strong>Hora:</strong> {accionSeleccionada.hora}
        </p>
      )}

      {accionSeleccionada.link && (
        <a
          href={accionSeleccionada.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "1rem",
            display: "inline-block",
            background: "rgba(255,255,255,0.12)",
            padding: "0.6rem 1rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "inherit",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Abrir enlace →
        </a>
      )}
    </div>
  </div>
)}

  </>
);
};

export default AccionesPage;
