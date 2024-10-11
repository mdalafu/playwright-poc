import { Page } from "@playwright/test"
import { NzbnPageSteps } from "../steps/NzbnPageSteps"
import { HomePageSteps } from '../steps/HomePageSteps';
import { ChooseAccountSteps } from '../steps/ChooseAccountSteps.ts';
import { PrimaryContactSteps } from "../steps/PrimaryContactSteps";
import { BusinessDetailsSteps } from "../steps/BusinessDetailsSteps";
import { RewardsSteps } from "../steps/RewardsSteps";
import { TncSteps } from "../steps/TncSteps";
import { ThankyouSteps } from "../steps/ThankyouSteps";
import { ApplicationUpgradeSteps } from "../steps/ApplicationUpgradeSteps.ts";
import { CreditReferenceSteps } from "../steps/CreditReferenceSteps.ts";
import { AuthorisedContactSteps } from "../steps/AuthorisedContactSteps.ts";
import { AccountContactSteps } from "../steps/AccountContactSteps.ts";
import { RuntimeTestData } from "../../utils/RuntimeTestData.ts";
import { FinishLaterSteps } from "../steps/FinishLaterSteps";
import { ApiSteps } from "../steps/ApiSteps.ts";
import { VerificationCodeSteps } from "../steps/VerificationCodeSteps";

export class CommonProcess {
    private readonly nzbnPageSteps: NzbnPageSteps
    private readonly homePage: HomePageSteps
    private readonly chooseAcctPage: ChooseAccountSteps
    private readonly primaryContactSteps: PrimaryContactSteps
    private readonly businessDetailsSteps: BusinessDetailsSteps
    private readonly rewardsSteps: RewardsSteps
    private readonly tncSteps: TncSteps
    private readonly thankyouSteps: ThankyouSteps
    private readonly applicationUpgradeSteps: ApplicationUpgradeSteps
    private readonly creditReferenceSteps: CreditReferenceSteps
    private readonly authorisedContactSteps: AuthorisedContactSteps
    private readonly accountContactSteps: AccountContactSteps
    private readonly finishLaterSteps: FinishLaterSteps
    private readonly apiSteps: ApiSteps
    private readonly verificationCodeSteps: VerificationCodeSteps

    constructor(page: Page) {
        this.homePage = new HomePageSteps(page)
        this.chooseAcctPage = new ChooseAccountSteps(page)
        this.nzbnPageSteps = new NzbnPageSteps(page)
        this.primaryContactSteps = new PrimaryContactSteps(page)
        this.businessDetailsSteps = new BusinessDetailsSteps(page)
        this.rewardsSteps = new RewardsSteps(page)
        this.tncSteps = new TncSteps(page)
        this.thankyouSteps = new ThankyouSteps(page)
        this.applicationUpgradeSteps = new ApplicationUpgradeSteps(page)
        this.creditReferenceSteps = new CreditReferenceSteps(page)
        this.authorisedContactSteps = new AuthorisedContactSteps(page)
        this.accountContactSteps = new AccountContactSteps(page)
        this.finishLaterSteps = new FinishLaterSteps(page)
        this.apiSteps = new ApiSteps()
        this.verificationCodeSteps = new VerificationCodeSteps(page)
    }

    async startCNCApplication(){
        await this.homePage.startApplication()
        await this.chooseAcctPage.chooseCNC()
    }
    async startSDApplicatoin(){
        await this.homePage.startApplication()
        await this.chooseAcctPage.chooseSD()
    }

    async searchNzbn(nzbn: string) {
        await this.nzbnPageSteps.searchNzbn(nzbn)
        await this.nzbnPageSteps.selectFirstNzbnOption(nzbn)
        await this.nzbnPageSteps.verifyNzbnPrefilled()
        await this.nzbnPageSteps.closeMsg()
        await this.nzbnPageSteps.clickNext()
    }

