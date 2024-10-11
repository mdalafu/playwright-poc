import { PlaywrightTestConfig } from '@playwright/test';
import { envs } from './env.config'

const defaultConfig: PlaywrightTestConfig = {
  // testDir: './**/**/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 6 : 4,
  reporter: [
    ['html', { open: 'never' }], // for artifacts
    ['list'],
    // ['allure-playwright'],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: process.env.CI ? 'only-on-failure' : 'off',
  },
  timeout: process.env.CI ? 300000 : 90000, // max time out for each test, 5 minute
  expect: {
    timeout: 30000, // max time out for each expect, 1 minute
  },

}

const env = process.env.ENV || 'QA'
const config = {
  ...defaultConfig,
  ...envs[env],
}

export default config