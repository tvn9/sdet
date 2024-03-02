const { expect } = require('@playwright/test');

exports.TextInputPage = class TextInputPage {
   constructor(page) {
      this.page = page
      this.setButtonTextField = page.getByPlaceholder('MyButton')
      this.currentTextButton = page.getByRole('button', { name: 'Button That Should Change it\'s Name Based on Input Value' })
      this.newTextButton = page.locator('#updatingButton')
   }

   async navigateToSampleTextInputApp() {
      await this.page.goto('http://uitestingplayground.com/textinput')
   }

   async fillTextInputField(newbuttontext) {
      await this.setButtonTextField.fill(newbuttontext)
   }

   async clickNewTextButton() {
      await this.newTextButton.click()
   }

   async expectedNewButtonText(text) {
      await expect(this.newTextButton).toHaveText(text)
   }
}