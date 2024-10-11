import { Page } from "@playwright/test"
import { TncPage } from "../modules/TncPage"


export class TncSteps {
    private readonly tncPage: TncPage

    constructor(page: Page) {
        this.tncPage = new TncPage(page)
    }

    async acceptTnC() {
        await this.tncPage.txtTncPage.waitFor({state: 'visible'})
        await this.tncPage.chkbxTnC.click()
        await this.tncPage.chkbxAuthorise.click()
    }

    async signUp() {
        await this.tncPage.btnSignup.click()
    }
}