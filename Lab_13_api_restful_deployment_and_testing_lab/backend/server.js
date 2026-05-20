const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./routes/weatherRoutes");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/weather", weatherRoutes);
app.use("/api/news", newsRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Lab 13 API Server is running",
    endpoints: {
      weather: "GET /api/weather/:city",
      news: "GET /api/news/:country",
    },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
