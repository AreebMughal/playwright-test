import { test, expect } from '@playwright/test';

test('Playwright site has correct title', async ({ page }) => {
  try {
    console.log('🔍 Navigating to Playwright website...');
    await page.goto('https://playwright.dev/');

    console.log('✅ Checking page title...');
    await expect(page).toHaveTitle(/Playwright/);
    console.log('✔️ Title verified successfully');

    console.log("🔍 Looking for 'Get started' link...");
    const getStarted = page.getByText('Get started', { exact: true });
    await expect(getStarted).toBeVisible();
    console.log("✔️ 'Get started' link is visible ✅");
  } catch (error) {
    console.error('❌ Test failed with error:', error);
    throw error; // re-throw so Playwright still marks test as failed
  }
});
