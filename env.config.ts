import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import * as process from 'node:process'

dotenv.config();

export interface EnvConfig extends PlaywrightTestConfig {
  ENV: string;
  WEBSITE: string;
  DSU_URL: string;
  SF_USERNAME: string;
  SF_PASSWORD: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  ACCESS_TOKEN: string;
  INSTANCE_URL: string;
  G_SD_USERNAME: string;
  G_SD_PASSWORD: string;
}

export const envs: Record<string, EnvConfig> = {
  QA: {
    ENV: "qa",
    WEBSITE: "https://gilmours--qa.sandbox.my.site.com",
    DSU_URL:'https://gilmours--qa.sandbox.my.site.com/signup/s/signup?e2eTest=true',
    CLIENT_ID: process.env.QA_CLIENT_ID || "ENV CONFIG ERROR",
    CLIENT_SECRET: process.env.QA_CLIENT_SECRET || "ENV CONFIG ERROR",
    SF_USERNAME: "luisa.dalafu@gilmours.qa",
    SF_PASSWORD: process.env.QA_SF_PASSWORD || "ENV CONFIG ERROR",
    ACCESS_TOKEN: "",
    INSTANCE_URL: "",
    G_SD_USERNAME: "gilmours@qa.ecommtesting.sd3.ux",
    G_SD_PASSWORD: process.env.QA_GSD_PASSWORD || "ENV CONFIG ERROR"
  },
  PREPROD: {
    ENV: "preprod",
    WEBSITE: "https://gilmours--preprod.sandbox.my.site.com",
    DSU_URL:'https://gilmours--preprod.sandbox.my.site.com/signup/s/signup?e2eTest=true',
    CLIENT_ID: process.env.PREPROD_CLIENT_ID || "",
    CLIENT_SECRET: process.env.PREPROD_CLIENT_SECRET || "",
    SF_USERNAME: "luisa.dalafu@gilmours.preprod",
    SF_PASSWORD: process.env.PREPROD_SF_PASSWORD || "",
    ACCESS_TOKEN: "",
    INSTANCE_URL: "",
    G_SD_USERNAME: "gilmours@pre.ecommtesting.sd.ux",
    G_SD_PASSWORD: process.env.PREPROD_GSD_PASSWORD || "ENV CONFIG ERROR"
  },
  PROD: {
    ENV: "prod",
    WEBSITE: "https://online.gilmours.co.nz/",
    DSU_URL:'https://gilmours.force.com/signup/s/',
    CLIENT_ID: process.env.CLIENT_ID || "",
    CLIENT_SECRET: process.env.CLIENT_SECRET || "",
    SF_USERNAME: process.env.SF_USERNAME || "",
    SF_PASSWORD: process.env.SF_PASSWORD || "",
    ACCESS_TOKEN: "",
    INSTANCE_URL: "",
    G_SD_USERNAME: "gilmours@pro.ecommtesting.sd.ux",
    G_SD_PASSWORD: process.env.PROD_GSD_PASSWORD || "ENV CONFIG ERROR"
  },
};
