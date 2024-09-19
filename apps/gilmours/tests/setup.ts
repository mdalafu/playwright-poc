import { test as setup } from '@playwright/test';
import config from '../playwright.config';

setup('open gilmours', async ({ page }) => {
  console.log('open gilmours');
  await page.goto(config.BASE_URL)
});