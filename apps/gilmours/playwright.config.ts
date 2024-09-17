import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
        {
          name: "chrome desktop",
          use: {
            ...devices["Desktop Chrome"],
            viewport: { width: 1920, height: 1080 },
            actionTimeout: 30000,
          },
        },
    ]
}