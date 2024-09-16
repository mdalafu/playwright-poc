import config from '../../playwright.config'
import { envs } from './env.config'

const env = process.env.ENV || 'QA'
export default {
    ...config,
    ...envs[env],
    testDir: './tests',
}