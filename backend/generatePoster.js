const puppeteer = require("puppeteer");

async function generatePoster(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 300 DPI za A2 (4961x7016)
  await page.setViewport({ width: 4961, height: 7016 });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.screenshot({ path: outputPath });
  await browser.close();
}

module.exports = { generatePoster };
