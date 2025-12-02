import { useState } from "react";

export default function Register() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setMessage("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nom,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setIsError(true);
            }

            setMessage(data.message || data.error || "Ha ocurrido un error.");
        } catch {
            setIsError(true);
            setMessage("No se ha podido conectar con el servidor.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* ---------- ESTILOS INLINE GLOBAL ---------- */}
            <style>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at top left, #4f46e5 0, #0f172a 45%, #020617 100%);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .register-card {
          width: 100%;
          max-width: 420px;
          background: rgba(15, 23, 42, 0.95);
          border-radius: 1rem;
          padding: 2.5rem 2rem;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(148, 163, 184, 0.2);
          backdrop-filter: blur(14px);
          color: #e5e7eb;
        }

        .register-title {
          margin: 0 0 0.5rem;
          font-size: 1.6rem;
          font-weight: 700;
          color: #e5e7eb;
          text-align: center;
        }

        .register-subtitle {
          margin: 0 0 1.5rem;
          font-size: 0.9rem;
          color: #9ca3af;
          text-align: center;
        }

        .register-message {
          font-size: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
        }

        .register-message-success {
          background: rgba(22, 163, 74, 0.12);
          color: #bbf7d0;
          border: 1px solid rgba(34, 197, 94, 0.4);
        }

        .register-message-error {
          background: rgba(220, 38, 38, 0.12);
          color: #fecaca;
          border: 1px solid rgba(248, 113, 113, 0.4);
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .form-group input {
          border-radius: 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.35);
          padding: 0.7rem 0.9rem;
          background-color: rgba(15, 23, 42, 0.85);
          color: #e5e7eb;
          font-size: 0.9rem;
          transition: 0.15s;
        }

        .form-group input::placeholder {
          color: #6b7280;
        }

        .form-group input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 1px rgba(129, 140, 248, 0.4);
          background-color: rgba(15, 23, 42, 1);
        }

        .register-button {
          margin-top: 0.5rem;
          width: 100%;
          border-radius: 0.9rem;
          border: none;
          padding: 0.8rem 1rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          background: linear-gradient(135deg, #4f46e5, #6366f1, #22c55e);
          color: white;
          transition: 0.15s;
          box-shadow: 0 12px 30px rgba(79, 70, 229, 0.45);
        }

        .register-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 16px 35px rgba(79, 70, 229, 0.6);
        }

        .register-button:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.5);
        }

        .register-button:disabled {
          opacity: 0.7;
          cursor: default;
        }

        .register-footer-text {
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: #6b7280;
          text-align: center;
        }

        .register-footer-text span {
          color: #a5b4fc;
          font-weight: 500;
          cursor: pointer;
        }

        .register-footer-text span:hover {
          text-decoration: underline;
        }
      `}</style>

            {/* ---------- HTML ---------- */}
            <div className="register-page">
                <div className="register-card">
                    <h2 className="register-title">Crear cuenta</h2>
                    <p className="register-subtitle">
                        Únete a ODSfera y empieza a sumar acciones por el planeta 🌍
                    </p>

                    {message && (
                        <div
                            className={`register-message ${isError ? "register-message-error" : "register-message-success"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                    <form className="register-form" onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="nom">Nombre</label>
                            <input
                                id="nom"
                                type="text"
                                placeholder="Tu nombre"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="tucorreo@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="register-button" type="submit" disabled={isLoading}>
                            {isLoading ? "Creando cuenta..." : "Registrarse"}
                        </button>

                        <p className="register-footer-text">
                            ¿Ya tienes cuenta? <span>Inicia sesión</span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}