import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 15 Pro'] },
        // },
        {
            name: 'chromium',
            use: { 
                ...devices['Desktop Chrome'], 
                // channel: "chrome",
                "viewport": {
                  "width": 393,
                  "height": 727
                },
            },
        },
    ],
}