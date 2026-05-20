const axios = require("axios");

// Valid 2-letter country codes supported by NewsAPI
const VALID_COUNTRIES = [
  "ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz",
  "de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it","jp",
  "kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt",
  "ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us",
  "ve","za"
];

exports.getNews = async (req, res) => {
  const { country } = req.params;

  // Validate country code
  if (!country || country.trim() === "") {
    return res.status(400).json({ error: "Country code is required (e.g., us, pk, gb)" });
  }

  const countryCode = country.toLowerCase();

  if (!VALID_COUNTRIES.includes(countryCode)) {
    return res.status(400).json({
      error: `Invalid country code "${country}". Use a valid 2-letter code like: us, gb, in, pk, au`,
    });
  }

  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey || apiKey === "your_newsapi_key_here") {
    return res.status(500).json({ error: "News API key not configured in .env" });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=10&apiKey=${apiKey}`;
    const response = await axios.get(url);
    const articles = response.data.articles;

    if (!articles || articles.length === 0) {
      return res.status(404).json({ error: `No headlines found for country "${countryCode}"` });
    }

    // Return structured response as required by lab (limit to 10)
    const headlines = articles.slice(0, 10).map((article) => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
      publishedAt: article.publishedAt,
    }));

    res.json({
      country: countryCode.toUpperCase(),
      totalResults: headlines.length,
      headlines,
    });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return res.status(401).json({ error: "Invalid News API key. Check your .env file." });
    }
    res.status(500).json({ error: "Failed to fetch news. Please try again later." });
  }
};
