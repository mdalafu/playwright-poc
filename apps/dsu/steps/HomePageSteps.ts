import { expect, Page } from "@playwright/test"
import { HomePage } from "../modules/HomePage"


export class HomePageSteps {
    private readonly homePage: HomePage
    page: Page

    constructor(page: Page) {
        this.homePage = new HomePage(page)
        this.page = page
    }

    async startApplication() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.homePage.txtSignUp.waitFor({state: 'visible'})
        await this.homePage.ckbxCaptcha.click()
        await this.homePage.iconCaptchaCheck.waitFor({state: 'visible'})
        await expect(this.homePage.ckbxCaptcha).toBeChecked()
        await this.homePage.btnStartApplication.click()
    }

    async cancelApplication(){
        await this.homePage.btnCancel.click()
        await this.homePage.popUptext.waitFor({state: 'visible'})
        await this.homePage.popUpCancelBtn.click()
        await this.homePage.popUptext.waitFor({state: 'hidden'})
    }

    async verifyInHomePage() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.homePage.btnStartApplication.waitFor({state: 'visible'})
    }
}