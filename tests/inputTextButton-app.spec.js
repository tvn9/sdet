import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

const { TextInputPage } = require('../pages/sample-input.page');

test('changeButtonText', async ({ page }) => {
   const textInputPage = new TextInputPage(page)

   await textInputPage.navigateToSampleTextInputApp()
   await textInputPage.fillTextInputField('Thanh\'s Button')
   await textInputPage.clickNewTextButton()
   await textInputPage.expectedNewButtonText('Thanh\'s Button')
});