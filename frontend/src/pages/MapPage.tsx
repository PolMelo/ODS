import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

// Convierte cualquier URL de Google Maps normal en una URL embed válida
function convertToEmbedUrl(mapUrl: string, apiKey: string) {
  if (!mapUrl) return null;

  // Buscar @lat,lng
  const match = mapUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

  if (!match) return null;

  const lat = match[1];
  const lng = match[2];

  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}`;
}

const MapPage: React.FC = () => {
  const [actions, setActions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
    const load = async () => {
      try {
        const data = await fetchWithFallback();

        // Filtrar solo las acciones que tengan link válido
        const withLinks = data.filter((item: any) => item.link);
        setActions(withLinks);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    load();
  }, []);

  if (loading)
    return (
      <Box p={3}>
        <Typography variant="h6">Cargando mapa ODS...</Typography>
      </Box>
    );

  return (
    <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{ textAlign: "center", marginBottom: "2rem", color: "#1565c0" }}
      >
        Mapa de acciones ODS
      </Typography>

      {actions.length === 0 && (
        <Typography textAlign="center" color="text.secondary">
          No hay acciones con ubicación disponible.
        </Typography>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: "2rem",
        }}
      >
        {actions.map((action) => {
          const embedUrl = convertToEmbedUrl(
            action.link,
            GOOGLE_MAPS_API_KEY
          );

          return (
            <Card
              key={action.id}
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 22px rgba(0,0,0,0.12)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ marginBottom: "0.5rem", color: "#0d47a1" }}
                >
                  {action.nom}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ marginBottom: "1rem", color: "text.secondary" }}
                >
                  {action.lugar}
                </Typography>

                {embedUrl ? (
                  <iframe
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "10px" }}
                    loading="lazy"
                    allowFullScreen
                    src={embedUrl}
                  ></iframe>
                ) : (
                  <Typography color="error">
                    No se pudo generar el mapa.
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default MapPage;
