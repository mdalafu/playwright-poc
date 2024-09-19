import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
      {
        name: 'setup browser',
        testMatch: /setup\.ts/,
      },
      {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup browser'],
      },
    ]
}