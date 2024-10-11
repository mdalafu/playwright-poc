import { Page } from "@playwright/test"
import { NavigationPage } from "../modules/NavigationPage"


export class NavigationSteps {
    private readonly navigationPage: NavigationPage

    constructor(page: Page) {
        this.navigationPage = new NavigationPage(page)
    }

    async clickFinishLate() {
        await this.navigationPage.btnFinishLater.click()
    }

    async clickNext() {
        await this.navigationPage.page.waitForLoadState('domcontentloaded');
        await this.navigationPage.btnNext.waitFor({ state: 'visible' })
        await this.navigationPage.btnNext.click()
    }
}