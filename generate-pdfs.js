const puppeteer = require('puppeteer-core');
const path = require('path');

const LIVE_URL = 'https://stylist-pitch.vercel.app';
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = '/Users/vatsalgoyal/desktop/canvas/sim';

async function generateDesktopPDF() {
  console.log('Generating Desktop PDF...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Set desktop viewport 1600 x 900
  await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 2 });
  
  await page.goto(LIVE_URL, { waitUntil: 'networkidle2' });

  // Add custom styling for desktop PDF print
  await page.evaluate(() => {
    // 1. Remove navigation & website-specific UI
    const nav = document.querySelector('nav');
    if (nav) nav.remove();

    const mobileMenu = document.querySelector('[class*="fixed inset-0"]');
    if (mobileMenu) mobileMenu.remove();

    // Remove buttons like Next BTS, Back to Top, and scroll indicators
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent || '';
      if (text.includes('Next BTS') || text.includes('Back to Top')) {
        btn.remove();
      }
    });

    const scrollIndicator = document.querySelector('a[href="#story"]');
    if (scrollIndicator) scrollIndicator.remove();

    // 2. Add an editorial header badge on top of Hero linking to the live site
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const linkBadge = document.createElement('div');
      linkBadge.innerHTML = `
        <a href="https://stylist-pitch.vercel.app" target="_blank" style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: #B51A1A;
          color: white;
          border-radius: 9999px;
          font-family: system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(181, 26, 26, 0.35);
          margin-bottom: 16px;
        ">
          <span>✨ View Live Interactive Experience ➔ stylist-pitch.vercel.app</span>
        </a>
      `;
      linkBadge.style.textAlign = 'center';
      linkBadge.style.position = 'relative';
      linkBadge.style.zIndex = '50';
      heroSection.insertBefore(linkBadge, heroSection.firstChild);
    }

    // 3. Add link banner in footer as well
    const footer = document.querySelector('footer');
    if (footer) {
      const footerLink = document.createElement('div');
      footerLink.innerHTML = `
        <div style="text-align: center; margin-top: 24px;">
          <a href="https://stylist-pitch.vercel.app" target="_blank" style="
            display: inline-block;
            padding: 10px 24px;
            background: #1C1917;
            color: #FAF7F5;
            border-radius: 9999px;
            font-family: system-ui, sans-serif;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: 0.05em;
          ">
            🌐 Open Interactive Version at stylist-pitch.vercel.app
          </a>
        </div>
      `;
      footer.appendChild(footerLink);
    }

    // 4. Clean page breaks between major sections
    const sections = document.querySelectorAll('section, footer');
    sections.forEach((sec, idx) => {
      sec.style.breakInside = 'avoid';
      sec.style.pageBreakInside = 'avoid';
      if (idx < sections.length - 1) {
        sec.style.breakAfter = 'page';
        sec.style.pageBreakAfter = 'always';
      }
    });

    // Remove any animations that might hide elements
    document.querySelectorAll('*').forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
      if (el.style.opacity === '0') el.style.opacity = '1';
    });
  });

  // Small pause to let DOM settle
  await new Promise(r => setTimeout(r, 1000));

  const desktopPdfPath = path.join(OUTPUT_DIR, 'Simona_x_Muskan_Pitch_Desktop.pdf');
  await page.pdf({
    path: desktopPdfPath,
    printBackground: true,
    preferCSSPageSize: false,
    width: '1600px',
    height: '1100px',
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  console.log('Desktop PDF saved to:', desktopPdfPath);
  await browser.close();
}

async function generateMobilePDF() {
  console.log('Generating Mobile PDF...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // iPhone 14 Pro Max / mobile viewport 430 x 932
  await page.setViewport({ width: 430, height: 932, deviceScaleFactor: 2, isMobile: true });
  
  await page.goto(LIVE_URL, { waitUntil: 'networkidle2' });

  // Add custom styling for mobile PDF print
  await page.evaluate(() => {
    // 1. Remove navigation & website-specific UI
    const nav = document.querySelector('nav');
    if (nav) nav.remove();

    const mobileMenu = document.querySelector('[class*="fixed inset-0"]');
    if (mobileMenu) mobileMenu.remove();

    document.querySelectorAll('button').forEach(btn => {
      const text = btn.textContent || '';
      if (text.includes('Next BTS') || text.includes('Back to Top')) {
        btn.remove();
      }
    });

    const scrollIndicator = document.querySelector('a[href="#story"]');
    if (scrollIndicator) scrollIndicator.remove();

    // 2. Add link badge on top
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const linkBadge = document.createElement('div');
      linkBadge.innerHTML = `
        <a href="https://stylist-pitch.vercel.app" target="_blank" style="
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #B51A1A;
          color: white;
          border-radius: 9999px;
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(181, 26, 26, 0.35);
          margin-bottom: 12px;
        ">
          <span>✨ View Live Web Version ➔</span>
        </a>
      `;
      linkBadge.style.textAlign = 'center';
      linkBadge.style.position = 'relative';
      linkBadge.style.zIndex = '50';
      heroSection.insertBefore(linkBadge, heroSection.firstChild);
    }

    // 3. Add link in footer
    const footer = document.querySelector('footer');
    if (footer) {
      const footerLink = document.createElement('div');
      footerLink.innerHTML = `
        <div style="text-align: center; margin-top: 16px;">
          <a href="https://stylist-pitch.vercel.app" target="_blank" style="
            display: inline-block;
            padding: 8px 18px;
            background: #1C1917;
            color: #FAF7F5;
            border-radius: 9999px;
            font-family: system-ui, sans-serif;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
          ">
            🌐 Open Interactive Site at stylist-pitch.vercel.app
          </a>
        </div>
      `;
      footer.appendChild(footerLink);
    }

    // Remove any zero opacity from framer-motion that hasn't scrolled into view
    document.querySelectorAll('*').forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
      if (el.style.opacity === '0') el.style.opacity = '1';
    });
  });

  // Small pause to let DOM settle
  await new Promise(r => setTimeout(r, 1000));

  const mobilePdfPath = path.join(OUTPUT_DIR, 'Simona_x_Muskan_Pitch_Mobile.pdf');
  await page.pdf({
    path: mobilePdfPath,
    printBackground: true,
    preferCSSPageSize: false,
    width: '430px',
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  console.log('Mobile PDF saved to:', mobilePdfPath);
  await browser.close();
}

(async () => {
  await generateDesktopPDF();
  await generateMobilePDF();
  console.log('Both PDFs generated successfully!');
})();
