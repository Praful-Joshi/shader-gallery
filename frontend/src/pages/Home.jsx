import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎨 Shader Gallery</h1>
      <p>Welcome to the Shader Playground!</p>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/auth">
          <button>Login / Register</button>
        </Link>
      </div>
    </div>
  );
}
