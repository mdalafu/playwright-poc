import { test as base } from '@playwright/test';
import { ApiSteps } from '../steps/ApiSteps.ts';

export const test = base.extend({
    // eslint-disable-next-line no-empty-pattern
    apiSteps: async ({}, use) => { await use(new ApiSteps()) },

});