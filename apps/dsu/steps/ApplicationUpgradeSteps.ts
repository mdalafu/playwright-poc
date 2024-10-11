import { Page } from "@playwright/test"
import { ApplicationUpgradePage } from "../modules/ApplicationUpgradePage"


export class ApplicationUpgradeSteps {
    private readonly applicationUpgradePage: ApplicationUpgradePage

    constructor(page: Page) {
        this.applicationUpgradePage = new ApplicationUpgradePage(page)
    }

    async requestUpgrade() {
        await this.applicationUpgradePage.txtApplicationUpgrade.waitFor({state: 'visible'})
        await this.applicationUpgradePage.btnRequestUpgrade.click()
    }
    
    async verifyRequestSent() {
        await this.applicationUpgradePage.txtRequestSent.waitFor({state: 'visible'})
    }
}