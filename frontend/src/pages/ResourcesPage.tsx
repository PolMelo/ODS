import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";


import ODS0 from "../assets/ODS PNG/ODS 0.png";
import ODS1 from "../assets/ODS PINTADA/ODS PINTADA 1.png";
import ODS2 from "../assets/ODS PINTADA/ODS PINTADA 2.png";
import ODS3 from "../assets/ODS PINTADA/ODS PINTADA 3.png";
import ODS4 from "../assets/ODS PINTADA/ODS PINTADA 4.png";
import ODS5 from "../assets/ODS PINTADA/ODS PINTADA 5.png";
import ODS6 from "../assets/ODS PINTADA/ODS PINTADA 6.png";
import ODS7 from "../assets/ODS PINTADA/ODS PINTADA 7.png";
import ODS8 from "../assets/ODS PINTADA/ODS PINTADA 8.png";
import ODS9 from "../assets/ODS PINTADA/ODS PINTADA 9.png";
import ODS10 from "../assets/ODS PINTADA/ODS PINTADA 10.png";
import ODS11 from "../assets/ODS PINTADA/ODS PINTADA 11.png";
import ODS12 from "../assets/ODS PINTADA/ODS PINTADA 12.png";
import ODS13 from "../assets/ODS PINTADA/ODS PINTADA 13.png";
import ODS14 from "../assets/ODS PINTADA/ODS PINTADA 14.png";
import ODS15 from "../assets/ODS PINTADA/ODS PINTADA 15.png";
import ODS16 from "../assets/ODS PINTADA/ODS PINTADA 16.png";
import ODS17 from "../assets/ODS PINTADA/ODS PINTADA 17.png";

import CARD1 from "../assets/ODS EXPLICADES/CARD1.jpg";
import CARD2 from "../assets/ODS EXPLICADES/CARD2.jpg";
import CARD3 from "../assets/ODS EXPLICADES/CARD3.jpg";
import CARD4 from "../assets/ODS EXPLICADES/CARD4.jpg";
import CARD5 from "../assets/ODS EXPLICADES/CARD5.jpg";
import CARD6 from "../assets/ODS EXPLICADES/CARD6.jpg";
import CARD7 from "../assets/ODS EXPLICADES/CARD7.jpg";
import CARD8 from "../assets/ODS EXPLICADES/CARD8.jpg";
import CARD9 from "../assets/ODS EXPLICADES/CARD9.jpg";
import CARD10 from "../assets/ODS EXPLICADES/CARD10.jpg";
import CARD11 from "../assets/ODS EXPLICADES/CARD11.jpg";
import CARD12 from "../assets/ODS EXPLICADES/CARD12.jpg";
import CARD13 from "../assets/ODS EXPLICADES/CARD13.jpg";
import CARD14 from "../assets/ODS EXPLICADES/CARD14.jpg";
import CARD15 from "../assets/ODS EXPLICADES/CARD15.jpg";
import CARD16 from "../assets/ODS EXPLICADES/CARD16.jpg";
import CARD17 from "../assets/ODS EXPLICADES/CARD17.jpg";



