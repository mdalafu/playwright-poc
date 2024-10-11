import { Page } from "@playwright/test"
import { CommonPage } from "../../gilmours/modules/CommonPage"

export class CommonSteps {
    private readonly commonPage: CommonPage

    constructor(page: Page) {
        this.commonPage = new CommonPage(page)
    }

    async waitUntilOverlayDetached() {
        await this.commonPage.overlay.last().waitFor({ state: 'detached' })
    }
}