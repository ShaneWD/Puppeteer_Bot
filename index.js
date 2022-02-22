const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


puppeteer.launch({ headless: false }).then(async browser => {
  console.log('Running...')
  const page = await browser.newPage()
  await page.goto('https://www.finishline.com/store/product/mens-nike-air-max-90-casual-shoes/prod772616?styleId=DR0145&colorId=002')
  await page.waitForTimeout(5000)
})