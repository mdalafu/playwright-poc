import { Locator, Page } from "@playwright/test";

export class PrimaryContactPage {
    readonly page: Page
    readonly txtPrimaryContactPage: Locator
    readonly txtFldFirstName: Locator
    readonly txtFldPreferredName: Locator
    readonly txtFldLastName: Locator
    readonly txtFldEmailAddress: Locator
    readonly txtFldMobile: Locator
    readonly txtFldPhone: Locator
    readonly dropDownRole: Locator
    readonly btnNext: Locator
    readonly btnUploadFiles: Locator
    readonly selectedRole: Locator
    readonly slotMsgXIcon: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtPrimaryContactPage = page.getByText('Primary contact')
        this.txtFldFirstName = page.locator('span').filter({ hasText: 'First Name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldPreferredName = page.locator('span').filter({ hasText: 'Preferred name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldLastName = page.locator('span').filter({ hasText: 'Last Name'}).locator('xpath=/following-sibling::*//input')
        this.txtFldEmailAddress = page.locator('span').filter({ hasText: 'Email Address'}).locator('xpath=/following-sibling::*//input')
        this.txtFldMobile = page.getByPlaceholder('Enter mobile number')
        this.txtFldPhone = page.getByPlaceholder('Enter phone number')
        this.dropDownRole = page.locator('div.slds-dropdown-trigger_click')
        this.btnNext = page.getByText('Next', { exact: true })
        this.btnUploadFiles = page.getByText('Upload Files')
        this.selectedRole = page.getByRole('option').and(page.locator("//*[@aria-selected='true']"))
        this.slotMsgXIcon = page.locator('slot lightning-button-icon')
    }

    getRoleOption(role: string) {
        return this.page.getByRole('option', { name: role, exact: true })
    }
    
    getPassportFilename(filename: string) {
        return this.page.getByText(filename)
    }
}