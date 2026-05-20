import React, { useState } from "react";
import Weather from "./pages/Weather";
import News from "./pages/News";

function App() {
  const [tab, setTab] = useState("weather");

  const btnStyle = (active) => ({
    padding: "10px 24px",
    marginRight: "10px",
    cursor: "pointer",
    backgroundColor: active ? "#2563eb" : "#e5e7eb",
    color: active ? "#fff" : "#111",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: active ? "bold" : "normal",
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>Lab 13 — Weather & News API</h1>
      <p style={{ textAlign: "center", color: "#6b7280" }}>BSSE-VI | Full Stack Programming</p>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button style={btnStyle(tab === "weather")} onClick={() => setTab("weather")}>
          🌤 Weather API
        </button>
        <button style={btnStyle(tab === "news")} onClick={() => setTab("news")}>
          📰 News API
        </button>
      </div>

      {tab === "weather" ? <Weather /> : <News />}
    </div>
  );
}

export default App;
