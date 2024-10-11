import { Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page
    readonly btnClearCart: Locator
    readonly txtEmptyCart: Locator
    readonly txtShoppingCart: Locator
    readonly txtOrderSummary: Locator
    readonly cartItems: Locator
    readonly itemTitle: Locator
    readonly itemTotalAmt: Locator
    readonly itemPrice: Locator
    readonly subTotal: Locator
    readonly totalAmt: Locator
    readonly btnProceed: Locator
    
    constructor(page: Page) {
        this.page = page
        this.btnClearCart = page.locator('#clearCart')
        this.txtEmptyCart = page.getByText('Shopping cart is empty.')
        // shopping cart
        this.txtShoppingCart = page.getByText('Shopping Cart')
        // cart items
        this.cartItems = page.locator('div.cart_item')
        this.itemTitle = this.cartItems.locator('p.item_title a').first()
        this.itemTotalAmt = this.cartItems.locator('.item-total-amount')
        this.itemPrice = this.cartItems.locator('.item-unit-price')
        // order summary
        this.txtOrderSummary = page.getByText('Order summary')
        this.subTotal = page.locator('#grandSubTotal')
        this.totalAmt = page.locator('#grandTotal')
        this.btnProceed = page.getByRole('button', { name: 'Proceed' })
    }
    
}