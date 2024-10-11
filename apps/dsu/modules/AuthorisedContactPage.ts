import { Locator, Page } from "@playwright/test";

export class AuthorisedContactPage {
    readonly page: Page
    readonly txtAuthorisedPage: Locator
    readonly btnNext: Locator

    constructor(page: Page) {
        this.page = page
        this.txtAuthorisedPage = page.getByText('Authorised contacts', { exact: true })
        this.btnNext = page.getByText('Next', { exact: true })
    }

    getRadioElement(fullname: string) {
        return this.page.locator('label').filter({ hasText: fullname})
    }
}