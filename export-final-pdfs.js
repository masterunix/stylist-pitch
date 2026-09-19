const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = '/Users/vatsalgoyal/desktop/canvas/sim';
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

async function exportDesktopPDF() {
  console.log(`Generating Desktop 16:9 Presentation PDF from ${BASE_URL}...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 2 });
  
  await page.goto(`${BASE_URL}/deck`, { waitUntil: 'networkidle0', timeout: 30000 });

  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await new Promise(r => setTimeout(r, 1500));

  const destPath = path.join(OUTPUT_DIR, 'Simona_x_Muskan_Pitch_Desktop.pdf');
  await page.pdf({
    path: destPath,
    printBackground: true,
    width: '1440px',
    height: '810px',
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    preferCSSPageSize: true
  });

  console.log('Saved Desktop PDF:', destPath);
  await browser.close();
}

async function exportMobilePDF() {
  console.log(`Generating Mobile Presentation PDF from ${BASE_URL}...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 430, height: 844, deviceScaleFactor: 2, isMobile: true });
  
  await page.goto(`${BASE_URL}/deck?mode=mobile`, { waitUntil: 'networkidle0', timeout: 30000 });

  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await new Promise(r => setTimeout(r, 1500));

  const destPath = path.join(OUTPUT_DIR, 'Simona_x_Muskan_Pitch_Mobile.pdf');
  await page.pdf({
    path: destPath,
    printBackground: true,
    width: '430px',
    height: '844px',
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    preferCSSPageSize: true
  });

  console.log('Saved Mobile PDF:', destPath);
  await browser.close();
}

(async () => {
  try {
    await exportDesktopPDF();
    await exportMobilePDF();
    console.log('ALL PDFS EXPORTED SUCCESSFULLY!');
  } catch (err) {
    console.error('Error exporting PDFs:', err);
    process.exit(1);
  }
})();
