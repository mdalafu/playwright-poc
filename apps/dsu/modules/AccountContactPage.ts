import { Locator, Page } from "@playwright/test";

export class AccountContactPage {
    readonly page: Page
    readonly txtAccountContactPage: Locator
    readonly dropDownContact: Locator
    readonly btnNext: Locator
    readonly dropDownContactBtn: Locator
    readonly selectedContact: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtAccountContactPage = page.getByText('Account contacts', { exact: true })
        this.dropDownContact = page.getByText('Select contact')
        this.btnNext = page.getByText('Next', { exact: true })
        this.dropDownContactBtn = page.getByRole('combobox').first()
        this.selectedContact = page.locator("//lightning-base-combobox-item[@aria-checked='true']")
    }

    getRoleOption(role: string) {
        return this.page.getByRole('option', { name: role, exact: true })
    }
}