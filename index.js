const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: false }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://www.finishline.com/store/product/mens-nike-air-max-90-casual-shoes/prod772616?styleId=DR0145&colorId=002')
  await page.waitForTimeout(5000)
  await page.click('.sizeOptions[data-size="11.0"]')
  // await page.screenshot({ path: 'testresult.png', fullPage: true })
  // await browser.close()
  // console.log(`All done, check the screenshot. ✨`)
})
