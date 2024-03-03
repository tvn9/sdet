const { expect } = require('@playwright/test');

exports.ProgressBarPage = class ProgressBarPage {
   constructor(page) {
      this.page = page
      this.progressBarUrl = page.goto("/progressbar")

      this.startButtn = page.locator('#startButton')
      this.stopButton = page.locator('#stopButton')
      this.progressBar = page.locator('#progressBar')
   }

   async gotoProgressBarPage() {
      await this.progressBarUrl
   }

   async clickStartButton() {
      await this.startButtn.click()
   }

   async clickStopButon() {
      await this.stopButton.click()
   }

   async expectedStartValue(text) {
      await this.progressBar.innerText(text)
   }

   async readProgressBarValue() {
      return await this.progressBar.innerText()
   }
}