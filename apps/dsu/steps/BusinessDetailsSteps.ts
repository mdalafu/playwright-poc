import { expect, Page } from "@playwright/test"
import { BusinessDetailsPage } from "../modules/BusinessDetailsPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"


export class BusinessDetailsSteps {
    private readonly businessDetailsPage: BusinessDetailsPage
    private readonly page: Page

    constructor(page: Page) {
        this.businessDetailsPage = new BusinessDetailsPage(page)
        this.page = page
    }

   async searchRegisteredAddress(address: string) {
        await this.businessDetailsPage.searchFldRegisteredAdd.fill(address)
        await this.businessDetailsPage.getAddressOption(address).click()
        expect(await this.businessDetailsPage.searchFldRegisteredAdd.inputValue()).toContain(address)

    }

    async selectIndustry(industry: string, subIndustry: string) {
        await this.businessDetailsPage.dropDownIndustry.click()
        await this.businessDetailsPage.getDropdownOption(industry).click()
        await this.businessDetailsPage.dropDownSubIndustry.click()
        await this.businessDetailsPage.getDropdownOption(subIndustry).click()
    }
    
    async selectRecentPurchase(option: string) {
        await this.businessDetailsPage.getRadioButtonOption(option).click()
    }

    async selectLiquorLicence(option: string) { 
        await this.businessDetailsPage.getBtnLiquorLicence(option).click()
    }

    async clickNext() {
        await this.businessDetailsPage.btnNext.click()
    }

    async reSelectRegisteredAddress(address: string) {
        await this.businessDetailsPage.searchFldRegisteredAdd.press('Space')
        await this.businessDetailsPage.getAddressOption(address).click()
        expect(await this.businessDetailsPage.searchFldRegisteredAdd.inputValue()).toContain(address)
    }

    async clickUseAsDeliveryAdd() {
        await this.businessDetailsPage.chkbxUseAsDelivery.click()
    }

    async verifyBusinessDetailsData() {
        // recent purchase is sometimes not visible, so we need to click on the tooltip to make it visible
        await this.page.waitForLoadState('domcontentloaded');
        await this.businessDetailsPage.lblRecentPurchase.click()
        await this.businessDetailsPage.toolTipRecentPurchase.click()

        expect(await this.businessDetailsPage.searchFldRegisteredAdd.inputValue()).toContain(RuntimeTestData.get('expBusinessDetailsData').address)
        expect(await this.businessDetailsPage.dropDownIndustryBtn.getAttribute('data-value')).toBe(RuntimeTestData.get('expBusinessDetailsData').industry)
        expect(await this.businessDetailsPage.dropDownSubIndustryBtn.getAttribute('data-value')).toBe(RuntimeTestData.get('expBusinessDetailsData').subIndustry)
        expect(await this.businessDetailsPage.getRadioButtonOption(RuntimeTestData.get('expBusinessDetailsData').recentPurchase).isChecked()).toBe(true)
        expect(await this.businessDetailsPage.getBtnLiquorLicence(RuntimeTestData.get('expBusinessDetailsData').liquorLicence).isChecked()).toBe(true)

    }

    async verifyInBusinessDetailsPage() {
        await this.businessDetailsPage.txtBusinessDetailsPage.waitFor({state: 'visible'})
        await this.businessDetailsPage.searchFldRegisteredAdd.waitFor({state: 'visible'})
    }
}