const odsData = [
  {
    logo: ODS1,
    card: CARD1,
    title: "Fin de la pobreza",
    description: "Este objetivo pretende erradicar la pobreza en todas sus formas en todo el mundo, asegurando que todas las personas tengan acceso a sus necesidades básicas y oportunidades para mejorar su vida. El crecimiento económico debe ser inclusivo, generando empleos sostenibles y promoviendo la igualdad de oportunidades. Esto implica no solo asegurar ingresos mínimos, sino también acceso a servicios esenciales, protección social y oportunidades de desarrollo personal y comunitario. Alcanzar este objetivo es fundamental: la pobreza no solo limita la supervivencia digna, también restringe el acceso a educación, salud y desarrollo pleno.",
  },
  {
    logo: ODS2,
    card: CARD2,
    title: "Hambre cero",
    description: "Busca poner fin al hambre, garantizar la seguridad alimentaria, mejorar la nutrición y promover una agricultura sostenible. Esto implica asegurar que todas las personas tengan acceso regular a alimentos suficientes, nutritivos y culturalmente apropiados. Además, promueve sistemas agrícolas resilientes, producción sostenible de alimentos y prácticas que no agoten los recursos naturales. Este objetivo está estrechamente ligado al fin de la pobreza: garantizar alimentación y nutrición adecuadas es clave para que las personas puedan desarrollarse plenamente y contribuir a su comunidad.",
  },
  {
    logo: ODS3,
    card: CARD3,
    title: "Salud y bienestar",
    description: "Este objetivo busca asegurar una vida sana y promover el bienestar para todas las personas en todas las edades. Incluye garantizar acceso a servicios sanitarios de calidad, vacunas, medicinas esenciales, atención preventiva, y medidas para reducir la mortalidad infantil, enfermedades transmisibles y no transmisibles. También contempla salud mental, bienestar general y resiliencia ante crisis sanitarias. Su logro es crucial para que comunidades y sociedades prosperen: sin salud, los demás objetivos —educación, trabajo, desarrollo— pierden su fundamento.",
  },
  {
    logo: ODS4,
    card: CARD4,
    title: "Educación de calidad",
    description: "Pretende garantizar una educación inclusiva, equitativa y de calidad, promoviendo oportunidades de aprendizaje a lo largo de toda la vida. Esto incluye acceso universal a educación primaria y secundaria, así como formación técnica, profesional y superior, con herramientas para desarrollar habilidades, pensamiento crítico, ciudadanía y conciencia ecológica. Una educación sólida es base para reducir desigualdades, fomentar el desarrollo humano y formar ciudadanos capaces de afrontar los desafíos globales.",
  },
  {
    logo: ODS5,
    card: CARD5,
    title: "Igualdad de género",
    description: "Busca lograr la igualdad entre géneros y empoderar a todas las mujeres y niñas. Incluye eliminar todas las formas de discriminación, violencia de género, desigualdad en el acceso a oportunidades laborales y educativas, así como asegurar derechos, participación igualitaria en decisiones sociales, políticas y económicas. Promover la igualdad de género no solo es una cuestión de justicia, también impulsa sociedades más prósperas, equitativas y sostenibles, ya que aprovechar el potencial de todas las personas beneficia al colectivo.",
  },
  {
    logo: ODS6,
    card: CARD6,
    title: "Agua limpia y saneamiento",
    description: "Su meta es garantizar la disponibilidad y la gestión sostenible del agua y el saneamiento para todas las personas. Esto implica asegurar acceso universal a agua potable, sistemas de saneamiento, higiene adecuada, tratamiento de aguas residuales y gestión sostenible del recurso hídrico. Un acceso garantizado al agua limpia y saneamiento reduce enfermedades, mejora la salud pública, protege ecosistemas y permite dignidad y calidad de vida.",
  },
  {
    logo: ODS7,
    card: CARD7,
    title: "Energía asequible y no contaminante",
    description: "Este objetivo promueve el acceso universal a energía asequible, confiable, sostenible y moderna. Busca asegurar electricidad, energías limpias (fuentes renovables), eficiencia energética y tecnologías modernas accesibles para todos. El acceso a energía sostenible impulsa desarrollo, reduce desigualdades, mejora calidad de vida, y contribuye a mitigar el cambio climático.",
  },
  {
    logo: ODS8,
    card: CARD8,
    title: "Trabajo decente y crecimiento económico",
    description: "Este objetivo apunta a promover un crecimiento económico inclusivo y sostenido, con empleo productivo, digno y decente para todos. No se trata solo de crear puestos de trabajo, sino de garantizar condiciones laborales justas, protección social, oportunidades de desarrollo y estabilidad. Un trabajo decente es esencial para reducir pobreza, mejorar calidad de vida y fomentar sociedades más justas.",
  },
  {
    logo: ODS9,
    card: CARD9,
    title: "Industria, innovación e infraestructura",
    description: "Busca desarrollar infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación. Esto implica construir carreteras, transportes, tecnologías, comunicaciones, industrias limpias, y apoyar investigación y desarrollo. Invertir en infraestructura e innovación es clave para el desarrollo económico, la creación de empleo, la mejora de servicios básicos y la adaptación a nuevos retos ambientales y sociales.",
  },
  {
    logo: ODS10,
    card: CARD10,
    title: "Reducción de las desigualdades",
    description: "Pretende reducir las desigualdades dentro de los países y entre ellos, abordando disparidades económicas, sociales, de género, de acceso a servicios, oportunidades y derechos. Esto incluye protección social, inclusión, igualdad de oportunidades, migración justa, políticas que favorezcan a grupos vulnerables, y cooperación internacional. Reducir desigualdades fortalece la cohesión social, promueve la justicia, y permite que todos tengan las mismas oportunidades de desarrollo.",
  },
  {
    logo: ODS0,
    isPlaceholder: true,
  },
  {
    logo: ODS11,
    card: CARD11,
    title: "Ciudades y comunidades sostenibles",
    description: "Este objetivo busca hacer que las ciudades y asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles. Implica garantizar vivienda digna, transporte público accesible, servicios básicos, espacios verdes, planificación urbana justa, gestión adecuada de residuos y resiliencia ante desastres.",
  },
  {
    logo: ODS12,
    card: CARD12,
    title: "Producción y consumo responsables",
    description: "Su finalidad es asegurar patrones de consumo y producción sostenibles. Esto implica reducir el desperdicio, mejorar la eficiencia en el uso de recursos, fomentar la economía circular, producción responsable, reciclaje y consumo consciente. También implica modificar hábitos individuales, empresariales y sociales para minimizar el impacto ambiental, economizar recursos, y asegurar un uso justo y sostenible de los bienes.",
  },
  {
    logo: ODS13,
    card: CARD13,
    title: "Acción por el clima",
    description: "Este objetivo exige tomar medidas urgentes para combatir el cambio climático y sus efectos. Incluye reducir emisiones de gases de efecto invernadero, adaptar sociedades y ecosistemas al cambio climático, promover energías limpias, resiliencia comunitaria y políticas climáticas. Actuar con urgencia es vital para garantizar un futuro sostenible para las próximas generaciones.",
  },
  {
    logo: ODS14,
    card: CARD14,
    title: "Vida debajo del agua",
    description: "Busca conservar y utilizar de forma sostenible los océanos, mares y recursos marinos. Esto incluye proteger ecosistemas marinos, detener la contaminación, pesquerías insostenibles y la destrucción de hábitats. El océano es clave para la biodiversidad, la regulación climática, la alimentación y los medios de vida de millones de personas.",
  },
  {
    logo: ODS15,
    card: CARD15,
    title: "Vida de ecosistemas terrestres",
    description: "Se centra en proteger, restaurar y promover el uso sostenible de los ecosistemas terrestres, gestionar los bosques de forma sostenible, combatir la desertificación, frenar la degradación del suelo y detener la pérdida de biodiversidad. Mantener sanos los ecosistemas terrestres es esencial para la vida en el planeta.",
  },
  {
    logo: ODS16,
    card: CARD16,
    title: "Paz, justicia e instituciones sólidas",
    description: "Propone promover sociedades pacíficas, justas e inclusivas, garantizar acceso a la justicia para todos y construir instituciones eficaces, responsables e inclusivas a todos los niveles. Esto incluye derechos humanos, transparencia, participación ciudadana, gobernanza democrática, seguridad, estado de derecho y lucha contra la corrupción.",
  },
  {
    logo: ODS17,
    card: CARD17,
    title: "Alianzas para lograr los objetivos",
    description: "Este objetivo promueve fortalecer los medios de implementación y revitalizar la asociación mundial para el desarrollo sostenible. Eso significa cooperación internacional, alianzas entre gobiernos, sector privado, organizaciones civiles y sociedad, intercambio de conocimientos, recursos financieros, tecnología, datos e innovación. El éxito de todos los ODS depende de la colaboración global.",
  },
];

