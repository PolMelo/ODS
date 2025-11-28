
const ContactPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                minWidth: "100vw",
                display: "flex",
                flexDirection: "column",
                background: "white",
                color: "black",
            }}
        >
            <h2>Contacta con nuestro equipo técnico si tienes alguna duda o problema.</h2>

            <form method="post" style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required style={{ backgroundColor: "#dcffdbff" }} />

                <label htmlFor="mensaje">Explícanos tu problema:</label>
                <textarea id="mensaje" name="mensaje" rows={5} required style={{ backgroundColor: "#dcffdbff" }} />

                <button type="submit" style={{ backgroundColor: "#b6ffb3ff", color: "black" }}>Enviar</button>
            </form>
        </div>
    );
};

export default ContactPage;
