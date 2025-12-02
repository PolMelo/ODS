const ContactPage: React.FC = () => {
    return (
        <div style={{
            minHeight: "100%",
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem"
        }}>

            <header>
                <h2>¿Necesitas ayuda?</h2>
                <p>
                    Contacta con nuestro equipo técnico si tienes alguna duda, problema o necesitas soporte.
                    Te responderemos lo antes posible.
                </p>
            </header>

            <section aria-label="Formulario de contacto">
                <form
                    method="post"
                    style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "600px" }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                        <small>Usaremos tu correo solo para responderte.</small>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="mensaje">Explícanos tu problema:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows={6}
                            required
                        />
                        <small>Incluye toda la información que creas relevante para ayudarte mejor.</small>
                    </div>

                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactPage;
