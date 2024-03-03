const { test } = require('@playwright/test');
const { HomePage } = require('../pages/home-page');

test('Navigate to home page test', async ({ page }) => {
   const homePage = new HomePage(page)
   await homePage.navigateToHomePage()
});