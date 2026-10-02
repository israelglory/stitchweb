# Stitch: Private Video Editor — Marketing Site

This is the official, high-performance, dark-mode marketing website for **Stitch: Private Video Editor**, accessible at [https://stitch.gloryolaifa.xyz](https://stitch.gloryolaifa.xyz).

Built strictly to match the privacy principles of the app itself:
- **Zero Client JavaScript** (except native HTML `<details>/<summary>` for accordions).
- **Self-Hosted Inter Fonts** (no external Google Fonts requests).
- **Zero Third-Party Tracking / Cookies / Analytics**.
- **Static HTML Output** compiled via Astro.

---

## 🚀 Quick Start & Local Development

### Requirements
- Node.js `^18.17.0`, `^20.0.0`, or `v22+`
- npm `v9+`

### Installation & Server
```bash
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev
```

### Static Production Build
```bash
# Build static production bundle into dist/
npm run build

# Preview static build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### 1. Cloudflare Pages (Recommended)

1. Connect your repository to **Cloudflare Pages** in the Cloudflare Dashboard.
2. Select **Framework Preset**: `Astro` (or `None`).
3. Set the build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: `20.x` or later (set `NODE_VERSION = 20` environment variable if needed).
4. Click **Save and Deploy**.

#### DNS CNAME Setup for `stitch.gloryolaifa.xyz` on Cloudflare:
1. In Cloudflare Pages, go to **Custom Domains** and add `stitch.gloryolaifa.xyz`.
2. Go to your DNS provider for `gloryolaifa.xyz` (or Cloudflare DNS):
   - **Type**: `CNAME`
   - **Name**: `stitch`
   - **Target**: `<your-project-name>.pages.dev`
   - **TTL**: Auto / 300s
   - **Proxy status**: Proxied (or DNS Only if using external host).

---

### 2. Vercel

1. Import the repository in **Vercel Dashboard**.
2. Framework Preset: **Astro** (auto-detected).
3. Build Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

#### DNS CNAME Setup on Vercel:
1. Under Vercel Project Settings > **Domains**, add `stitch.gloryolaifa.xyz`.
2. In your DNS manager for `gloryolaifa.xyz`:
   - **Type**: `CNAME`
   - **Name**: `stitch`
   - **Target**: `cname.vercel-dns.com`

---

## 🛠️ Configuration & Screenshot Replacement

### Updating App Store Links & Meta IDs
Open `src/data/site.ts` to update the placeholders before submitting your App Store build:
- `appStoreUrl`: Set to your live App Store URL (e.g. `https://apps.apple.com/app/stitch-private-video-editor/id123456789`).
- `appId`: Set to your numerical App Store ID for the Apple Smart App Banner meta tag.
- `supportEmail`: Set to your official developer support email (`gloryolaifa@gmail.com`).

### Replacing Wireframe Placeholders with Real Screenshots
To swap out the SVG wireframe placeholders for real app screenshots:
1. Save your app screenshots into `public/screenshots/`:
   - `hero-canvas.png` (Desktop landscape screenshot, e.g. `1200 × 800 px`)
   - `timeline-portrait.png` (iPhone portrait screenshot, `1170 × 2532 px`)
   - `transitions-portrait.png` (`1170 × 2532 px`)
   - `captions-portrait.png` (`1170 × 2532 px`)
   - `audio-portrait.png` (`1170 × 2532 px`)
   - `export-portrait.png` (`1170 × 2532 px`)
2. Pass the `src` attribute to `ScreenshotFrame` components in `src/pages/index.astro`.

---

## 🔍 Quality & Design Audit Checklist

- [x] **Zero Gradients**: Verified all colors use flat surface tokens (`#0B0B0C`, `#151517`, `#1E1E21`, `#2A2A2E`, `#4C8DFF`).
- [x] **Zero Em Dashes (`—`)**: Copy uses standard punctuation and hyphens.
- [x] **Zero Fluff Words**: Avoided terms like "Unleash", "Revolutionize", "Magic", "Supercharge".
- [x] **Zero Exclamation Marks**: Clean, authoritative, minimal tone throughout.
- [x] **Self-Hosted Fonts**: Inter 400 and 600 loaded from local `/fonts/` binaries.
- [x] **Zero Tracking**: No external scripts, no cookies, no third-party HTTP requests.
