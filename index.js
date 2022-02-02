const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/ShaneWD');
  await page.screenshot({ path: 'hPage.png' });

  await browser.close();
})();