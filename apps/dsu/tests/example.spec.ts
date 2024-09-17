import { test, expect } from '@playwright/test';
import config from '../playwright.config';

test('dsu test', async ({ page }) => {
  console.log(config.DSU_URL);
  await page.goto(config.DSU_URL)
  
});


