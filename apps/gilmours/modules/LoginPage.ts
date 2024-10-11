import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly txtFldUsername: Locator
    readonly txtFldPassword: Locator
    readonly btnLogin: Locator

    constructor(page: Page) {
        this.txtFldUsername = page.locator('[id="gcc_sitelogin\\:loginForm\\:username"]')
        this.txtFldPassword = page.locator('[id="gcc_sitelogin\\:loginForm\\:password"]')
        this.btnLogin = page.getByRole('button', { name: 'Log in' })
    }
}