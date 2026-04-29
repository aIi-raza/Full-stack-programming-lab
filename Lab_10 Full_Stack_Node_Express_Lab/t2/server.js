// Task 2: Simple Message Routes System
// Run: node server.js  |  Visit: http://localhost:3002/home  /about  /contact

const express = require('express');
const app = express();
const PORT = 3002;

// Helper to build a full styled HTML page
function buildPage(title, emoji, message, color) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      background: #1e293b;
      border-bottom: 1px solid #334155;
      display: flex;
      gap: 0;
      justify-content: center;
    }
    nav a {
      color: #94a3b8;
      text-decoration: none;
      padding: 16px 32px;
      font-size: 0.95rem;
      transition: color 0.2s, background 0.2s;
    }
    nav a:hover, nav a.active { color: ${color}; background: #0f172a; }
    .hero {
      text-align: center;
      margin-top: 60px;
    }
    .emoji { font-size: 5rem; margin-bottom: 24px; }
    h1 { font-size: 2.5rem; margin-bottom: 16px; color: ${color}; }
    p  { font-size: 1.1rem; color: #94a3b8; }
  </style>
</head>
<body>
  <nav>
    <a href="/home">🏠 Home</a>
    <a href="/about">ℹ️ About</a>
    <a href="/contact">📬 Contact</a>
  </nav>
  <div class="hero">
    <div class="emoji">${emoji}</div>
    <h1>${message}</h1>
    <p>Task 2 — Lab 10 | Full-Stack Node + Express</p>
  </div>
</body>
</html>`;
}

// Routes
app.get('/home',    (req, res) => res.send(buildPage('Home',    '🏠', 'Welcome Home!',         '#38bdf8')));
app.get('/about',   (req, res) => res.send(buildPage('About',   'ℹ️',  'About Us',              '#a78bfa')));
app.get('/contact', (req, res) => res.send(buildPage('Contact', '📬', 'Contact Us Anytime!',   '#34d399')));

// Redirect root to /home
app.get('/', (req, res) => res.redirect('/home'));

app.listen(PORT, () => {
  console.log(`✅ Task 2 server running → http://localhost:${PORT}/home`);
});
