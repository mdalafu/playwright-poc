import { Locator, Page } from "@playwright/test";

export class TncPage {
    readonly page: Page
    readonly txtTncPage: Locator
    readonly chkbxTnC: Locator
    readonly chkbxAuthorise: Locator
    readonly btnSignup: Locator

    constructor(page: Page) {
        this.page = page
        this.txtTncPage = page.getByText('Terms and conditions', { exact: true })
        this.chkbxTnC = page.locator('lightning-primitive-input-checkbox span.slds-checkbox').first()
        this.chkbxAuthorise = page.locator('lightning-primitive-input-checkbox span.slds-checkbox').nth(1)
        this.btnSignup = page.getByText('Sign up')
    }

}