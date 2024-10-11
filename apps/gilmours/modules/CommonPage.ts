import { Locator, Page } from "@playwright/test";

export class CommonPage {
    readonly page: Page
    readonly tabBrowse: Locator
    readonly overlap: Locator
    readonly overlay: Locator
    
    constructor(page: Page) {
        this.page = page
        this.overlap = page.locator('.nav.mp-menu.mp-cover.hidden-print.mp-overlap')
        this.overlay = page.locator('#overlay')
    }

}