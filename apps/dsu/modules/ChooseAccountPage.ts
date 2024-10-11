import { FrameLocator, Locator, Page } from "@playwright/test";

export class ChooseAccountPage {
    readonly iFrame: FrameLocator
    readonly txtChooseYourAcct: Locator 
    readonly btnCNCAcct: Locator
    readonly btnSDAcct: Locator
    readonly btnNext: Locator

    constructor(page: Page) {
        this.iFrame = page.frameLocator('#ds-recaptcha-iframe-37')
        this.txtChooseYourAcct = page.getByText('Choose your account')
        this.btnCNCAcct = page.locator("[id*='ds-application-type-cnc-button']")
        this.btnSDAcct = page.locator("[id*='ds-application-type-sd-button']")
        this.btnNext = page.getByText('Next')
    }
}


