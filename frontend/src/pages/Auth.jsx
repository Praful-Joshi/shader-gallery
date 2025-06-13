import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        alert("Login successful!");
        // TODO: Save token if needed
        navigate("/"); // Go to homepage or profile
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ marginTop: "1rem" }}>
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
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}
