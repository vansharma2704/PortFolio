import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
});

const results = [];
for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle", timeout: 60000 });
  const layout = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    headings: document.querySelectorAll("h1, h2").length,
  }));
  const axe = await new AxeBuilder({ page }).analyze();
  await page.screenshot({ path: `qa/screenshots/redesign-${viewport.name}.png`, fullPage: true, animations: "disabled" });
  results.push({ viewport: viewport.name, layout, overflow: layout.scrollWidth - layout.clientWidth, errors, violations: axe.violations.map(({ id, impact }) => ({ id, impact })) });
  await page.close();
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
