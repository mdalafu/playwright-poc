import { expect, Page } from "@playwright/test"
import { AuthorisedContactPage } from "../modules/AuthorisedContactPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"


export class AuthorisedContactSteps {
    private readonly authorisedContactPage: AuthorisedContactPage

    constructor(page: Page) {
        this.authorisedContactPage = new AuthorisedContactPage(page)
    }

    async verifyPrimayContactSelected() {
        const fullname = `${RuntimeTestData.get('expPrimaryContactData').firstName} ${RuntimeTestData.get('expPrimaryContactData').lastName}`
        await this.authorisedContactPage.txtAuthorisedPage.waitFor({ state: 'visible' })
        await this.authorisedContactPage.getRadioElement(fullname).waitFor({ state: 'visible' })
        await expect(this.authorisedContactPage.getRadioElement(fullname), `${fullname} is not checked`).toBeChecked()
    }

    async clickNext() {
        await this.authorisedContactPage.btnNext.click()
    }
}