import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Galaxy S9+'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 15 Pro'] },
        },
    ],
}