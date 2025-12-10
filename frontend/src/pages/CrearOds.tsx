import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";

const odsOptions = [
    { value: 1, label: "1 – Fin de la Pobreza" },
    { value: 2, label: "2 – Hambre Cero" },
    { value: 3, label: "3 – Salud y Bienestar" },
    { value: 4, label: "4 – Educación de Calidad" },
    { value: 5, label: "5 – Igualdad de Género" },
    { value: 6, label: "6 – Agua Limpia y Saneamiento" },
    { value: 7, label: "7 – Energía Asequible y No Contaminante" },
    { value: 8, label: "8 – Trabajo Decente y Crecimiento Económico" },
    { value: 9, label: "9 – Industria, Innovación e Infraestructura" },
    { value: 10, label: "10 – Reducción de las Desigualdades" },
    { value: 11, label: "11 – Ciudades y Comunidades Sostenibles" },
    { value: 12, label: "12 – Producción y Consumo Responsables" },
    { value: 13, label: "13 – Acción por el Clima" },
    { value: 14, label: "14 – Vida Submarina" },
    { value: 15, label: "15 – Vida de Ecosistemas Terrestres" },
    { value: 16, label: "16 – Paz, Justicia e Instituciones Sólidas" },
    { value: 17, label: "17 – Alianzas para Lograr los Objetivos" }
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

    // Filtra las opciones para evitar duplicados
    const getFilteredOptions = (exclude: string[]) => {
        return odsOptions.filter(
            (ods) => !exclude.includes(String(ods.value))
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

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
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Error al crear ODS");
            }

            alert("ODS creado con éxito");

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
            alert("Hubo un error al enviar el formulario");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, m: "auto", mt: 4 }}>
            <h2>Crear ODS</h2>

            <TextField
                fullWidth
                label="Nombre"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Descripción"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />

            <TextField
                fullWidth
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />

            {/* ETIQUETA 1 */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Etiqueta 1</InputLabel>
                <Select
                    name="etiqueta1"
                    value={formData.etiqueta1}
                    label="Etiqueta 1"
                    onChange={handleChange}
                >
                    {getFilteredOptions([]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            {ods.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* ETIQUETA 2 – precisa etiqueta 1 */}
            <FormControl fullWidth margin="normal" disabled={!formData.etiqueta1}>
                <InputLabel>Etiqueta 2</InputLabel>
                <Select
                    name="etiqueta2"
                    value={formData.etiqueta2}
                    label="Etiqueta 2"
                    onChange={handleChange}
                >
                    <MenuItem value="">Ninguna</MenuItem>
                    {getFilteredOptions([formData.etiqueta1]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            {ods.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* ETIQUETA 3 – nomes funciona si hi ha etiqueta 1 i 2 */}
            <FormControl fullWidth margin="normal" disabled={!formData.etiqueta2}>
                <InputLabel>Etiqueta 3</InputLabel>
                <Select
                    name="etiqueta3"
                    value={formData.etiqueta3}
                    label="Etiqueta 3"
                    onChange={handleChange}
                >
                    <MenuItem value="">Ninguna</MenuItem>
                    {getFilteredOptions([formData.etiqueta1, formData.etiqueta2]).map((ods) => (
                        <MenuItem key={ods.value} value={ods.value}>
                            {ods.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                label="Lugar"
                name="lugar"
                value={formData.lugar}
                onChange={handleChange}
                margin="normal"
            />

            <TextField
                fullWidth
                label="Imagen URL"
                name="imagen_url"
                value={formData.imagen_url}
                onChange={handleChange}
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }} fullWidth>
                Crear ODS
            </Button>
        </Box>
    );
};

export default CrearOds;
