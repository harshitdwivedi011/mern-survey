import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/submissions");
    } else {
      alert("Invalid credentials");
    }
  };
  const containerStyle = {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <form onSubmit={handleLogin} style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
};

export default AdminLogin;
