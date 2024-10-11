import { Page } from "@playwright/test"
import { NavigationSteps } from "../steps/NavigationSteps"
import { CartSteps } from "../steps/CartSteps"
import { CommonSteps } from "../steps/CommonSteps"

export class CommonProcess {
    private readonly page: Page
    private readonly navigationSteps: NavigationSteps
    private readonly cartSteps: CartSteps
    private readonly commonSteps: CommonSteps

    constructor(page: Page) {
        this.page = page
        this.navigationSteps = new NavigationSteps(page)
        this.cartSteps = new CartSteps(page)
        this.commonSteps = new CommonSteps(page)
    }

    async navigateTo(url: string) {
        await this.page.goto(url)
        await this.commonSteps.waitUntilOverlayDetached()
    }

    async clearCart() {
        await this.navigationSteps.goToCart()
        await this.cartSteps.clearCart()
    }
}