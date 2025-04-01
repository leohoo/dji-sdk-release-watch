const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://developer.dji.com/doc/mobile-sdk-tutorial/en/', { waitUntil: 'networkidle2' });
  const updateDate = await page.$eval('.update-date', el => el.innerText);
  const h2 = await page.$eval('h2', el => el.innerText);
  const version = h2.match(/[Vv]\d+\.\d+\.\d+/)[0];
  console.log(version, updateDate);
  const fs = require('fs');
  fs.writeFileSync('current-version.txt', version);
  await browser.close();
})();