import { chromium } from "playwright-core";
const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", args: ["--use-angle=swiftshader", "--enable-webgl"] });
for (const viewport of [{name:"desktop",width:1440,height:1000},{name:"mobile",width:390,height:844}]) {
  const page = await browser.newPage({ viewport });
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  console.log(viewport.name, await page.title(), (await page.locator("body").innerText()).slice(0,120));
  const stage = page.locator(".welcome-stage");
  await stage.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await stage.screenshot({ path: `qa/screenshots/welcome-${viewport.name}.png`, animations: "disabled" });
  await page.close();
}
await browser.close();
