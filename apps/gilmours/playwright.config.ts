import { devices } from '@playwright/test'
import config from '../../playwright.config'

export default {
    ...config,
    testDir: './tests',
    projects: [
        {
            name: 'setup',
            testMatch: /.*\.setup\.ts/
        },
        {
            name: 'chromium',
            use: { 
                ...devices['Desktop Chrome'], 
                storageState: 'playwright/.auth/user.json',
                // viewport: { width: 1920, height: 1080 }
                viewport: { width: 1792, height: 1120 } // my local
            },
            dependencies: ['setup'],
        },
    ]
}