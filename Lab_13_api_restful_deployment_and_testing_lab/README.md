# Lab 13 — API RESTful Deployment and Testing
## Full Stack Programming | BSSE-VI

---

## Project Overview

This project implements two RESTful APIs using Node.js and Express.js:

1. **Weather Forecast API** — fetches real-time weather data for any city using OpenWeatherMap API
2. **News Headlines API** — fetches top news headlines for any country using NewsAPI

---

## Folder Structure

```
lab_13_api_restful_deployment_and_testing_lab/
├── backend/
│   ├── controllers/
│   │   ├── weatherController.js   ← Weather API logic
│   │   └── newsController.js      ← News API logic
│   ├── routes/
│   │   ├── weatherRoutes.js       ← Weather route
│   │   └── newsRoutes.js          ← News route
│   ├── .env.example               ← Copy to .env and fill keys
│   ├── package.json
│   └── server.js                  ← Main backend entry point
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/
    │   │   ├── Weather.js         ← Weather page
    │   │   └── News.js            ← News page
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## Step 1 — Get Free API Keys

### OpenWeatherMap (Weather API)
1. Go to: https://openweathermap.org/api
2. Sign up for a free account
3. Go to your profile → API keys
4. Copy your API key

### NewsAPI (News Headlines API)
1. Go to: https://newsapi.org/
2. Sign up for a free account
3. Copy your API key from the dashboard

---

## Step 2 — Backend Setup

```bash
cd backend
```

### Create .env file
Copy `.env.example` to `.env` and fill in your API keys:

```
PORT=5000
OPENWEATHER_API_KEY=paste_your_openweather_key_here
NEWS_API_KEY=paste_your_newsapi_key_here
```

### Install dependencies
```bash
npm install
```

### Run backend
```bash
npm run dev
```

Server starts at: http://localhost:5000

---

## Step 3 — Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend opens at: http://localhost:3000

---

## API Endpoints

### Weather API
```
GET http://localhost:5000/api/weather/:city
```
**Example:**
```
GET http://localhost:5000/api/weather/Karachi
GET http://localhost:5000/api/weather/London
GET http://localhost:5000/api/weather/New York
```

**Response:**
```json
{
  "city": "Karachi",
  "country": "PK",
  "temperature": "32 °C",
  "condition": "clear sky",
  "humidity": "65%"
}
```

---

### News API
```
GET http://localhost:5000/api/news/:country
```
**Example:**
```
GET http://localhost:5000/api/news/us
GET http://localhost:5000/api/news/gb
GET http://localhost:5000/api/news/in
```

**Response:**
```json
{
  "country": "US",
  "totalResults": 10,
  "headlines": [
    {
      "title": "Breaking News Title",
      "source": "CNN",
      "url": "https://...",
      "publishedAt": "2025-01-01T12:00:00Z"
    }
  ]
}
```

---

## Postman Testing

### Test Weather API
- Method: **GET**
- URL: `http://localhost:5000/api/weather/Karachi`

### Test News API
- Method: **GET**
- URL: `http://localhost:5000/api/news/us`

### Test Root
- Method: **GET**
- URL: `http://localhost:5000/`

---

## How to Zip for Submission

```bash
# Go one folder up from the project
cd ..

# Zip the project (exclude node_modules)
zip -r lab_13_submission.zip lab_13_api_restful_deployment_and_testing_lab \
  --exclude "*/node_modules/*" \
  --exclude "*/.git/*"
```

---

## Instructor
Mr. Sharif Hussain | sharifali.aulecturer@gmail.com

## GitHub Repository Name
Full-Stack-Programming-Lab → folder: `lab_13_api_restful_deployment_and_testing_lab`
