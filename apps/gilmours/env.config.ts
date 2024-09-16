import { PlaywrightTestConfig } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

export interface EnvConfig extends PlaywrightTestConfig {
  ENV: string
  WEBSITE_URL: string
}

export const envs: Record<string, EnvConfig> = {
  QA: {
    ENV: 'qa',
    WEBSITE_URL: 'https://gilmours--qa.sandbox.my.site.com/DefaultStore/GCC_SiteLogin',
  },
  PREPROD: {
    ENV: 'preprod',
    WEBSITE_URL: 'https://gilmours--preprod.sandbox.my.site.com/DefaultStore/GCC_SiteLogin',
  },
  PROD: {
    ENV: 'prod',
    WEBSITE_URL: 'https://online.gilmours.co.nz/GCC_SiteLogin',
  },
}
