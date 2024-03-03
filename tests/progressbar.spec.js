const { test } = require('@playwright/test');

const { ProgressBarPage } = require("../pages/progressbar-page");

test('Progress Bar Test', async ({ page }) => {
   const progressBarPage = new ProgressBarPage(page)

   await progressBarPage.gotoProgressBarPage()

   const startValue = await progressBarPage.readProgressBarValue()
   console.log(`Start Value ${startValue}`)
   await progressBarPage.expectedStartValue("25%")

   console.log("Start reading value")
   await progressBarPage.clickStartButton()
   while (await progressBarPage.readProgressBarValue() != "75%") {
      console.log(`Current Progress Value ${await progressBarPage.readProgressBarValue()}`);
   }
   await progressBarPage.clickStopButon()
   await progressBarPage.expectedStartValue("75%")

});