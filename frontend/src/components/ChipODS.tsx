import React from "react";
import { Chip } from "@mui/material";
//Etiqueta de colors per les ODS
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

interface Props {
  n: number;
}

const ChipODS: React.FC<Props> = ({ n }) => (
  <Chip
    label={`ODS ${n}`}
    size="small"
    sx={{
      background: odsColors[n],
      color: "white",
      fontWeight: 600,
      borderRadius: "10px",
      px: 1,
      height: 24,
      fontSize: "0.75rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.20)",
    }}
  />
);


export default ChipODS;
