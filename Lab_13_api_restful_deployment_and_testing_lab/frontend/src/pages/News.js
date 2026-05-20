import React, { useState } from "react";
import axios from "axios";

function News() {
  const [country, setCountry] = useState("");
  const [news, setNews] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    if (!country.trim()) {
      setError("Please enter a country code.");
      return;
    }
    setLoading(true);
    setError("");
    setNews(null);

    try {
      const res = await axios.get(`http://localhost:5000/api/news/${country.toLowerCase()}`);
      setNews(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch news. Check the country code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ color: "#1e40af" }}>📰 News Headlines API</h2>
      <p style={{ color: "#6b7280" }}>
        Enter a 2-letter country code (e.g. <strong>us</strong>, <strong>gb</strong>, <strong>in</strong>, <strong>pk</strong>) to get top headlines.
      </p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter country code (e.g. us)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchNews()}
          maxLength={2}
          style={{ flex: 1, padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          onClick={fetchNews}
          style={{ padding: "10px 20px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "15px" }}
        >
          Get News
        </button>
      </div>

      {loading && <p style={{ marginTop: "15px", color: "#6b7280" }}>Loading...</p>}

      {error && (
        <div style={{ marginTop: "15px", padding: "12px", backgroundColor: "#fee2e2", borderRadius: "6px", color: "#b91c1c" }}>
          ❌ {error}
        </div>
      )}

      {news && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#1e3a8a" }}>
            Top Headlines — {news.country} ({news.totalResults} articles)
          </h3>
          {news.headlines.map((article, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "14px", marginBottom: "12px" }}
            >
              <p style={{ margin: "0 0 6px", fontWeight: "bold", color: "#111827" }}>{article.title}</p>
              <p style={{ margin: "0 0 4px", color: "#6b7280", fontSize: "13px" }}>
                📡 Source: <strong>{article.source}</strong>
              </p>
              <p style={{ margin: "0 0 4px", color: "#6b7280", fontSize: "13px" }}>
                🕐 Published: {new Date(article.publishedAt).toLocaleString()}
              </p>
              <a href={article.url} target="_blank" rel="noreferrer" style={{ fontSize: "13px", color: "#2563eb" }}>
                Read Full Article →
              </a>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "25px", padding: "12px", backgroundColor: "#f3f4f6", borderRadius: "6px" }}>
        <strong>API Endpoint:</strong>
        <code style={{ display: "block", marginTop: "5px", color: "#7c3aed" }}>
          GET http://localhost:5000/api/news/:country
        </code>
        <strong>Example:</strong>
        <code style={{ display: "block", marginTop: "5px", color: "#7c3aed" }}>
          GET http://localhost:5000/api/news/us
        </code>
      </div>
    </div>
  );
}

export default News;
