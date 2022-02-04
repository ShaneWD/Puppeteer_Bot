const puppeteer = require('puppeteer-extra')
// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

var bot = async function() {
  const browser = await puppeteer.launch({headless: false, slowMo: 200});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  await page.goto('https://www.nike.com/launch/t/space-hippie-01-this-is-trash-carbon-green');
  // await page.screenshot({ path: 'hPage.png' });

  await browser.close();
}();