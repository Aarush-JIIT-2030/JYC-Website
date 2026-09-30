import { test, expect } from '@playwright/test';

const base = process.env.JYC_BASE_URL || 'http://127.0.0.1:5173';
const routes = ['/', '/about', '/clubs', '/events', '/gallery', '/team', '/planner', '/map', '/my-jyc', '/contact', '/fests', '/guide'];

test('public app mounts and has a meaningful document title', async ({ page }) => {
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).toBeAttached();
  await expect(page).toHaveTitle(/JYC|JIIT YOUTH CLUB/i);
  await expect(page.locator('#root')).not.toBeEmpty();
});

for (const route of routes) {
  test(`route ${route} loads without a blank app shell`, async ({ page }) => {
    await page.goto(base + route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#root')).toBeAttached();
    await expect(page.locator('#root')).not.toBeEmpty();
    await expect(page.locator('body')).toBeVisible();
  });
}
