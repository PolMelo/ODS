import React from "react";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-card">
                <h2 className="contact-title">
                    Contacta con nuestro equipo técnico si tienes alguna duda o problema.
                </h2>

                <form method="post" className="contact-form">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="mensaje">Explícanos tu problema:</label>
                    <textarea id="mensaje" name="mensaje" rows={5} required />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
