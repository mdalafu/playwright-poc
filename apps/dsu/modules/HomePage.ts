import { FrameLocator, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly iFrame: FrameLocator
    readonly txtSignUp: Locator 
    readonly ckbxCaptcha: Locator
    readonly btnStartApplication: Locator
    readonly reCaptchaIframe: FrameLocator
    readonly iconCaptchaCheck: Locator
    readonly btnCancel: Locator
    readonly popUpContinueBtn: Locator
    readonly popUpCancelBtn: Locator
    readonly popUptext: Locator
    
    constructor(page: Page) {
        this.iFrame = page.frameLocator("//iframe[contains(@id,'ds-recaptcha-iframe')]")
        this.reCaptchaIframe = this.iFrame.frameLocator('iframe[title="reCAPTCHA"]')
        this.txtSignUp = this.iFrame.getByText('Sign up for an account')
        this.ckbxCaptcha = this.reCaptchaIframe.locator('#recaptcha-anchor')
        this.btnStartApplication = this.iFrame.getByText('Start Application')
        this.iconCaptchaCheck = this.reCaptchaIframe.locator('.recaptcha-checkbox-checkmark')
        this.btnCancel = page.locator('c-d-s_-header').getByText('Cancel')
        this.popUpContinueBtn = page.getByText('No, I want to continue my')
        this.popUpCancelBtn = page.getByText('Yes, cancel')
        this.popUptext = page.getByText('Are you sure you want to cancel your application?')
    }
}