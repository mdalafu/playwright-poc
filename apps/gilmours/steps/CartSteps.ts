import { expect, Page } from "@playwright/test"
import { CartPage } from "../modules/CartPage"
import { CommonPage } from "../../gilmours/modules/CommonPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"

export class CartSteps {
    private readonly cartPage: CartPage
    private readonly commonPage: CommonPage

    constructor(page: Page) {
        this.cartPage = new CartPage(page)
        this.commonPage = new CommonPage(page)
    }

    async clearCart() {
        await this.cartPage.btnClearCart.click()
        await this.commonPage.overlay.last().waitFor({ state: 'detached' })
        await this.cartPage.txtEmptyCart.waitFor({ state: 'visible' })
    }

    async verifyCartItem(){
        await this.cartPage.cartItems.waitFor({ state: 'visible' })
        // verify sku
        await expect(this.cartPage.cartItems).toContainText(RuntimeTestData.get('productInfo').sku)

        // verify product name as link
        await expect(this.cartPage.itemTitle).toHaveText(RuntimeTestData.get('productInfo').name)

        // verify price
        await expect(this.cartPage.itemPrice).toContainText(RuntimeTestData.get('productInfo').price)

        // verify total amount
        const totalAmt = (await this.cartPage.itemTotalAmt.innerText()).replace('$', '')
        expect(totalAmt).toBe(RuntimeTestData.get('productInfo').total)
    }

    async verifyOrderSummary() {
        // verify subtotal
        const subTotal = (await this.cartPage.subTotal.innerText()).replace('$', '')
        expect(subTotal).toBe(RuntimeTestData.get('productInfo').total)

        // verify total amount
        const totalAmt = (await this.cartPage.totalAmt.innerText()).replace('$', '')
        expect(totalAmt).toBe(RuntimeTestData.get('productInfo').total)
    }
}