    async completePrimaryContact(firstName: string, lastName: string, email: string, mobile: string, preferredName: string, phone: string, role: string, passport: string) {
        await this.primaryContactSteps.inputRequiredFields(firstName, lastName, email, mobile)
        await this.primaryContactSteps.inputOptionalFields(preferredName, phone, role)
        if(passport !== undefined) await this.primaryContactSteps.uploadFiles(passport)
        await this.primaryContactSteps.clickNext()

        RuntimeTestData.set('expPrimaryContactData', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            preferredName: preferredName,
            phone: phone,
            role: role
        })
    }

    async inputPrimaryContact(firstName: string, lastName: string, email: string, mobile: string, preferredName: string, phone: string, role: string) {
        await this.primaryContactSteps.inputRequiredFields(firstName, lastName, email, mobile)
        await this.primaryContactSteps.inputOptionalFields(preferredName, phone, role)

        RuntimeTestData.set('expPrimaryContactData', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            preferredName: preferredName,
            phone: phone,
            role: role
        })
    }

    async completeBusinessDetails(address: string, industry: string, subIndustry: string, recentPurchase: string, liquorLicence: string) {
        await this.businessDetailsSteps.searchRegisteredAddress(address)
        await this.businessDetailsSteps.selectIndustry(industry, subIndustry)
        await this.businessDetailsSteps.selectRecentPurchase(recentPurchase)
        await this.businessDetailsSteps.selectLiquorLicence(liquorLicence)
        // to address the flakiness of SUT
        await this.businessDetailsSteps.reSelectRegisteredAddress(address)
        await this.businessDetailsSteps.clickNext()

        RuntimeTestData.set('expBusinessDetailsData', {
            address: address,
            industry: industry,
            subIndustry: subIndustry,
            recentPurchase: recentPurchase,
            liquorLicence: liquorLicence
        })
    }


    async inputBusinessDetails(address: string, industry: string, subIndustry: string, recentPurchase: string, liquorLicence: string) {
        await this.businessDetailsSteps.searchRegisteredAddress(address)
        await this.businessDetailsSteps.selectIndustry(industry, subIndustry)
        await this.businessDetailsSteps.selectRecentPurchase(recentPurchase)
        await this.businessDetailsSteps.selectLiquorLicence(liquorLicence)
        // to address the flakiness of SUT
        await this.businessDetailsSteps.reSelectRegisteredAddress(address)

        RuntimeTestData.set('expBusinessDetailsData', {
            address: address,
            industry: industry,
            subIndustry: subIndustry,
            recentPurchase: recentPurchase,
            liquorLicence: liquorLicence
        })
    }

    async acceptTncAndSignup(){
        await this.tncSteps.acceptTnC()
        await this.tncSteps.signUp()
    }

    async upgradeToDelivery(){
        await this.thankyouSteps.verifyApplicationCompleted()
        await this.thankyouSteps.clickFindOutMore()
        await this.applicationUpgradeSteps.requestUpgrade()
        await this.applicationUpgradeSteps.verifyRequestSent()
    }

    async completeReference(businessName: string, contactFirstName: string, contactLastName: string, contactNumber: string) {
        await this.creditReferenceSteps.addReference(businessName, contactFirstName, contactLastName, contactNumber)
        await this.creditReferenceSteps.clickNext()

        RuntimeTestData.set('expCreditReferenceData', {
            businessName: businessName,
            contactFirstName: contactFirstName,
            contactLastName: contactLastName,
            contactNumber: contactNumber
        })
    }


    async addReference(businessName: string, contactFirstName: string, contactLastName: string, contactNumber: string) {
        await this.creditReferenceSteps.addReference(businessName, contactFirstName, contactLastName, contactNumber)

        RuntimeTestData.set('expCreditReferenceData', {
            businessName: businessName,
            contactFirstName: contactFirstName,
            contactLastName: contactLastName,
            contactNumber: contactNumber
        })
    }

    async completeBusinessDetailsSameDelivery(address: string, industry: string, subIndustry: string, recentPurchase: string, liquorLicence: string) {
        await this.businessDetailsSteps.searchRegisteredAddress(address)
        await this.businessDetailsSteps.clickUseAsDeliveryAdd()
        await this.businessDetailsSteps.selectIndustry(industry, subIndustry)
        await this.businessDetailsSteps.selectRecentPurchase(recentPurchase)
        await this.businessDetailsSteps.selectLiquorLicence(liquorLicence)
        // to address the flakiness of SUT
        await this.businessDetailsSteps.reSelectRegisteredAddress(address)
        await this.businessDetailsSteps.clickNext()

        RuntimeTestData.set('expBusinessDetailsData', {
            address: address,
            industry: industry,
            subIndustry: subIndustry,
            recentPurchase: recentPurchase,
            liquorLicence: liquorLicence
        })
    }

    /**
     * verify primary contact as authorised contact
     * @param fullname 
     */
    async verifyPCAuthorisedContact() {
        await this.authorisedContactSteps.verifyPrimayContactSelected()
        await this.authorisedContactSteps.clickNext()
    }
    
    async completeContactInvoice(fullname: string) {
        await this.accountContactSteps.selectContact(fullname)
        await this.accountContactSteps.clickNext()
        RuntimeTestData.set('expAccountContactData', fullname)
    }
    
    async selectContactInvoice(fullname: string) {
        await this.accountContactSteps.selectContact(fullname)
        RuntimeTestData.set('expAccountContactData', fullname)
    }

    async completeNoRewards(signUpEmail: boolean, freshConnection: boolean) {
        await this.rewardsSteps.selectRewards('No, thanks')
        if(signUpEmail) await this.rewardsSteps.clickEmailDeals()
        if(freshConnection) await this.rewardsSteps.clickFreshConnection()
        await this.rewardsSteps.clickNext()
    }

    async selectNoRewards(signUpEmail: boolean, freshConnection: boolean) {
        await this.rewardsSteps.selectRewards('No, thanks')
        if(signUpEmail) await this.rewardsSteps.clickEmailDeals()
        if(freshConnection) await this.rewardsSteps.clickFreshConnection()
    }

    async selectAPRewards(name: string, number: string, authorise: boolean,  signUpEmail: boolean) {
        await this.rewardsSteps.selectRewards('Airpoints')
        await this.rewardsSteps.inputAirpoints(name, number)
        if(signUpEmail) await this.rewardsSteps.clickEmailDeals()
        if(authorise) await this.rewardsSteps.clickAuthoriseAirpoints()
        
        RuntimeTestData.set('expAirpointsData', {
            name: name,
            number: number,
            isAuthorised: authorise,
            isSignUp: signUpEmail
        })
    }

    async saveProgress(){
        await this.finishLaterSteps.clickFinishLater()
        await this.finishLaterSteps.clickSaveProgress()
    }

    async openResumeLink(){
      const res = await this.apiSteps.getResumeLink(RuntimeTestData.get('expPrimaryContactData').email)
      await this.verificationCodeSteps.sendCode(res.link)
      const code = await this.apiSteps.getResumeCode(res.id)
      await this.verificationCodeSteps.verifyCode(code)
    }
}