const { expect } = require('@playwright/test');
exports.SampleAppPage = class SampleAppPage {
   constructor(page) {
      this.page = page
      this.userNameField = page.getByPlaceholder('User Name')
      this.passwordField = page.getByPlaceholder('********')
      this.loginButton = page.getByRole('button', { name: 'Log In' })
      this.logoutButton = page.getByRole('button', { name: 'Log Out' })
      this.loginText = page.locator("#loginstatus")
      this.logoutText = page.locator("#loginstatus")
      this.wrongPasswordText = page.locator("#loginstatus")
      this.noUserNameText = page.locator("#loginstatus")
   }

   async navigateToSampleApp() {
      await this.page.goto('http://www.uitestingplayground.com/sampleapp')
   }

   async fillUsernameField(username) {
      await this.userNameField.fill(username)
   }

   async fillPasswordField(password) {
      await this.passwordField.fill(password)
   }

   async clickLoginButton() {
      await this.loginButton.click()
   }

   async clickLogoutButton() {
      await this.logoutButton.click()

   }

   async expectedLoginTextToBe(text) {
      await expect(this.loginText).toHaveText(text)
   }

   async expectedLogoutTextToBe(text) {
      await expect(this.logoutText).toHaveText(text)
   }

   async expectedWrongPasswordTextToBe(text) {
      await expect(this.wrongPasswordText).toHaveText(text)
   }

   async expectedNoUserNameTextToBe(text) {
      await expect(this.noUserNameText).toHaveText(text)
   }
}