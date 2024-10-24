const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://developer.dji.com/doc/mobile-sdk-tutorial/en/', { waitUntil: 'networkidle2' });
  const updateDate = await page.$eval('.update-date', el => el.innerText);
  const fs = require('fs');
  fs.writeFileSync('current-release-date.txt', updateDate);
  await browser.close();
})();