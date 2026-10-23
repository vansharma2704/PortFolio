import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";

const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const page = await context.newPage();
const errors = [];
page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
page.on("pageerror", error => errors.push(error.message));
await page.goto("http://127.0.0.1:3000/work/field-notes", { waitUntil: "networkidle" });
const axe = await new AxeBuilder({ page }).analyze();
const performance = await page.evaluate(() => {
  const navigation = performance.getEntriesByType("navigation")[0];
  const resources = performance.getEntriesByType("resource");
  return {
    domContentLoaded: Math.round(navigation.domContentLoadedEventEnd),
    load: Math.round(navigation.loadEventEnd),
    transferredKb: Math.round(resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0) / 1024),
    resources: resources.length,
  };
});
console.log(JSON.stringify({ errors, violations: axe.violations.map(item => item.id), performance }, null, 2));
await browser.close();
