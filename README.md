# Stitch: Private Video Editor — Marketing Site

This is the official, high-performance, dark-mode marketing website for **Stitch: Private Video Editor**, accessible at [https://stitch.gloryolaifa.xyz](https://stitch.gloryolaifa.xyz).

Built strictly to match the privacy principles of the app itself:
- **Zero Client JavaScript** (except native HTML `<details>/<summary>` for accordions).
- **Self-Hosted Inter Fonts** (no external Google Fonts requests).
- **Zero Third-Party Tracking / Cookies / Analytics**.
- **Static HTML Output** compiled via Astro.
- **Google AdMob `app-ads.txt` Verification** included at `/app-ads.txt`.

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

## 📲 Google AdMob Verification (`app-ads.txt`)

The file [`public/app-ads.txt`](file:///Users/user/Documents/vibecode/stitchweb/public/app-ads.txt) is configured with your AdMob publisher verification line:
```text
google.com, pub-3925626843029360, DIRECT, f08c47fec0942fa0
```
When deployed, it will be accessible at:
👉 **`https://stitch.gloryolaifa.xyz/app-ads.txt`**

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
- `appStoreUrl`: Set to your live App Store URL.
- `googlePlayUrl`: Set to your live Google Play Store URL.
- `appId`: Set to your numerical App Store ID for the Apple Smart App Banner meta tag.
- `supportEmail`: Set to your official developer support email (`gloryolaifa@gmail.com`).
