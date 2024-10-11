import { Locator, Page } from "@playwright/test";

export class PLP {
    readonly page: Page
    readonly tabBrowse: Locator
    readonly greyPill: Locator
    readonly btnAddToCart: Locator
    readonly stockItems: Locator
    readonly productItem: Locator
    readonly productInfo: Locator
    readonly inputQty: Locator

    constructor(page: Page) {
        this.page = page
        this.tabBrowse = page.locator('.menu-bar-shop-departments').getByText('Browse')
        this.stockItems = page.getByText(/Stock:\s*\d+/);
        this.productItem = page.locator('div.cc_product_item').filter({ hasText: 'Stock:' })
    }

    async getSKU(index: number) {
        const SKU = await this.productItem.nth(index).getByText(/SKU:\s*\d+/).innerText();
        return SKU.replace('SKU: ', '')
    }

    getProductInfo(SKU: string) {
        return this.productItem.filter({ hasText: `SKU: ${SKU}` }).locator('div.cc_grid_product_info')
    }

    getInputQty(SKU: string) {
        return this.productItem.filter({ hasText: `SKU: ${SKU}` }).locator('input.qty')
    }

    getAddToCartBtn(SKU: string) {
        return this.productItem.filter({ hasText: `SKU: ${SKU}` }).locator('button').filter({ hasText: 'Add to cart' })
    }

    getAddMoreToCartBtn(SKU: string) {
        return this.productItem.filter({ hasText: `SKU: ${SKU}` }).locator('button').filter({ hasText: 'Add more to cart' })
    }
}