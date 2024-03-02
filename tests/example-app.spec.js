// @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

const { SampleAppPage } = require('../pages/sample-app.page');

test('Log in success', async ({ page }) => {
	const sampleAppPage = new SampleAppPage(page)

	await sampleAppPage.navigateToSampleApp()
	await sampleAppPage.fillUsernameField("Thanh")
	await sampleAppPage.fillPasswordField('pwd')
	await sampleAppPage.clickLoginButton()
	await sampleAppPage.expectedLoginTextToBe("Welcome, Thanh!")
});

test('Wrong password test', async ({ page }) => {
	const sampleAppPage = new SampleAppPage(page)

	await sampleAppPage.navigateToSampleApp()
	await sampleAppPage.fillUsernameField("Thanh")
	await sampleAppPage.fillPasswordField('wrong')
	await sampleAppPage.clickLoginButton()
	await sampleAppPage.expectedWrongPasswordTextToBe("Invalid username/password")

});

test('No usename test', async ({ page }) => {
	const sampleAppPage = new SampleAppPage(page)

	await sampleAppPage.navigateToSampleApp()
	await sampleAppPage.fillUsernameField("")
	await sampleAppPage.fillPasswordField('pwd')
	await sampleAppPage.clickLoginButton()
	await sampleAppPage.expectedNoUserNameTextToBe("Invalid username/password")
});

test('Log out test', async ({ page }) => {
	const sampleAppPage = new SampleAppPage(page)

	await sampleAppPage.navigateToSampleApp()
	await sampleAppPage.fillUsernameField("Thanh")
	await sampleAppPage.fillPasswordField('pwd')
	await sampleAppPage.clickLoginButton()
	await sampleAppPage.expectedLoginTextToBe("Welcome, Thanh!")
	await sampleAppPage.clickLogoutButton()
	await sampleAppPage.expectedLogoutTextToBe("User logged out.")

});