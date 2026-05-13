# Rustik Plank - Next.js Landing Page

A pixel-perfect recreation of the Rustik Plank furniture e-commerce landing page built with Next.js 14 (App Router), React, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Google Fonts** (Open Sans + Oswald)
- **Lucide React** (icons)

## Project Structure

```
/app
  /components
    Navbar.js           - Top navigation bar with categories
    HeroSection.js      - Main hero slider section
    CollectionsSection.js - Chairs / Beds / Tables collection cards
    ProductCard.js      - Reusable product card component
    ProductsSection.js  - Featured / Special / Popular product columns
    HotDealsSection.js  - Hot deals with sale badges
    BuyOnlineBanner.js  - "Buy Online / Pick Up In Store" banner
    LatestUpdates.js    - Blog / latest updates section
    PartnersSection.js  - Partner brand logos
    Footer.js           - 4-column footer with links
  globals.css           - Global styles + Tailwind imports
  layout.js             - Root layout
  page.js               - Main page assembling all components
/public/assets          - Static assets folder
tailwind.config.js      - Tailwind configuration with brand colors
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Design Notes

- **Primary color**: `#E07B20` (brand orange)
- **Heading font**: Oswald (bold, uppercase)
- **Body font**: Open Sans
- All SVG illustrations are inline and reproduce the furniture shapes from the original design
- Fully responsive: mobile-first with Tailwind `sm`, `md`, `lg` breakpoints
