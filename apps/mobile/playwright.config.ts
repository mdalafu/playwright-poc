import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
        {
          name: 'setup mobile',
          testMatch: /setup\.ts/,
        },
        // {
        //     name: 'Mobile Chrome',
        //     use: { ...devices['Pixel 5'] },
        //     dependencies: ['setup mobile'],
        // },
        // {
        //     name: 'Mobile Chrome',
        //     use: { ...devices['Galaxy S9+'] },
        //     dependencies: ['setup browser'],
        // },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 15 Pro'] },
          dependencies: ['setup mobile'],
        },
    ],
}