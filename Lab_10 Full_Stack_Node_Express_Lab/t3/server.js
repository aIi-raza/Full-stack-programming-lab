// Task 3: Dynamic User Page
// Run: node server.js  |  Visit: http://localhost:3003/user/Ali

const express = require('express');
const app = express();
const PORT = 3003;

// Dynamic route with URL parameter :name
app.get('/user/:name', (req, res) => {
  const name = req.params.name;

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hello ${name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 20px;
      padding: 56px 64px;
      text-align: center;
      box-shadow: 0 24px 64px rgba(0,0,0,0.5);
      max-width: 480px;
      width: 90%;
    }
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      margin: 0 auto 28px;
      box-shadow: 0 8px 32px rgba(99,102,241,0.4);
    }
    h1 {
      font-size: 2.2rem;
      color: #a78bfa;
      margin-bottom: 12px;
    }
    h1 span { color: #fff; }
    p {
      color: #94a3b8;
      font-size: 0.95rem;
      margin-bottom: 28px;
    }
    .try-box {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 14px 20px;
      font-size: 0.85rem;
      color: #64748b;
    }
    .try-box code {
      color: #38bdf8;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="avatar">👤</div>
    <h1>Hello, <span>${name}</span>!</h1>
    <p>Task 3 — Lab 10 | Dynamic User Route with Express</p>
    <div class="try-box">
      Try another user:
      <code>/user/Sara</code> &nbsp;|&nbsp;
      <code>/user/Bilal</code>
    </div>
  </div>
</body>
</html>
  `);
});

// Root redirect hint
app.get('/', (req, res) => {
  res.send(`
    <html><body style="font-family:sans-serif;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
      <div style="text-align:center;">
        <h2>Try: <a style="color:#38bdf8;" href="/user/Ali">/user/Ali</a></h2>
      </div>
    </body></html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Task 3 server running → http://localhost:${PORT}/user/Ali`);
});
