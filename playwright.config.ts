import { devices, PlaywrightTestConfig } from '@playwright/test';
import { envs } from './env.config'

const defaultConfig: PlaywrightTestConfig = {
  testDir: './**/**/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 4,
  reporter: [
    ['html', { open: 'never' }],
    ['line'],
    ['allure-playwright'],
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
      {
        name: "chromium",
        use: {
          ...devices["Desktop Chrome"],
        },
      },
  ]

}

const env = process.env.ENV || 'QA'
const config = {
  ...defaultConfig,
  ...envs[env],
}

export default config