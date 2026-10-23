import { chromium } from "playwright-core";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";

const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", args: ["--use-angle=swiftshader", "--enable-webgl"] });
const routes = ["/", "/work/arc-finance", "/work/northstar-ai", "/work/field-notes", "/work/nexus-cloud", "/work/relay-os"];
const viewports = [{ name: "desktop", width: 1440, height: 1000 }, { name: "tablet", width: 768, height: 1024 }, { name: "mobile", width: 390, height: 844 }];
const report = [];
await fs.mkdir("qa/screenshots", { recursive: true });

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport, reducedMotion: "reduce", colorScheme: "dark" });
  for (const route of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on("console", msg => { if (msg.type() === "error") errors.push(`console: ${msg.text()}`); });
    page.on("pageerror", error => errors.push(`page: ${error.message}`));
    await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(300);
    const layout = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, height: document.documentElement.scrollHeight, h1: document.querySelectorAll("h1").length, title: document.title }));
    const axe = await new AxeBuilder({ page }).analyze();
    const slug = route === "/" ? "home" : route.split("/").pop();
    await page.screenshot({ path: `qa/screenshots/${slug}-${viewport.name}.png`, fullPage: true, animations: "disabled" });
    report.push({ route, viewport: viewport.name, layout, overflow: layout.scrollWidth - layout.clientWidth, errors, violations: axe.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help, targets: v.nodes.map(node => ({ target: node.target, html: node.html, summary: node.failureSummary })) })) });
    await page.close();
  }
  await context.close();
}

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const page = await mobile.newPage();
await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Open menu" }).click();
const menuVisible = await page.getByRole("navigation", { name: "Mobile navigation" }).isVisible();
await page.keyboard.press("Escape");
await page.waitForTimeout(700);
const menuAfterEscape = await page.getByRole("navigation", { name: "Mobile navigation" }).count() ? await page.getByRole("navigation", { name: "Mobile navigation" }).isVisible() : false;
report.push({ interaction: "mobile-menu", menuVisible, closesOnEscape: !menuAfterEscape });
await mobile.close();
await browser.close();
await fs.writeFile("qa/report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
