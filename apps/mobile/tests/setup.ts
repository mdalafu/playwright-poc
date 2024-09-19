import { test as setup } from '@playwright/test';
import config from '../playwright.config';

setup('open mobile web', async ({ page }) => {
  console.log('open mobile');
  await page.goto(config.BASE_URL)
});