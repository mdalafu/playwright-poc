import { Locator, Page } from "@playwright/test";

export class ThankyouPage {
    readonly page: Page
    readonly txtApplicationCompleted: Locator
    readonly btnFindOutMore: Locator

    constructor(page: Page) {
        this.page = page
        this.txtApplicationCompleted = page.getByText('Application completed')
        this.btnFindOutMore = page.getByText('Find out more')
    }

}