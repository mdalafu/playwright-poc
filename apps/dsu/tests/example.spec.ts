import { test } from '@playwright/test';
import config from '../playwright.config';

test('dsu test', async ({ page }) => {
  console.log("DEBUG:", config.DSU_URL);
  await page.goto(config.DSU_URL)
  
});


