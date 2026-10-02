import fs from 'fs';
import path from 'path';
import https from 'https';

const fontDir = path.resolve('public/fonts');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

const fonts = [
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff2',
    filename: 'Inter-Regular.woff2'
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff2',
    filename: 'Inter-SemiBold.woff2'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  for (const font of fonts) {
    const dest = path.join(fontDir, font.filename);
    console.log(`Downloading ${font.filename}...`);
    try {
      await download(font.url, dest);
      console.log(`Saved ${font.filename}`);
    } catch (err) {
      console.error(`Error downloading ${font.filename}:`, err);
    }
  }
}

main();
