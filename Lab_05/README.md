# Student Card App

A React app demonstrating **components and props** — Lab Task 1.

## Features
- `StudentCard` component with props: `name`, `rollNo`, `department`, `university`
- Displays 3 student cards using the same reusable component
- **Bonus:** `color` prop changes each card's background color

## Getting Started

```bash
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
student-card-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main app — renders 3 StudentCard components
│   ├── App.css         # App-level styles
│   ├── StudentCard.js  # Reusable StudentCard component
│   ├── StudentCard.css # Card styles
│   └── index.js        # React entry point
└── package.json
```
