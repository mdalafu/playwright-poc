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
    ],
}