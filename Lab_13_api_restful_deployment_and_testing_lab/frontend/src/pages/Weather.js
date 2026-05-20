import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch weather. Check city name.");
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <div>
      <h2 style={{ color: "#1e40af" }}>🌤 Weather Forecast API</h2>
      <p style={{ color: "#6b7280" }}>Enter a city name to get real-time weather data.</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter city name (e.g. Karachi)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          style={{ flex: 1, padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          onClick={fetchWeather}
          style={{ padding: "10px 20px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "15px" }}
        >
          Search
        </button>
      </div>

      {loading && <p style={{ marginTop: "15px", color: "#6b7280" }}>Loading...</p>}

      {error && (
        <div style={{ marginTop: "15px", padding: "12px", backgroundColor: "#fee2e2", borderRadius: "6px", color: "#b91c1c" }}>
          ❌ {error}
        </div>
      )}

      {weather && (
        <div style={cardStyle}>
          <h3 style={{ margin: "0 0 10px", color: "#1e3a8a" }}>
            📍 {weather.city}, {weather.country}
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {[
                ["🌡 Temperature", weather.temperature],
                ["☁ Condition", weather.condition],
                ["💧 Humidity", weather.humidity],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: "1px solid #bfdbfe" }}>
                  <td style={{ padding: "8px", fontWeight: "bold", color: "#374151" }}>{label}</td>
                  <td style={{ padding: "8px", color: "#1f2937", textTransform: "capitalize" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: "25px", padding: "12px", backgroundColor: "#f3f4f6", borderRadius: "6px" }}>
        <strong>API Endpoint:</strong>
        <code style={{ display: "block", marginTop: "5px", color: "#7c3aed" }}>
          GET http://localhost:5000/api/weather/:city
        </code>
        <strong>Example:</strong>
        <code style={{ display: "block", marginTop: "5px", color: "#7c3aed" }}>
          GET http://localhost:5000/api/weather/Karachi
        </code>
      </div>
    </div>
  );
}

export default Weather;
