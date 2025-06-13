import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Register response:", data);

      if (res.ok) {
        alert("Account created! You can now log in.");
        navigate("/auth");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong");
    }
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
