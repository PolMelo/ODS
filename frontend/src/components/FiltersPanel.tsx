import { useState } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

const odsColors: Record<number, string> = {
  1: "#e5243b",
  2: "#dda83a",
  3: "#4c9f38",
  4: "#c5192d",
  5: "#ff3a21",
  6: "#26bde2",
  7: "#fcc30b",
  8: "#a21942",
  9: "#fd6925",
  10: "#dd1367",
  11: "#fd9d24",
  12: "#bf8b2e",
  13: "#3f7e44",
  14: "#0a97d9",
  15: "#56c02b",
  16: "#00689d",
  17: "#19486a",
};

const odsLabels: Record<number, string> = {
  1: "Fin de la pobreza",
  2: "Hambre cero",
  3: "Salud y bienestar",
  4: "Educación de calidad",
  5: "Igualdad de género",
  6: "Agua limpia y saneamiento",
  7: "Energía asequible",
  8: "Trabajo decente",
  9: "Industria e innovación",
  10: "Reducción desigualdades",
  11: "Ciudades sostenibles",
  12: "Producción responsable",
  13: "Acción climática",
  14: "Vida submarina",
  15: "Ecosistemas terrestres",
  16: "Paz e instituciones",
  17: "Alianzas",
};

interface Props {
  filtroODS: number[];
  setFiltroODS: (ods: number[]) => void;
  mostrarPasadas: boolean;
  setMostrarPasadas: (v: boolean) => void;
}

export default function FiltersPanel({
  filtroODS,
  setFiltroODS,
  mostrarPasadas,
  setMostrarPasadas,
}: Props) {
  const [openODS, setOpenODS] = useState(false);

  const toggleODS = (ods: number) => {
    if (filtroODS.includes(ods)) {
      setFiltroODS(filtroODS.filter((x) => x !== ods));
    } else {
      setFiltroODS([...filtroODS, ods]);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      <FormControlLabel
        control={
          <Checkbox
            checked={mostrarPasadas}
            onChange={(e) => setMostrarPasadas(e.target.checked)}
            sx={{ marginLeft: "-8px" }}
          />
        }
        label="Mostrar acciones pasadas"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={() => setOpenODS(!openODS)}
      >
        Filtrar por ODS
      </Button>

      {openODS && (
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "0.8rem",
            maxHeight: "260px",
            overflowY: "auto",
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setFiltroODS([])}
            sx={{ marginBottom: "0.8rem" }}
          >
            Deseleccionar todo
          </Button>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {Array.from({ length: 17 }, (_, i) => i + 1).map((ods) => {
              const color = odsColors[ods];
              const active = filtroODS.includes(ods);

              return (
                <button
                  key={ods}
                  onClick={() => toggleODS(ods)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 10px",
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                    border: `1px solid ${color}88`,
                    background: active ? `${color}40` : "transparent",
                    cursor: "pointer",
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = `${color}25`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <span style={{ fontWeight: 600 }}>ODS {ods}</span>
                  <span style={{ opacity: 0.7 }}>{odsLabels[ods]}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
