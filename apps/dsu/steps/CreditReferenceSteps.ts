import { expect, Page } from "@playwright/test"
import { CreditReferencePage } from "../modules/CreditReferencePage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"

export class CreditReferenceSteps {
    private readonly creditReferencePage: CreditReferencePage
    private readonly page: Page

    constructor(page: Page) {
        this.creditReferencePage = new CreditReferencePage(page)
        this.page = page
    }

    async addReference(businessName: string, contactFirstName: string, contactLastName: string, contactNumber: string) {
        await this.creditReferencePage.txtFldBusinessName.fill(businessName)
        await this.creditReferencePage.txtFldContactFirstName.fill(contactFirstName)
        await this.creditReferencePage.txtFldContactLastName.fill(contactLastName)
        await this.creditReferencePage.txtFldContactNumber.fill(contactNumber)
    }

    async clickNext() {
        await this.creditReferencePage.btnNext.click()
    }

    async verifyCreditReferenceData() {
        await this.creditReferencePage.txtFldBusinessName.waitFor({ state: 'visible' })
        expect(await this.creditReferencePage.txtFldBusinessName.inputValue()).toBe(RuntimeTestData.get('expCreditReferenceData').businessName)
        expect(await this.creditReferencePage.txtFldContactFirstName.inputValue()).toBe(RuntimeTestData.get('expCreditReferenceData').contactFirstName)
        expect(await this.creditReferencePage.txtFldContactLastName.inputValue()).toBe(RuntimeTestData.get('expCreditReferenceData').contactLastName)
        expect(await this.creditReferencePage.txtFldContactNumber.inputValue()).toBe(RuntimeTestData.get('expCreditReferenceData').contactNumber)
    }

    async verifyInCreditReferencePage() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.creditReferencePage.txtCreditReferencePage.waitFor({ state: 'visible' })
        await this.creditReferencePage.txtFldBusinessName.waitFor({ state: 'visible' })
    }
}