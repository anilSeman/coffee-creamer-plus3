# Coffee Creamer Plus — Landing Page

A pixel-close Next.js + Tailwind CSS landing page for Coffee Creamer Plus.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets

Place the following files in the `public/images/` folder:

| File | Description |
|------|-------------|
| `public/images/logo.png` | Brand logo (Coffee Creamer Plus) |
| `public/images/product-pouch.png` | Double gusset product pouch image |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
coffee-creamer-plus/
├── app/
│   ├── globals.css        # Tailwind + custom CSS, Google Fonts
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Header.tsx         # Sticky nav with mobile hamburger
│   ├── Hero.tsx           # Full-height hero with product image
│   ├── FeatureStrip.tsx   # White strip — 4 key features
│   ├── Benefits.tsx       # "Why Choose Coffee Plus?" 4-card grid
│   ├── ProductFeatures.tsx # Product image + bullet points
│   ├── Technology.tsx     # Science / process infographic
│   ├── Wholesale.tsx      # Dark navy B2B section
│   └── FooterCTA.tsx      # CTA footer with gold curves
├── public/
│   └── images/            # ← Place logo.png and product-pouch.png here
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Brand Colors

| Name | Hex |
|------|-----|
| Deep Navy | `#061A45` |
| Dark Blue | `#082B6F` |
| Gold | `#D99A22` |
| Cream | `#F7EFE2` |
| Cream Medium | `#EFE1C8` |
| Coffee Brown | `#6B3F1D` |

## Notes

- Fully responsive: desktop, tablet, mobile
- Mobile nav: hamburger menu with full-screen overlay
- Google Fonts: Playfair Display (display) + Inter (body)
- No external UI libraries — pure Tailwind CSS
- Lucide-react used only in Header (Menu/X icons)
