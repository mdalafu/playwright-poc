import { Page } from "@playwright/test"
import { PrimaryContactSteps } from "./PrimaryContactSteps"
import { NavigationSteps } from "./NavigationSteps"
import { CreditReferenceSteps } from "./CreditReferenceSteps"
import { BusinessDetailsSteps } from "./BusinessDetailsSteps"
import { AuthorisedContactSteps } from "./AuthorisedContactSteps"
import { AccountContactSteps } from "./AccountContactSteps"
import { RewardsSteps } from "./RewardsSteps"

export class ResumeSteps {
    private readonly primaryContactSteps: PrimaryContactSteps
    private readonly navigationSteps: NavigationSteps
    private readonly creditReferenceSteps: CreditReferenceSteps
    private readonly businessDetailsSteps: BusinessDetailsSteps
    private readonly authorisedContactSteps: AuthorisedContactSteps
    private readonly accountContactsSteps: AccountContactSteps
    private readonly rewardsSteps: RewardsSteps

    constructor(page: Page) {
        this.primaryContactSteps = new PrimaryContactSteps(page)
        this.navigationSteps = new NavigationSteps(page)
        this.creditReferenceSteps = new CreditReferenceSteps(page)
        this.businessDetailsSteps = new BusinessDetailsSteps(page)
        this.authorisedContactSteps = new AuthorisedContactSteps(page)
        this.accountContactsSteps = new AccountContactSteps(page)
        this.rewardsSteps = new RewardsSteps(page)
    }

    async verifyPrimaryContactData(){
        // TODO: verify saved progress in NZBN page
        await this.navigationSteps.clickNext()
        await this.primaryContactSteps.verifyPrimaryContactData()
    }

    async verifyBusinessDetailsData(){
    // TODO: verify saved progress in NZBN page
        await this.navigationSteps.clickNext()
        await this.primaryContactSteps.verifyInPrimaryContactPage()
        await this.navigationSteps.clickNext()
        await this.businessDetailsSteps.verifyBusinessDetailsData()
    }

    async verifyCreditReferenceData(){
        await this.navigationSteps.clickNext()
        await this.primaryContactSteps.verifyPrimaryContactData()
        await this.navigationSteps.clickNext()
        await this.creditReferenceSteps.verifyCreditReferenceData()
    }

    async verifyAccountContactData(){     
         // verify in nzbn page
        await this.navigationSteps.clickNext()

        await this.primaryContactSteps.verifyPrimaryContactData()
        await this.navigationSteps.clickNext()

        await this.creditReferenceSteps.verifyInCreditReferencePage()
        await this.navigationSteps.clickNext()

        await this.businessDetailsSteps.verifyInBusinessDetailsPage()
        await this.navigationSteps.clickNext()

        await this.authorisedContactSteps.verifyPrimayContactSelected()
        await this.navigationSteps.clickNext()

        await this.accountContactsSteps.verifyAccountContactData()
    }

    async verifyAllCNCData(){
        // verify in nzbn page
        await this.navigationSteps.clickNext()

        await this.primaryContactSteps.verifyPrimaryContactData()
        await this.navigationSteps.clickNext()

        await this.businessDetailsSteps.verifyBusinessDetailsData()
        await this.navigationSteps.clickNext()

        await this.rewardsSteps.verifyAPRewardsData()
    }

    async verifyAllSDData(){     
            // verify in nzbn page
        await this.navigationSteps.clickNext()

        await this.primaryContactSteps.verifyPrimaryContactData()
        await this.navigationSteps.clickNext()

        await this.creditReferenceSteps.verifyCreditReferenceData()
        await this.navigationSteps.clickNext()

        await this.businessDetailsSteps.verifyBusinessDetailsData()
        await this.navigationSteps.clickNext()

        await this.authorisedContactSteps.verifyPrimayContactSelected()
        await this.navigationSteps.clickNext()

        await this.accountContactsSteps.verifyAccountContactData()
        await this.navigationSteps.clickNext()

        await this.rewardsSteps.verifyAPRewardsData()
   }
}