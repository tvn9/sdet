import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

const { TextInputPage } = require('../pages/sample-input.page');
const btnText = "Thanh's Button"
test('changeButtonText', async ({ page }) => {
   const textInputPage = new TextInputPage(page)

   await textInputPage.navigateToSampleTextInputApp() // go to the test app page
   await textInputPage.fillTextInputField(btnText) // fill in the text
   await textInputPage.clickNewTextButton() // click the button
   await textInputPage.expectedNewButtonText(btnText) // compare the value
});