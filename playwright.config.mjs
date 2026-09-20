import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './scripts',
  timeout: 30000,
  expect: { timeout: 7000 },
  reporter: [['line']],
  use: {
    baseURL: process.env.JYC_BASE_URL || 'http://127.0.0.1:5173',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
});
