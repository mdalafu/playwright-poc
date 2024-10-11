import { test as base } from '@playwright/test';
import { CommonProcess } from '../processes/CommonProcess.ts';

export const test = base.extend({
    commonProcess: async ({ page }, use) => { await use(new CommonProcess(page)) },
});