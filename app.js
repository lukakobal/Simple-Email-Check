import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setError("Email is not valid ❌");
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <h1>Simple Email Check</h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
