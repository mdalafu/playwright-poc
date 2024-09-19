import { test as setup } from '@playwright/test';
import config from '../playwright.config.ts';

setup('open dsu', async ({ page }) => {
  console.log('open dsu');
  await page.goto(config.DSU_URL)
});