import { test, expect } from '@playwright/test';

const base = process.env.JYC_BASE_URL || 'http://127.0.0.1:5173';
const routes = ['/', '/about', '/clubs', '/events', '/gallery', '/team', '/planner', '/map', '/my-jyc', '/contact', '/fests', '/guide'];

test('public app mounts with no runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
  page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).toBeAttached();
  await expect(page).toHaveTitle(/JYC|JIIT YOUTH CLUB/i);
  await expect(page.locator('#root')).not.toBeEmpty();
  expect(errors).toEqual([]);
});

for (const route of routes) {
  test(`route ${route} loads without a runtime error`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    await page.goto(base + route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#root')).toBeAttached();
    await expect(page.locator('#root')).not.toBeEmpty();
    await expect(page.locator('body')).toBeVisible();
    expect(errors, `runtime errors on ${route}`).toEqual([]);
  });
}
