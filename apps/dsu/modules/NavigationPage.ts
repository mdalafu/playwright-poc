import { Locator, Page } from "@playwright/test";

export class NavigationPage {
    readonly page: Page
    readonly btnFinishLater: Locator
    readonly btnNext: Locator

    constructor(page: Page) {
        this.page = page
        this.btnFinishLater = page.getByText('Finish later', { exact: true })
        this.btnNext = page.getByText('Next', { exact: true })
    }
    
}