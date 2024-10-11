import { test } from '../fixtures/fixtures';
import config from '../playwright.config.ts';

test('TS05-01: verify added product details is correct', {tag: '@'}, async ({commonProcess, navigationSteps, plpSteps, cartSteps}) => {
  await commonProcess.navigateTo(config.WEBSITE)
  await commonProcess.clearCart()

  await navigationSteps.browseCategory('Dairy & Deli', 'Dairy')
  await plpSteps.waitForProductsToLoad()
  await plpSteps.addRandomProduct(2)

  // Cart count and price in mini cart icon should be correct
  await plpSteps.verifyMiniCartCount('2')
  await plpSteps.verifyMiniCartTotal()

  // product details should be correct
  await navigationSteps.goToCart()
  await cartSteps.verifyCartItem()

  // Order summary should be correct
  await cartSteps.verifyOrderSummary()


});
