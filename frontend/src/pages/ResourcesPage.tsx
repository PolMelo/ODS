import "./ResourcesPage.css";
import {
  ODS1, ODS2, ODS3, ODS4, ODS5, ODS6, ODS7, ODS8,
  ODS9, ODS10, ODS11, ODS12, ODS13, ODS14, ODS15,
  ODS16, ODS17
} from "../assets/LOGOS ODS/imports";

const odsData = [
  { image: ODS1, title: "Fin de la pobreza", description: "..."},
  { image: ODS2, title: "Hambre cero", description: "..."},
  { image: ODS3, title: "Salud y bienestar", description: "..."},
  { image: ODS4, title: "Educación de calidad", description: "..."},
  { image: ODS5, title: "Igualdad de género", description: "..."},
  { image: ODS6, title: "Agua limpia y saneamiento", description: "..."},
  { image: ODS7, title: "Energía asequible y no contaminante", description: "..."},
  { image: ODS8, title: "Trabajo decente y crecimiento económico", description: "..."},
  { image: ODS9, title: "Industria, innovación e infraestructura", description: "..."},
  { image: ODS10, title: "Reducción de las desigualdades", description: "..."},
  { image: ODS11, title: "Ciudades y comunidades sostenibles", description: "..."},
  { image: ODS12, title: "Producción y consumo responsables", description: "..."},
  { image: ODS13, title: "Acción por el clima", description: "..."},
  { image: ODS14, title: "Vida debajo del agua", description: "..."},
  { image: ODS15, title: "Vida de ecosistemas terrestres", description: "..."},
  { image: ODS16, title: "Paz, justicia e instituciones sólidas", description: "..."},
  { image: ODS17, title: "Alianzas para lograr los objetivos", description: "..."},
];

const ResourcesPage = () => {
  return (
    <div className="resources-wrapper">
      <div className="resources-container">
        {odsData.map((ods, index) => (
          <div className="ods-card" key={index}>
            <img src={ods.image} alt={ods.title} className="ods-img" />
            <div className="ods-text">
              <h3>{ods.title}</h3>
              <p>{ods.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
