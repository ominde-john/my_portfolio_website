# my_portfolio

A cybersecurity-themed personal portfolio site — hacker terminal aesthetic, typing hero section, certifications, skills grid, and project showcase.

Built with **React**, **Vite**, and **Tailwind CSS**.

## Structure

```
.
├── index.html
├── src/
│   ├── main.jsx           # React entry point
│   ├── index.css          # Tailwind directives
│   ├── App.jsx            # Composes all sections
│   ├── hooks/
│   │   └── useTypewriter.js
│   └── components/
│       ├── Background.jsx  # CRT overlay + grid background
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Deploying to GitHub Pages

1. Install the Pages helper: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Set `base: '/my_portfolio_website/'` in `vite.config.js`.
4. Run `npm run deploy`.
