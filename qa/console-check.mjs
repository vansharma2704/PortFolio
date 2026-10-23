import { chromium } from "playwright-core";

const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", args: ["--use-angle=swiftshader", "--enable-webgl"] });
const routes = ["/", "/work/arc-finance", "/work/northstar-ai", "/work/field-notes", "/work/nexus-cloud", "/work/relay-os"];
const results = [];

for (const viewport of [{ name: "desktop", width: 1440, height: 1000 }, { name: "mobile", width: 390, height: 844 }]) {
  const context = await browser.newContext({ viewport });
  for (const route of routes) {
    const page = await context.newPage();
    const messages = [];
    page.on("console", message => {
      if (["error", "warning"].includes(message.type())) messages.push(`${message.type()}: ${message.text()}`);
    });
    page.on("pageerror", error => messages.push(`pageerror: ${error.message}`));
    page.on("requestfailed", request => messages.push(`requestfailed: ${request.url()} — ${request.failure()?.errorText}`));
    const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(route === "/" ? 1500 : 250);
    results.push({ route, viewport: viewport.name, status: response?.status(), messages: [...new Set(messages)] });
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
