const axios = require("axios");

// Weather condition codes from Open-Meteo WMO standard
const getCondition = (code) => {
  if (code === 0) return "Clear sky";
  if (code <= 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code <= 49) return "Foggy";
  if (code <= 59) return "Drizzle";
  if (code <= 69) return "Rain";
  if (code <= 79) return "Snow";
  if (code <= 84) return "Rain showers";
  if (code <= 94) return "Thunderstorm";
  return "Unknown";
};

exports.getWeather = async (req, res) => {
  const { city } = req.params;

  if (!city || city.trim() === "") {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    // Step 1: Geocode city name → lat/lon using Open-Meteo geocoding (no key needed)
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const geoRes = await axios.get(geoUrl);

    if (!geoRes.data.results || geoRes.data.results.length === 0) {
      return res.status(404).json({ error: `City "${city}" not found. Please enter a valid city name.` });
    }

    const { name, country, latitude, longitude } = geoRes.data.results[0];

    // Step 2: Fetch weather using lat/lon (no key needed)
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weathercode&timezone=auto`;
    const weatherRes = await axios.get(weatherUrl);
    const current = weatherRes.data.current;

    // Return structured response matching lab requirements
    res.json({
      city: name,
      country: country,
      temperature: `${current.temperature_2m} °C`,
      condition: getCondition(current.weathercode),
      humidity: `${current.relative_humidity_2m}%`,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data. Please try again later." });
  }
};
