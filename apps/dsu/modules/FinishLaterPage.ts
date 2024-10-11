import { Locator, Page } from "@playwright/test";

export class FinishLaterPage {
    readonly page: Page
    readonly txtConfirmDetails: Locator
    readonly btnSave: Locator
    readonly btnCancel: Locator
    readonly btnClose: Locator
    readonly txtFldFirstName: Locator
    readonly txtEmailAddress: Locator
    readonly txtMobileNumber: Locator
    readonly slotMsgApplicaionSaved: Locator
    readonly slotMsgXIcon: Locator

    constructor(page: Page) {
        this.page = page
        this.txtConfirmDetails = page.getByText('Confirm your details')
        this.btnSave = page.getByText('Save progress')
        this.btnCancel = page.getByText('No, I want to continue my')
        this.btnClose = page.getByRole('button', { name: 'Cancel and close' })
        this.txtFldFirstName = page.locator('div.field-value').nth(0)
        this.txtEmailAddress = page.locator('div.field-value').nth(1)
        this.txtMobileNumber = page.locator('div.field-value').nth(2)
        this.slotMsgApplicaionSaved = page.getByText('Your application is saved.')
        this.slotMsgXIcon = page.locator('slot lightning-button-icon')
    }

}