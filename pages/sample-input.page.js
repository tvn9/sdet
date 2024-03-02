const { expect } = require('@playwright/test');

exports.TextInputPage = class TextInputPage {
   constructor(page) {
      this.page = page
      this.inputTextField = page.locator('#newButtonName')
      this.newTextButton = page.locator('#updatingButton')
   }

   async navigateToSampleTextInputApp() {
      await this.page.goto('http://uitestingplayground.com/textinput')
   }

   async fillTextInputField(newbuttontext) {
      await this.inputTextField.fill(newbuttontext)
   }

   async clickNewTextButton() {
      await this.newTextButton.click()
   }

   async expectedNewButtonText(text) {
      await expect(this.newTextButton).toHaveText(text)
   }
}