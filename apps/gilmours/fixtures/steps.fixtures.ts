import { test as base } from '@playwright/test';
import { LoginSteps } from '../steps/LoginSteps';
import { NavigationSteps } from '../steps/NavigationSteps';
import { PLPSteps } from '../steps/PLPSteps';
import { CartSteps } from '../steps/CartSteps';

export const test = base.extend({
    loginSteps: async ({ page }, use) => { await use(new LoginSteps(page)) },
    navigationSteps: async ({ page }, use) => { await use(new NavigationSteps(page)) },
    plpSteps: async ({ page }, use) => { await use(new PLPSteps(page)) },
    cartSteps: async ({ page }, use) => { await use(new CartSteps(page)) },
});