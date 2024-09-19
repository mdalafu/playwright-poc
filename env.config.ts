import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export interface EnvConfig extends PlaywrightTestConfig {
  ENV: string;
  BASE_URL: string;
  DSU_URL: string;
}

export const envs: Record<string, EnvConfig> = {
  QA: {
    ENV: "staging",
    BASE_URL: "https://gilmours--qa.sandbox.my.site.com",
    DSU_URL:'https://gilmours--qa.sandbox.my.site.com/signup/s/signup?e2eTest=true',
  },
  PREPROD: {
    ENV: "preprod",
    BASE_URL: "https://gilmours--preprod.sandbox.my.site.com",
    DSU_URL:'https://gilmours--preprod.sandbox.my.site.com/signup/s/signup?e2eTest=true',
  },
  PROD: {
    ENV: "prod",
    BASE_URL: "https://online.gilmours.co.nz/",
    DSU_URL:'https://gilmours.force.com/signup/s/',
  },
};
