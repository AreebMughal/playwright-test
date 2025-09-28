import { test, expect } from '@playwright/test';
// test.use({
//   launchOptions: {
//     args: ['--start-maximized']
//   },
//   viewport: null   // disables fixed 1280x720 and uses full screen
// });

test('Login Test', async ({ page }) => {
  // Navigate to login page
  
  await page.goto('https://dev-app-v2.monitairhealth.com/login', { timeout: 600000 });

  // Enter username
  const username = page.locator('input[placeholder="Username *"]');
  await username.clear();
  await username.fill('meer');

  // Enter password
  const password = page.locator('input[placeholder="Password *"]');
  await password.clear();
  await password.fill('Test123$');

  // Click login button
  await page.click('button:has-text("Login")');
  console.log('Helllloooo');

  //a[contains(@href, '/patients')][1]

  await expect(page).toHaveURL(/.*dashboard/);  // ✅ safer
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible(); // ✅ unambiguous
  console.log('Helllloooo');
  
  await page.locator('//a[contains(@href, "/patients")][1]').click();
  console.log('patients');

});
