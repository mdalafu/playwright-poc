import { Locator, Page } from "@playwright/test";

export class RewardsPage {
    readonly page: Page
    readonly txtRewardsPage: Locator
    readonly spanEmailDeals: Locator
    readonly chkbxEmailDeals: Locator
    readonly spanFreshConnection: Locator
    readonly chkbxFreshConnection: Locator
    readonly btnNext: Locator
    readonly txtFldCardholderName: Locator
    readonly txtFldAirpointsNumber: Locator
    readonly spanAuthoriseAirpoints: Locator
    readonly chkbxAuthoriseAirpoints: Locator

    constructor(page: Page) {
        this.page = page
        this.txtRewardsPage = page.getByText('Rewards')
        this.spanEmailDeals = page.locator("//lightning-input[contains(@id,'chk-subscribePromotionalEmail')]//span").first()
        this.chkbxEmailDeals = page.locator("//lightning-input[contains(@id,'chk-subscribePromotionalEmail')]//input")
        this.spanFreshConnection = page.locator("//lightning-input[contains(@id,'chk-freshConnection')]//span").first()
        this.chkbxFreshConnection = page.locator("//lightning-input[contains(@id,'chk-freshConnection')]//input")
        this.btnNext = page.getByText('Next', { exact: true })
        this.txtFldCardholderName = page.locator('span').filter({ hasText: 'Cardholder Name'}).locator('xpath=/following-sibling::*//input') 
        this.txtFldAirpointsNumber  = page.locator('span').filter({ hasText: 'Airpoints Number'}).locator('xpath=/following-sibling::*//input') 
        this.spanAuthoriseAirpoints = page.locator("//lightning-input[contains(@id,'ds-reward-program-terms-accepted')]//span").first()
        this.chkbxAuthoriseAirpoints = page.locator("//lightning-input[contains(@id,'ds-reward-program-terms-accepted')]//input")
    }

    getRewardsOption(option: string) {
        return this.page.locator('label').filter({ hasText: option })
    }

}