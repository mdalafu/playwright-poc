import { expect, Page } from "@playwright/test"
import { AccountContactPage } from "../modules/AccountContactPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"


export class AccountContactSteps {
    private readonly accountContactPage: AccountContactPage
    private readonly page: Page

    constructor(page: Page) {
        this.accountContactPage = new AccountContactPage(page)
        this.page = page
    }

    async selectContact(name: string) {
        await this.accountContactPage.dropDownContact.click()
        await this.accountContactPage.getRoleOption(name).click()
    }

    async clickNext() {
        await this.accountContactPage.btnNext.click()
    }

    async verifyAccountContactData(){
        await this.page.waitForLoadState('domcontentloaded');
        await this.accountContactPage.dropDownContactBtn.click()
        await this.accountContactPage.selectedContact.waitFor({ state: 'visible'})
        const actual = await this.accountContactPage.dropDownContactBtn.getAttribute('data-value');
        expect(RuntimeTestData.get('expAccountContactData')).toBe(actual)
    }
}