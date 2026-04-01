# React Web Application Migration (Lab 07)

This directory contains the modernized version of the `FullStackProgramming_Assignment_01` hot tub website, rewritten completely using React (Create React App).

## Features
- **React Router SPA**: Seamless navigation between Home, Category, Cart, Checkout, Auth, Contact, and Product Views without page reloads.
- **Component Based**: Repetitive UI markup such as Header, Footer, and Navbar are decoupled into reusable components.
- **Global State Cart**: React Context (`AppContext.js`) effortlessly ensures the cart item counter lives up to date everywhere.
- **Mock DB Persistence**: Translated jQuery's LocalStorage logic (`main.js` DB objects) into isolated `db.js` layer mimicking standard backend calls.
- **Identical Styling**: Successfully overrides standard bootstrap with the exact classes specified in Assignment 1.

## Getting Started
Ensure you have Node.js installed. In this directory (`Lab_07`), run the following commands:

1. Install project dependencies:
```sh
npm install
```

2. Spin up the local development server:
```sh
npm start
```

The application will launch on [http://localhost:3000](http://localhost:3000).

---
## Project Structure

```
├── public/                 # Static assets and index.html (containing CDNs)
│   └── assets/images/      # Screenshot images
├── src/                    # Source code files
│   ├── components/         # Reusable UI fragments
│   ├── pages/              # Main route views
│   ├── utils/              # Context & LocalStorage DB layer
│   └── App.js              # Application entry and routing point
└── package.json            # Node configurations and packages
```
