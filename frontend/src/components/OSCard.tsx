import React from "react";
import ChipODS from "./ChipODS";

interface Props {
  title: string;
  img: string;
  ods: number[];
  date: string;
}

const OSCard: React.FC<Props> = ({ title, img, ods, date }) => {
  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.13)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        paddingBottom: "1rem",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{ width: "100%", height: 150, objectFit: "cover" }}
      />

      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
          {title}
        </h3>

        <p style={{ opacity: 0.7, margin: "0.3rem 0 0.5rem" }}>{date}</p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {ods.map((o) => (
            <ChipODS key={o} n={o} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OSCard;
