import { test, expect } from '@playwright/test';
import config from '../playwright.config'

test('gilmours test', async ({ page }) => {
  console.log(config.ENV);
});
