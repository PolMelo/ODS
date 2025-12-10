import React, { useEffect, useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import OSCard from "../components/OSCard";
import ruleta from "../assets/ODS PNG/RULETA.png";
import { useTheme } from "@mui/material/styles";

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

const ODS_LIST = [
  "Fin de la pobreza",
  "Hambre cero",
  "Salud y bienestar",
  "Educación de calidad",
  "Igualdad de género",
  "Agua limpia y saneamiento",
  "Energía asequible y no contaminante",
  "Trabajo decente y crecimiento económico",
  "Industria, innovación e infraestructura",
  "Reducción de las desigualdades",
  "Ciudades y comunidades sostenibles",
  "Producción y consumo responsables",
  "Acción por el clima",
  "Vida submarina",
  "Vida de ecosistemas terrestres",
  "Paz, justicia e instituciones sólidas",
  "Alianzas para lograr los objetivos",
];

const AccionesPage: React.FC = () => {
  const [acciones, setAcciones] = useState<AccionCard[]>([]);
  const [accionesRaw, setAccionesRaw] = useState<AccionApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroODS, setFiltroODS] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mostrarPasadas, setMostrarPasadas] = useState(false);
  const [accionSeleccionada, setAccionSeleccionada] = useState<AccionApi | null>(null);
  const [mostrarODS, setMostrarODS] = useState(false);

  const theme = useTheme();

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

  const hoy = new Date().toISOString().split("T")[0];

  const accionesBuscadasYFiltradas = acciones
    .filter((accion) => {
      if (!searchTerm) return true;
      return accion.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((accion) => {
      if (!mostrarPasadas) return accion.date >= hoy;
      return true;
    })
    .filter((accion) => {
      if (filtroODS.length === 0) return true;
      return accion.ods.some((o) => filtroODS.includes(o));
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const handleFilterChange = (_: any, nueva: number[]) => {
    setFiltroODS(nueva);
  };

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
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* ==== PANEL IZQUIERDO ==== */}
      <div
        style={{
          width: "260px",
          padding: "1.5rem",
          position: "sticky",
          top: "0",
          height: "100%",
          overflowY: "auto",
          borderRight: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* CHECK ARRIBA */}
        <FormControlLabel
          control={
            <Checkbox
              checked={mostrarPasadas}
              onChange={(e) => setMostrarPasadas(e.target.checked)}
            />
          }
          label="Mostrar acciones pasadas"
          style={{ marginBottom: "1.2rem" }}
        />

        {/* BOTÓN DESPLEGABLE ODS */}
        <Button
          variant="contained"
          onClick={() => setMostrarODS((x) => !x)}
          fullWidth
          style={{ marginBottom: "1rem" }}
        >
          Filtrar por ODS
        </Button>

        {mostrarODS && (
          <>
            <Button
              variant="outlined"
              onClick={() => setFiltroODS([])}
              fullWidth
              style={{ marginBottom: "1rem" }}
            >
              Deseleccionar todo
            </Button>

            <ToggleButtonGroup
              value={filtroODS}
              onChange={handleFilterChange}
              orientation="vertical"
              exclusive={false}
              fullWidth
              sx={{
                "& .MuiToggleButton-root": {
                  borderRadius: "12px",
                  marginBottom: "6px",
                  textAlign: "left",
                  justifyContent: "flex-start",
                },
              }}
            >
              {ODS_LIST.map((nombre, i) => (
                <ToggleButton key={i} value={i + 1}>
                  {i + 1}. {nombre}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </>
        )}
      </div>

      {/* ==== CONTENIDO PRINCIPAL ==== */}
      <div
        style={{
          padding: "2.5rem 1.5rem",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          width: "100%",
          paddingBottom: "4rem",
          color: "inherit",
        }}
      >
        <TextField
          label="Buscar acciones por título"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "100%",
            maxWidth: "400px",
            mb: -3,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            width: "100%",
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

      {/* ==== MODAL ==== */}
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
              background: theme.palette.background.paper,
            }}
            onClick={(e) => e.stopPropagation()}
          >
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
    </div>
  );
};

export default AccionesPage;
