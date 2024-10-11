import { expect, test } from '@playwright/test';
import config from '../playwright.config.ts';

test('mobile test', async ({ page }) => {
  console.log("Hello world");
  
  await page.goto('https://wikipedia.org');
  // await page.goto(config.WEBSITE);
  await page.waitForLoadState('domcontentloaded');
  // console.log(await page.title())
  // await page.getByRole('button', { name: 'Add now' }).click()


  // await popup.goto('https://wikipedia.org');
  await page.pause()
});

test.skip('test failed', async () => {
  expect(1).toBe(2);
})


