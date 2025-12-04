import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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

            <TextField fullWidth label="Nombre" name="nom" value={formData.nom} onChange={handleChange} margin="normal" />

            <TextField fullWidth label="Descripción" name="descripcion" value={formData.descripcion} onChange={handleChange} margin="normal" />

            <TextField fullWidth type="date" name="fecha" value={formData.fecha} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />

            <TextField fullWidth type="time" name="hora" value={formData.hora} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />

            <TextField fullWidth label="Etiqueta 1" name="etiqueta1" type="number" value={formData.etiqueta1} onChange={handleChange} margin="normal" />

            <TextField fullWidth label="Etiqueta 2" name="etiqueta2" type="number" value={formData.etiqueta2} onChange={handleChange} margin="normal" />

            <TextField fullWidth label="Etiqueta 3" name="etiqueta3" type="number" value={formData.etiqueta3} onChange={handleChange} margin="normal" />

            <TextField fullWidth label="Lugar" name="lugar" value={formData.lugar} onChange={handleChange} margin="normal" />

            <TextField fullWidth label="Imagen URL" name="imagen_url" value={formData.imagen_url} onChange={handleChange} margin="normal" />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }} fullWidth>
                Crear ODS
            </Button>
        </Box>
    );
};

export default CrearOds;
