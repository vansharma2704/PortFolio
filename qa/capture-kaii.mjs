import { chromium } from "playwright-core";

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await page.goto("https://kaii-career-mentor.vercel.app/", { waitUntil: "networkidle", timeout: 60000 });
await page.screenshot({ path: "public/images/kaii-career-mentor-live.png", fullPage: false, animations: "disabled" });
await browser.close();
