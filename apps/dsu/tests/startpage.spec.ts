import { test } from '../fixtures/fixtures.ts';
import config from '../playwright.config.ts';

test.beforeEach( async ({page}) => {
  await page.goto(config.DSU_URL)
})

test('verify cancel function', {tag: '@'}, async ({commonProcess, homePageSteps}) => {
  await commonProcess.startCNCApplication()
  await homePageSteps.cancelApplication()
  await homePageSteps.verifyInHomePage()
})
  