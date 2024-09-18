import { test } from '@playwright/test';
import config from '../playwright.config'

test('gilmours test', async ({ page }) => {
  console.log("DEBUG:", config.WEBSITE);
  await page.goto(config.WEBSITE)



});
