import { Locator, Page } from "@playwright/test";

export class CreditReferencePage {
    readonly page: Page
    readonly txtCreditReferencePage: Locator
    readonly txtFldBusinessName: Locator
    readonly txtFldContactFirstName: Locator
    readonly txtFldContactLastName: Locator
    readonly txtFldContactNumber: Locator
    readonly btnNext: Locator

    constructor(page: Page) {
        this.page = page
        this.txtCreditReferencePage = page.getByText('Credit references')
        this.txtFldBusinessName = page.locator('span').filter({ hasText: 'Business name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldContactFirstName = page.locator('span').filter({ hasText: 'Contact person’s first name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldContactLastName = page.locator('span').filter({ hasText: 'Contact person’s last name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldContactNumber = page.locator('span').filter({ hasText: 'Contact number'}).locator('xpath=/following-sibling::*//input')
        this.btnNext = page.getByText('Next', { exact: true })
    }

}