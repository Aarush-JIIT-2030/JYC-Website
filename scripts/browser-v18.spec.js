import { test, expect } from '@playwright/test';
const base = process.env.JYC_BASE_URL || 'http://127.0.0.1:5173';

async function collectRuntimeErrors(page){
  const errors=[];
  page.on('pageerror', e=>errors.push(`pageerror: ${e}`));
  page.on('console', msg=>{ if(msg.type()==='error') errors.push(`console: ${msg.text()}`); });
  return errors;
}

test.describe('JYC V18.11 final public + control-center journey', () => {
  test('home has accessible identity and club-first navigation', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/JYC|JIIT YOUTH CLUB/i);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.getByRole('button', { name: /^Discover$/i })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /^Moments$/i })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /^Fests$/i })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /^Recruitment$/i })).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  test('Phoenix signature doors are present and clickable', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.bird-trio-section')).toBeVisible();
    await expect(page.locator('.bird-function-card')).toHaveCount(3);
    await expect(page.locator('.phoenix-particles .phoenix-particle')).toHaveCount(12);
    await expect(page.getByRole('button', { name: /Communities/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Experiences/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /People/i }).first()).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('custom cursor activates on precise pointer devices', async ({ page }) => {
    await page.setViewportSize({width:1440,height:900});
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.mouse.move(500,300);
    await expect.poll(async()=>page.locator('body').evaluate(el=>el.classList.contains('jyc-custom-cursor'))).toBe(true);
    await expect(page.locator('.jyc-cursor-dot')).toBeVisible();
    await expect(page.locator('.jyc-cursor-ring')).toBeVisible();
  });

  test('search is keyboard accessible and exact title wins', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    const trigger = page.getByRole('button', { name: /search/i }).first();
    await trigger.click();
    const input = page.getByRole('combobox', { name: /search jyc/i });
    await expect(input).toBeVisible();
    await input.fill('AITronics');
    const results = page.locator('#jyc-search-results [role="option"]');
    await expect(results.first()).toContainText(/AITronics/i);
    await expect(results.first()).toContainText(/BEST MATCH/i);
    await input.press('Escape');
    await expect(input).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  test('more menu exposes assistant and admin without making them primary nav', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    const more = page.getByRole('button', { name: /^More$/i }).first();
    if (await more.count()) {
      await more.click();
      await expect(page.getByText(/JYC Assistant/i).first()).toBeVisible();
      await expect(page.getByText(/Control Center|Staff Control Center/i).first()).toBeVisible();
      await expect(page.getByText(/^Contact$/i).first()).toBeVisible();
    }
    expect(errors).toEqual([]);
  });

  test('theme toggle changes document theme', async ({ page }) => {
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    const toggle = page.getByRole('button', { name: /theme|light|dark/i }).first();
    if (await toggle.count()) {
      const before = await page.locator('html').getAttribute('data-theme');
      await toggle.click();
      await expect.poll(() => page.locator('html').getAttribute('data-theme')).not.toBe(before);
    }
  });

  for (const route of ['/about','/clubs','/events','/gallery','/team','/calendar','/guide','/map','/my-jyc','/contact','/fests','/recruitment']) {
    test(`${route} renders without a runtime error`, async ({ page }) => {
      const errors=await collectRuntimeErrors(page);
      await page.goto(base+route, {waitUntil:'domcontentloaded'});
      await expect(page.locator('body')).toBeVisible();
      expect(errors, `runtime errors on ${route}`).toEqual([]);
    });
  }

  test('events has search, club and date controls', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base+'/events', {waitUntil:'domcontentloaded'});
    await expect(page.getByRole('textbox', {name:/search events/i})).toBeVisible();
    await expect(page.getByRole('combobox', {name:/filter events by club/i})).toBeVisible();
    await expect(page.locator('input[type="date"]')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('calendar exposes JYC and academic sources', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base+'/calendar', {waitUntil:'domcontentloaded'});
    await expect(page.getByRole('button', {name:/JYC events/i})).toBeVisible();
    await expect(page.getByRole('button', {name:/Academic dates/i})).toBeVisible();
    await expect(page.getByRole('button', {name:/All/i})).toBeVisible();
    await page.getByRole('button', {name:/Academic dates/i}).click();
    await expect(page.getByText(/Academic/i).first()).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('admin route loads a protected control-center surface without a page crash', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.goto(base+'/admin', {waitUntil:'domcontentloaded'});
    await expect(page.locator('body')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('mobile navigation remains reachable', async ({ page }) => {
    const errors=await collectRuntimeErrors(page);
    await page.setViewportSize({width:390,height:844});
    await page.goto(base,{waitUntil:'domcontentloaded'});
    await expect(page.locator('nav').last()).toBeVisible();
    expect(errors).toEqual([]);
  });
});