const ResourcesPage: React.FC = () => {
  const theme = useTheme();
  const [selectedOds, setSelectedOds] = useState<any>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpen = (ods: any) => {
    if (ods.isPlaceholder) return;
    setSelectedOds(ods);
    setIsFlipped(false);
  };

  const handleClose = () => {
    setSelectedOds(null);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ height: "100vh", width: "100%", overflowY: "auto", padding: "1.5rem" }}>
      <h1 style={{ fontWeight: 700, marginBottom: "1rem", textAlign: "center" }}>
        Objetivos de Desarrollo Sostenible
      </h1>

      <p style={{ marginBottom: "2rem", textAlign: "center", maxWidth: "800px", margin: "0 auto 2rem" }}>
        Explora los 17 ODS y descubre cómo cada uno contribuye a construir un futuro más sostenible y equitativo para nuestro planeta.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <style>
          {`
      @media (max-width: 768px) {
        div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}
        </style>
        {odsData.map((ods, index) => (
          <div
            key={index}
            onClick={() => handleOpen(ods)}
            style={{
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",
              cursor: ods.isPlaceholder ? "default" : "pointer",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!ods.isPlaceholder) {
                e.currentTarget.style.transform = "scale(1.03)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div
              style={{
                height: "50%",
                backgroundImage: `url(${ods.logo})`,
                filter: "sepia(35%)",
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            {!ods.isPlaceholder && (
              <div style={{ height: "50%", padding: "1rem", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", marginTop: 0 }}>
                  {ods.title}
                </h3>
                <p
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    margin: 0,
                  }}
                >
                  {ods.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedOds && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "700px",
              perspective: "1000px",
            }}
            onClick={(e) => e.stopPropagation()}
          >

            <div
              onClick={handleFlip}
              style={{
                position: "relative",
                width: "100%",
                height: "85vh",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                cursor: "pointer",
              }}
            >
              {/* Cara frontal */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    height: "35%",
                    backgroundImage: `url(${selectedOds.logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                />
                <div style={{
                  flex: 1,
                  overflow: "auto",
                  padding: "2rem",
                  backgroundColor: theme.palette.background.paper,
                }}>
                  <h2 style={{ fontWeight: 700, marginTop: 0, marginBottom: "1rem" }}>
                    {selectedOds.title}
                  </h2>
                  <p style={{ lineHeight: 1.6 }}>{selectedOds.description}</p>
                </div>
              </div>

              {/* Cara trasera */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  backgroundImage: `url(${selectedOds.card})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "12px",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;