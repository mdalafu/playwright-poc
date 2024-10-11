import { test as base } from '@playwright/test';
import { AccountContactSteps } from "../steps/AccountContactSteps.ts";
import { ApplicationUpgradeSteps } from "../steps/ApplicationUpgradeSteps.ts";
import { AuthorisedContactSteps } from "../steps/AuthorisedContactSteps.ts";
import { BusinessDetailsSteps } from "../steps/BusinessDetailsSteps";
import { ChooseAccountSteps } from '../steps/ChooseAccountSteps.ts';
import { CreditReferenceSteps } from "../steps/CreditReferenceSteps.ts";
import { FinishLaterSteps } from '../steps/FinishLaterSteps.ts';
import { HomePageSteps } from '../steps/HomePageSteps';
import { NavigationSteps } from '../steps/NavigationSteps';
import { NzbnPageSteps } from "../steps/NzbnPageSteps"
import { PrimaryContactSteps } from "../steps/PrimaryContactSteps";
import { RewardsSteps } from "../steps/RewardsSteps";
import { ThankyouSteps } from "../steps/ThankyouSteps";
import { TncSteps } from "../steps/TncSteps";
import { VerificationCodeSteps } from '../steps/VerificationCodeSteps.ts';
import { ResumeSteps } from '../steps/ResumeSteps.ts';

export const test = base.extend({
    accountContactSteps: async ({ page }, use) => { await use(new AccountContactSteps(page)) },
    applicationUpgradeSteps: async ({ page }, use) => { await use(new ApplicationUpgradeSteps(page)) },
    authorisedContactSteps: async ({ page }, use) => { await use(new AuthorisedContactSteps(page)) },
    businessDetailsSteps: async ({ page }, use) => { await use(new BusinessDetailsSteps(page)) },
    chooseAccountSteps: async ({ page }, use) => { await use(new ChooseAccountSteps(page)) },
    creditReferenceSteps: async ({ page }, use) => { await use(new CreditReferenceSteps(page)) },
    finishLaterSteps: async ({ page }, use) => { await use(new FinishLaterSteps(page)) },
    homePageSteps: async ({ page }, use) => { await use(new HomePageSteps(page)) },
    navigationSteps: async ({ page }, use) => { await use(new NavigationSteps(page)) },
    nzbnPageSteps: async ({ page }, use) => { await use(new NzbnPageSteps(page)) },
    primaryContactSteps: async ({ page }, use) => { await use(new PrimaryContactSteps(page)) },
    rewardsSteps: async ({ page }, use) => { await use(new RewardsSteps(page)) },
    thankyouSteps: async ({ page }, use) => { await use(new ThankyouSteps(page)) },
    tncSteps: async ({ page }, use) => { await use(new TncSteps(page)) },
    verificationCodeSteps: async ({ page }, use) => { await use(new VerificationCodeSteps(page)) },
    resumeSteps: async ({ page }, use) => { await use(new ResumeSteps(page)) },
});