const ContactPage: React.FC = () => {
    return (
        <div
            style={{
                minHeight: "100%",
                minWidth: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h2>Contacta con nuestro equipo técnico si tienes alguna duda o problema.</h2>

            <form method="post" style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email"  />

                <label htmlFor="mensaje">Explícanos tu problema:</label>
                <textarea id="mensaje" name="mensaje" rows={5}  />

                <button type="submit" >Enviar</button>
            </form>
        </div>
    );
};

export default ContactPage;
