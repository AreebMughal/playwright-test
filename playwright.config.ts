import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  use: {
    headless: false,
    viewport: null, // disables the fixed 1280x720 viewport
    video: 'retain-on-failure',
  },
  workers: 1,
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: ['--start-maximized'], // ✅ open browser maximized
        },
      },
    },
  ],
});
