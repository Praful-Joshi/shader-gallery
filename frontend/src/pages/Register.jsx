import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Send register request to backend
    console.log("Registering with:", { email, password });
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleRegister} style={{ marginTop: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "0.5rem", padding: "0.5rem", width: "200px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
