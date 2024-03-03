import { chromium } from "@playwright/test";

// Async
(async () => {
   // Creating the browser instance
   const browser = await chromium.launch({
      headless: false

   })
   // Browser instance
   const browserIntance = await browser.newContext();

   // Page
   const page = await browserIntance.newPage();

   // perform actions on the page
   await page.goto("http://www.google.com");

   await browser.close()

})();