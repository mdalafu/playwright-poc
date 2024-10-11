import { Locator, Page } from "@playwright/test";

export class BusinessDetailsPage {
    readonly page: Page
    readonly txtBusinessDetailsPage: Locator
    readonly searchFldRegisteredAdd: Locator
    readonly dropDownIndustry: Locator
    readonly dropDownSubIndustry: Locator
    readonly btnNext: Locator
    readonly chkbxUseAsDelivery: Locator
    readonly dropDownIndustryBtn: Locator
    readonly dropDownSubIndustryBtn: Locator
    readonly toolTipRecentPurchase: Locator
    readonly lblRecentPurchase: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtBusinessDetailsPage = page.getByText('Business details')
        this.searchFldRegisteredAdd = page.getByPlaceholder('Search for address').first()
        this.dropDownIndustry = page.getByText('Select industry')
        this.dropDownSubIndustry = page.getByText('Select sub industry')
        this.chkbxUseAsDelivery = page.locator("//lightning-input[contains(@id,'ds-chk-delivery-address')]//span").first()
        this.btnNext = page.getByText('Next', { exact: true })
        this.dropDownIndustryBtn = page.getByRole('combobox').first()
        this.dropDownSubIndustryBtn = page.getByRole('combobox').nth(1)
        this.toolTipRecentPurchase = page.getByRole('img').nth(3)
        this.lblRecentPurchase = page.getByText('Have you recently purchased')
    }

    getAddressOption(address: string) {
        return this.page.getByText(address)
    }

    getDropdownOption(role: string) {
        return this.page.getByRole('option', { name: role, exact: true })
    }

    getRadioButtonOption(option: string) {
        return this.page.locator('label').filter({ hasText: option }).first()
    }

    getBtnLiquorLicence(option: string) {
        return this.page.locator('.inputHaveLiquorLicence').locator('label').filter({ hasText: option })
    }
}