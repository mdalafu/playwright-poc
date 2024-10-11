import { test as setup } from "../fixtures/fixtures";
import config from '../playwright.config';

const authFile = 'playwright/.auth/user.json';

setup('login', async ({ loginSteps, page }) => {
    await page.goto(config.WEBSITE)
    await loginSteps.login(config.G_SD_USERNAME, config.G_SD_PASSWORD)
    await page.context().storageState({ path: authFile });
});