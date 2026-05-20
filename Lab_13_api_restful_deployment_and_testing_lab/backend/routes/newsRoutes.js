const express = require("express");
const router = express.Router();
const { getNews } = require("../controllers/newsController");

// GET /api/news/:country
router.get("/:country", getNews);

module.exports = router;
