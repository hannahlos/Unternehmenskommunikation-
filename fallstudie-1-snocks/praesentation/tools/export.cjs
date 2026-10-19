// Screenshots jeder Folie und PDF-Export der Präsentation mit Playwright (Chromium).
//
//   NODE_PATH=$(npm root -g) node tools/export.cjs screenshots [ordner]   → PNG je Folie (Endzustand)
//   NODE_PATH=$(npm root -g) node tools/export.cjs pdf [datei.pdf]        → PDF (1 Seite je Folie)
//
// Voraussetzung: npm i -g playwright (bzw. vorinstalliert) und ein Chromium von Playwright.
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const URL = "file://" + path.join(ROOT, "index.html");

async function main() {
  const [modus = "screenshots", ziel] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  const fehler = [];
  page.on("pageerror", e => fehler.push(e.message));
  page.on("console", m => { if (m.type() === "error") fehler.push(m.text()); });

  if (modus === "pdf") {
    const datei = path.resolve(ziel || path.join(ROOT, "..", "export", "SNOCKS-Fallstudie1.pdf"));
    fs.mkdirSync(path.dirname(datei), { recursive: true });
    await page.goto(URL + "?print-pdf", { waitUntil: "load" });
    await page.waitForFunction(() => window.Reveal && Reveal.isReady());
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);
    await page.pdf({ path: datei, width: "1280px", height: "720px", printBackground: true, preferCSSPageSize: true });
    console.log("PDF:", datei);
  } else {
    const ordner = path.resolve(ziel || path.join(ROOT, "screenshots"));
    fs.mkdirSync(ordner, { recursive: true });
    await page.goto(URL + "?static", { waitUntil: "load" });
    await page.waitForFunction(() => window.Reveal && Reveal.isReady());
    await page.evaluate(() => document.fonts.ready);
    const n = await page.evaluate(() => Reveal.getTotalSlides());
    for (let i = 0; i < n; i++) {
      await page.evaluate(i => { Reveal.slide(i, 0, 99); }, i);
      await page.waitForTimeout(450);
      const datei = path.join(ordner, `folie-${String(i + 1).padStart(2, "0")}.png`);
      await page.screenshot({ path: datei });
    }
    console.log(`${n} Screenshots:`, ordner);
  }
  if (fehler.length) { console.error("Fehler im Browser:\n- " + fehler.join("\n- ")); process.exitCode = 1; }
  await browser.close();
}
main();
