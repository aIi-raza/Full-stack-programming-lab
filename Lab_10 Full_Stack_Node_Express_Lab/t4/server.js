// Task 4: Simple HTML Page Renderer
// Run: node server.js  |  Visit: http://localhost:3004

const express = require('express');
const app = express();
const PORT = 3004;

// Root route — returns a full styled HTML page
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Task 4 – HTML Page Renderer</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
    }

    /* ── Header ── */
    header {
      background: linear-gradient(135deg, #1e40af, #6d28d9);
      padding: 60px 24px;
      text-align: center;
    }
    header h1 {
      font-size: 2.8rem;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
    }
    header p {
      font-size: 1.1rem;
      opacity: 0.8;
    }

    /* ── Main content ── */
    main {
      max-width: 780px;
      margin: 48px auto;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    /* Section card */
    .section {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 32px 36px;
    }
    .section h2 {
      font-size: 1.3rem;
      color: #7dd3fc;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section p {
      line-height: 1.8;
      color: #cbd5e1;
    }

    /* List */
    ul.styled {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 4px;
    }
    ul.styled li {
      background: #0f172a;
      border: 1px solid #334155;
      border-left: 4px solid #6366f1;
      border-radius: 8px;
      padding: 12px 16px;
      color: #e2e8f0;
      transition: border-left-color 0.2s;
    }
    ul.styled li:hover { border-left-color: #38bdf8; }

    /* Footer */
    footer {
      text-align: center;
      padding: 32px;
      color: #475569;
      font-size: 0.85rem;
      border-top: 1px solid #1e293b;
    }
  </style>
</head>
<body>

  <!-- Header with Title -->
  <header>
    <h1>🚀 Full-Stack Node + Express Lab</h1>
    <p>Task 4 — Simple HTML Page Renderer | Lab 10</p>
  </header>

  <main>

    <!-- About Section -->
    <div class="section">
      <h2>📝 About This Page</h2>
      <p>
        This page is served entirely by an <strong>Express.js</strong> server using Node.js.
        No template engine is used — the full HTML is written directly inside the
        <code>res.send()</code> method of the <strong>GET /</strong> route.
        This demonstrates how Express can render rich HTML content from a single route handler.
      </p>
    </div>

    <!-- Topics List -->
    <div class="section">
      <h2>📚 Topics Covered in Lab 10</h2>
      <ul class="styled">
        <li>✅ Task 1 — Student List Display (GET route + HTML list)</li>
        <li>✅ Task 2 — Message Routes System (/home, /about, /contact)</li>
        <li>✅ Task 3 — Dynamic User Page (/user/:name parameter)</li>
        <li>✅ Task 4 — Full HTML Page Renderer (this page!)</li>
      </ul>
    </div>

    <!-- Tech Stack Section -->
    <div class="section">
      <h2>⚙️ Tech Stack</h2>
      <ul class="styled">
        <li>🟢 <strong>Runtime:</strong> Node.js</li>
        <li>🚂 <strong>Framework:</strong> Express.js</li>
        <li>🌐 <strong>Output:</strong> HTML rendered directly in browser</li>
        <li>🗃️ <strong>Storage:</strong> In-memory arrays (no database)</li>
      </ul>
    </div>

  </main>

  <footer>
    Lab 10 &mdash; Full-Stack Node + Express Lab &copy; 2026
  </footer>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Task 4 server running → http://localhost:${PORT}`);
});
