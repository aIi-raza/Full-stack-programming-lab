// Task 1: Student List Display (GET Only)
// Run: node server.js  |  Visit: http://localhost:3001

const express = require('express');
const app = express();
const PORT = 3001;

// Student data stored in an array
const students = [
  { id: 1, name: 'Ali Hassan',    roll: 'F22-001' },
  { id: 2, name: 'Sara Khan',     roll: 'F22-002' },
  { id: 3, name: 'Bilal Ahmed',   roll: 'F22-003' },
  { id: 4, name: 'Ayesha Malik',  roll: 'F22-004' },
  { id: 5, name: 'Usman Tariq',   roll: 'F22-005' },
];

// GET route — renders student list as HTML
app.get('/', (req, res) => {
  const listItems = students
    .map(s => `<li><strong>${s.name}</strong> — Roll No: ${s.roll}</li>`)
    .join('\n        ');

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Task 1 – Student List</title>
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
      border-radius: 16px;
      padding: 40px 48px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }
    h1 {
      font-size: 1.8rem;
      margin-bottom: 8px;
      color: #38bdf8;
    }
    p.subtitle {
      font-size: 0.9rem;
      color: #94a3b8;
      margin-bottom: 28px;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    li {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 10px;
      padding: 14px 18px;
      transition: border-color 0.2s;
    }
    li:hover { border-color: #38bdf8; }
    li strong { color: #7dd3fc; }
    .badge {
      display: inline-block;
      background: #0ea5e9;
      color: #fff;
      font-size: 0.7rem;
      border-radius: 999px;
      padding: 2px 10px;
      margin-left: 8px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>📋 Student List</h1>
    <p class="subtitle">Task 1 — Lab 10 | Full-Stack Node + Express</p>
    <ul>
        ${listItems}
    </ul>
  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Task 1 server running → http://localhost:${PORT}`);
});
