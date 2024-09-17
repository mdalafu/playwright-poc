import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export interface EnvConfig extends PlaywrightTestConfig {
  ENV: string;
  WEBSITE: string;
  DSU_URL: string;
}

export const envs: Record<string, EnvConfig> = {
  QA: {
    ENV: "staging",
    WEBSITE: "https://gilmours--qa.sandbox.my.site.com",
    DSU_URL:'https://gilmours--qa.sandbox.my.site.com/signup/s/signup?e2eTest=true',
  },
  PREPROD: {
    ENV: "preprod",
    WEBSITE: "https://gilmours--preprod.sandbox.my.site.com",
    DSU_URL:'https://gilmours--preprod.sandbox.my.site.com/signup/s/signup?e2eTest=true',
  },
  PROD: {
    ENV: "prod",
    WEBSITE: "https://online.gilmours.co.nz/",
    DSU_URL:'https://gilmours.force.com/signup/s/',
  },
};
