import { Page } from "@playwright/test"
import { VerificationCodePage } from "../modules/VerificationCodePage"

export class VerificationCodeSteps {
    private readonly verificationCodePage: VerificationCodePage

    constructor(page: Page) {
        this.verificationCodePage = new VerificationCodePage(page)
    }

    /**
     * opens resume link and sends verification code
     * @param link 
     */
    async sendCode(link: string) {
        await this.verificationCodePage.page.goto(link)
        await this.verificationCodePage.txtVerificationRequired.waitFor({ state: 'visible' })
        await this.verificationCodePage.btnSendCode.waitFor({ state: 'attached' })
        await this.verificationCodePage.txtFldCode.waitFor({ state: 'attached' })
        await this.verificationCodePage.page.waitForLoadState('domcontentloaded')
        await this.verificationCodePage.overlay.waitFor({ state: 'detached' })
        await this.verificationCodePage.btnSendCode.click()
        await this.verificationCodePage.slotMsgSuccess.waitFor({ state: 'visible' })
    }

    async verifyCode(code: string) {
        await this.verificationCodePage.txtFldCode.waitFor({ state: 'visible' })
        await this.verificationCodePage.txtFldCode.fill(code)
        await this.verificationCodePage.btnVerifyCode.click()
    }
}