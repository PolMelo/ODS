import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    Alert,
    CircularProgress
} from "@mui/material";

type OdsOption = { value: number; label: string; color: string };

const odsOptions: OdsOption[] = [
  { value: 1, label: "1 – Fin de la Pobreza", color: "#e5243b" },
  { value: 2, label: "2 – Hambre Cero", color: "#dda83a" },
  { value: 3, label: "3 – Salud y Bienestar", color: "#4c9f38" },
  { value: 4, label: "4 – Educación de Calidad", color: "#c5192d" },
  { value: 5, label: "5 – Igualdad de Género", color: "#ff3a21" },
  { value: 6, label: "6 – Agua Limpia y Saneamiento", color: "#26bde2" },
  { value: 7, label: "7 – Energía Asequible y No Contaminante", color: "#fcc30b" },
  { value: 8, label: "8 – Trabajo Decente y Crecimiento Económico", color: "#a21942" },
  { value: 9, label: "9 – Industria, Innovación e Infraestructura", color: "#fd6925" },
  { value: 10, label: "10 – Reducción de las Desigualdades", color: "#dd1367" },
  { value: 11, label: "11 – Ciudades y Comunidades Sostenibles", color: "#fd9d24" },
  { value: 12, label: "12 – Producción y Consumo Responsables", color: "#bf8b2e" },
  { value: 13, label: "13 – Acción por el Clima", color: "#3f7e44" },
  { value: 14, label: "14 – Vida Submarina", color: "#0a97d9" },
  { value: 15, label: "15 – Vida de Ecosistemas Terrestres", color: "#56c02b" },
  { value: 16, label: "16 – Paz, Justicia e Instituciones Sólidas", color: "#00689d" },
  { value: 17, label: "17 – Alianzas para Lograr los Objetivos", color: "#19486a" },
];

const CrearOds: React.FC = () => {
    const [formData, setFormData] = useState({
        nom: "",
        descripcion: "",
        fecha: "",
        hora: "",
        etiqueta1: "",
        etiqueta2: "",
        etiqueta3: "",
        lugar: "",
        imagen_url: ""
    });

    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success" as "success" | "error"
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        if (name.startsWith("etiqueta")) {
            const num = Number(value);
            if (num < 1 || num > 17) return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const getFilteredOptions = (exclude: string[]) => {
        return odsOptions.filter(
            (ods) => !exclude.includes(String(ods.value))
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            nom: formData.nom,
            descripcion: formData.descripcion,
            fecha: formData.fecha,
            hora: formData.hora + ":00",
            etiqueta1: parseInt(formData.etiqueta1),
            etiqueta2: formData.etiqueta2 ? parseInt(formData.etiqueta2) : null,
            etiqueta3: formData.etiqueta3 ? parseInt(formData.etiqueta3) : null,
            lugar: formData.lugar,
            imagen_url: formData.imagen_url || null
        };

        try {
            const response = await fetch("http://localhost:8000/api/apiCrearOds", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error("Error al crear ODS");

            setSnackbar({
                open: true,
                message: "ODS creado con éxito",
                severity: "success"
            });

            setFormData({
                nom: "",
                descripcion: "",
                fecha: "",
                hora: "",
                etiqueta1: "",
                etiqueta2: "",
                etiqueta3: "",
                lugar: "",
                imagen_url: ""
            });

        } catch (error) {
            console.error(error);
            setSnackbar({
                open: true,
                message: "Hubo un error al enviar el formulario",
                severity: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    const getOds = (val: string) =>
        odsOptions.find((o) => String(o.value) === String(val));

    const dot = (color?: string) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: color || "transparent",
          border: "1px solid rgba(0,0,0,0.2)",
          display: "inline-block",
        }}
      />
    );

    return (
        <>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, m: "auto", mt: 4 }}>
            <h2>Crear acción</h2>

            <TextField fullWidth label="Nombre" name="nom" value={formData.nom} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Descripción" name="descripcion" value={formData.descripcion} onChange={handleChange} margin="normal" />

            <TextField fullWidth type="date" name="fecha" value={formData.fecha}
                onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />

            <TextField fullWidth type="time" name="hora" value={formData.hora}
                onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />

            {/* ETIQUETA 1 */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Etiqueta 1</InputLabel>
                <Select
                    name="etiqueta1"
                    value={formData.etiqueta1}
                    label="Etiqueta 1"
                    onChange={handleChange}
                    renderValue={(selected) => {
                        const opt = getOds(String(selected));
                        return (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(opt?.color)}
                                <span>{opt?.label || ""}</span>
                            </Box>
                        );
                    }}
                >
                    {getFilteredOptions([]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(ods.color)}
                                <span>{ods.label}</span>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* ETIQUETA 2 */}
            <FormControl fullWidth margin="normal" disabled={!formData.etiqueta1}>
                <InputLabel>Etiqueta 2</InputLabel>
                <Select
                    name="etiqueta2"
                    value={formData.etiqueta2}
                    label="Etiqueta 2"
                    onChange={handleChange}
                    renderValue={(selected) => {
                        if (!selected) return "Ninguna";
                        const opt = getOds(String(selected));
                        return (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(opt?.color)}
                                <span>{opt?.label || ""}</span>
                            </Box>
                        );
                    }}
                >
                    <MenuItem value="">Ninguna</MenuItem>
                    {getFilteredOptions([formData.etiqueta1]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(ods.color)}
                                <span>{ods.label}</span>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* ETIQUETA 3 */}
            <FormControl fullWidth margin="normal" disabled={!formData.etiqueta2}>
                <InputLabel>Etiqueta 3</InputLabel>
                <Select
                    name="etiqueta3"
                    value={formData.etiqueta3}
                    label="Etiqueta 3"
                    onChange={handleChange}
                    renderValue={(selected) => {
                        if (!selected) return "Ninguna";
                        const opt = getOds(String(selected));
                        return (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(opt?.color)}
                                <span>{opt?.label || ""}</span>
                            </Box>
                        );
                    }}
                >
                    <MenuItem value="">Ninguna</MenuItem>
                    {getFilteredOptions([formData.etiqueta1, formData.etiqueta2]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {dot(ods.color)}
                                <span>{ods.label}</span>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField fullWidth label="Lugar" name="lugar" value={formData.lugar} onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Imagen URL" name="imagen_url" value={formData.imagen_url} onChange={handleChange} margin="normal" />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                fullWidth
                disabled={loading}
            >
                {loading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                    "Crear ODS"
                )}
            </Button>
        </Box>

        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
            <Alert
                severity={snackbar.severity}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                variant="filled"
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
        </>
    );
};

export default CrearOds;
