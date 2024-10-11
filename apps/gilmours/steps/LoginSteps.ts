import { Page } from "@playwright/test"
import { LoginPage } from "../modules/LoginPage"


export class LoginSteps {
    private readonly loginPage: LoginPage
    private readonly page: Page

    constructor(page: Page) {
        this.loginPage = new LoginPage(page)
        this.page = page
    }

    async login(username: string, password: string) {
        await this.loginPage.txtFldUsername.fill(username)
        await this.loginPage.txtFldPassword.fill(password)
        await this.loginPage.btnLogin.click()
        await this.page.waitForLoadState('domcontentloaded');
        await this.loginPage.btnLogin.waitFor({ state: 'hidden' })
    }
}