import { useState } from "react";

export default function Register() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom,
        email,
        password
      })
    });

    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Registro</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={nom}
          onChange={e => setNom(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
