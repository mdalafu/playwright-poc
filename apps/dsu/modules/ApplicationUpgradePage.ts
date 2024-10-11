import { Locator, Page } from "@playwright/test";

export class ApplicationUpgradePage {
    readonly page: Page
    readonly txtApplicationUpgrade: Locator
    readonly btnRequestUpgrade: Locator
    readonly txtRequestSent: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtApplicationUpgrade = page.getByText('Application upgrade')
        this.btnRequestUpgrade = page.getByText('Request upgrade')
        this.txtRequestSent = page.getByText('Your request has been sent')
    }

}