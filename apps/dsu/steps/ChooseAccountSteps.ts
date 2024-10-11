import { Page } from "@playwright/test"
import { ChooseAccountPage } from "../modules/ChooseAccountPage"


export class ChooseAccountSteps {
    private readonly chooseAccountPage: ChooseAccountPage

    constructor(page: Page) {
        this.chooseAccountPage = new ChooseAccountPage(page)
    }

    async chooseCNC() {
        await this.chooseAccountPage.txtChooseYourAcct.waitFor({state: 'visible'})
        await this.chooseAccountPage.btnCNCAcct.click()
        await this.chooseAccountPage.btnNext.click()
    } 

    async chooseSD() {
        await this.chooseAccountPage.txtChooseYourAcct.waitFor({state: 'visible'})
        await this.chooseAccountPage.btnSDAcct.click()
        await this.chooseAccountPage.btnNext.click()
    }
}