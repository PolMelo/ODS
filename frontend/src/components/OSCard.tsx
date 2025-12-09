import React from "react";
import ChipODS from "./ChipODS";

interface Props {
  title: string;
  img: string;
  ods: number[];
  date: string;
  onClick?: () => void;
}

const OSCard: React.FC<Props> = ({ title, img, ods, date, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: "22px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "transform .25s ease, box-shadow .25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 14px 34px rgba(0,0,0,0.22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      />

      <div style={{ padding: "1rem 1.2rem" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            opacity: 0.6,
            margin: "0.4rem 0 0.7rem",
            fontSize: "0.85rem",
          }}
        >
          {date}
        </p>

        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          {ods.map((o) => (
            <ChipODS key={o} n={o} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OSCard;
