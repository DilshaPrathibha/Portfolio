# 🌐 Dilsha Prathibha – Portfolio

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**, featuring interactive effects and a premium design aesthetic.

🔗 **Live Demo:** [https://dilshaprathibha.github.io/Portfolio](https://dilshaprathibha.github.io/Portfolio)

---

## ✨ Features

- **Split Hero Section** — text-left / image-right layout with blinking cursor caret and "Available for work" badge
- **Interactive Mouse Glow** — a violet radial gradient follows your cursor across the entire page
- **Active Nav Highlighting** — IntersectionObserver tracks the current section and animates an underline between nav items
- **Redesigned Skills Section** — card-based grid with category icons and hover gradients
- **Project Category Filter** — filter by All, Web, Mobile, Data, Desktop, Game, Frontend
- **Modern Contact Form** — split layout with contact info card + Formspree-powered form with status feedback
- **Scroll-to-Top Button** — floating button appears after scrolling, with smooth animation
- **Consistent Section Headers** — uppercase subtitle + gradient accent heading + underline across all sections
- **Dark/Light Mode** — system-aware with manual toggle
- **SEO & Social** — OG meta tags, Twitter Cards, branded `</>` SVG favicon
- **Accessibility** — `aria-label`s on icon-only links, semantic HTML, lazy-loaded images
- **Smooth Animations** — entrance, hover, and scroll animations via Framer Motion
- **Responsive** — fully mobile-friendly across all breakpoints

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Core** | React 19, Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Forms** | Formspree |
| **Deployment** | GitHub Pages (gh-pages) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with active section highlighting
│   ├── Footer.jsx          # Footer with social links
│   ├── ScrollToTop.jsx     # Floating scroll-to-top button
│   └── SectionWrapper.jsx  # Reusable section container
├── sections/
│   ├── Hero.jsx            # Split hero with blinking cursor & stats
│   ├── About.jsx           # Bio section
│   ├── Skills.jsx          # Card-based skills grid
│   ├── Projects.jsx        # Filterable project cards
│   └── Contact.jsx         # Contact form + info card
├── data/
│   └── portfolioData.js    # All personal & project data
├── App.jsx                 # Root with global mouse glow
└── index.css               # Tailwind + custom animations
```

## 📬 Contact

- **Email:** dilshaprathibha@gmail.com
- **GitHub:** [DilshaPrathibha](https://github.com/DilshaPrathibha)
- **LinkedIn:** [dilshaprathibha](https://www.linkedin.com/in/dilshaprathibha)
- **Location:** Colombo, Sri Lanka
