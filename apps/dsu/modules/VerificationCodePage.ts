import { Locator, Page } from "@playwright/test";

export class VerificationCodePage {
    readonly page: Page
    readonly txtVerificationRequired: Locator
    readonly btnSendCode: Locator
    readonly btnVerifyCode: Locator
    readonly txtFldCode: Locator
    readonly slotMsgSuccess: Locator
    readonly overlay: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtVerificationRequired = page.getByText('Verification required')
        this.btnSendCode = page.getByRole('button', { name: 'Send code' })
        this.btnVerifyCode = page.getByRole('button', { name: 'Verify code' })
        this.txtFldCode = page.getByLabel('Enter verification code')
        this.slotMsgSuccess = page.getByText('Code sent to your mobile')
        this.overlay = this.page.locator('#overlay')
    }

}