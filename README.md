# ThePeace.net — Real Estate Investing Website

A responsive multi-page website for **ThePeace.net**, a real estate investment firm established in 2021, headquartered in Arlington, Texas.

Built as a static HTML/CSS/JS site — no build step, no framework, no dependencies. Ready to deploy anywhere: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

## 🎨 Design

- **Color scheme:** Brown & gold (matching the ThePeace.net brand identity)
- **Typography:** Playfair Display (headings) + Inter (body), loaded from Google Fonts
- **Style:** Elegant, editorial, professional — designed to reflect institutional-grade credibility
- **Responsive:** Fluid layouts from 320px phones through 4K desktops
- **Accessible:** Keyboard navigation, focus states, reduced-motion support, semantic HTML

## 📄 Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, four pillars, featured services, CTA |
| `about.html` | Company story, philosophy, operations |
| `services.html` | All 10 service offerings + 4-step process |
| `why-us.html` | 8 competitive-advantage cards + numbers strip |
| `vision-mission.html` | Mission & Vision + 6 core values |
| `testimonials.html` | 9 client testimonials with names and roles |
| `contact.html` | Contact form + info card + embedded Google Map |

## 📁 Structure

```
thepeace-website/
├── index.html
├── about.html
├── services.html
├── why-us.html
├── vision-mission.html
├── testimonials.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── logo.png
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Quick Start

### Option 1 — Open directly in a browser
```bash
# Clone or download, then just open:
open index.html
```

### Option 2 — Serve locally (recommended for the contact form / map)
```bash
# Python 3
python3 -m http.server 8000

# Node.js (with npx)
npx serve .

# Then visit http://localhost:8000
```

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `thepeace-website`).
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — ThePeace.net website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/thepeace-website.git
   git push -u origin main
   ```
3. In your repo settings → **Pages** → set source to `main` branch, root folder.
4. Site will be live at `https://YOUR_USERNAME.github.io/thepeace-website/` within a minute or two.

For a custom domain (e.g. `thepeace.net`), add a `CNAME` file with your domain and configure DNS.

## 🌐 Deploy to Netlify / Vercel / Cloudflare Pages

Drag-and-drop the folder into their dashboard, or connect the GitHub repo. No build command required — it's a static site.

## 🗺️ Contact Map

The contact page (`contact.html`) embeds a Google Maps iframe pointing to:
> **1001 Redleaf Drive, Arlington, TX**

The iframe uses Google's public embed URL — no API key required. If you'd prefer the newer Google Maps Embed API with more customization, replace the `<iframe src>` in `contact.html` with an API-keyed URL.

## 📱 Device Testing

Verified layouts at these breakpoints:
- **Mobile:** 320px – 640px (iPhone SE through iPhone Pro Max, Android)
- **Tablet:** 641px – 960px (iPad, Android tablets, portrait & landscape)
- **Laptop:** 961px – 1440px
- **Desktop / 4K:** 1441px and beyond

Works on iOS Safari, Android Chrome, desktop Chrome, Edge, Firefox, and Safari.

## ✉️ Contact Form

Currently the form displays a client-side success confirmation only (see `js/main.js`). To wire it to a real inbox:

**Option A — Netlify Forms:** Add `netlify` attribute to the `<form>` tag. Netlify handles the backend automatically.

**Option B — Formspree / Basin / Getform:** Point the form's `action` attribute to your endpoint URL.

**Option C — Custom backend:** Replace the `fetch` simulation in `main.js` with a real POST to your API.

## 📝 Customization

- **Colors:** Edit CSS variables at the top of `css/style.css` under `:root`.
- **Fonts:** Update the Google Fonts `<link>` in every HTML `<head>` and the `--font-*` variables in CSS.
- **Content:** All text lives directly in the HTML files — plain-English editing, no templating.
- **Logo:** Replace `images/logo.png` with your own (keep the filename or update the `<img src>` in each page).

## 📜 License

MIT License — see `LICENSE` file. Logo and brand assets are property of ThePeace.net.

---

**ThePeace.net** · Building peace of mind, one property at a time.
