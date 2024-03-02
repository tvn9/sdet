import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

const { TextInputPage } = require('../pages/sample-input.page');
const btnText = "Thanh's Button"
test('changeButtonText', async ({ page }) => {
   const textInputPage = new TextInputPage(page)

   await textInputPage.navigateToSampleTextInputApp()
   await textInputPage.fillTextInputField(btnText)
   await textInputPage.clickNewTextButton()
   await textInputPage.expectedNewButtonText(btnText)
});