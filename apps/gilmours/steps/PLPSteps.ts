import { expect, Page } from "@playwright/test"
import { PLP } from "../modules/PLP"
import { CommonPage } from "../modules/CommonPage"
import { NavigationPage } from "../modules/NavigationPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"

export class PLPSteps {
    private readonly plp: PLP
    private readonly page: Page
    private readonly commonPage: CommonPage
    private readonly navigationPage: NavigationPage

    constructor(page: Page) {
        this.plp = new PLP(page)
        this.page = page
        this.commonPage = new CommonPage(page)
        this.navigationPage = new NavigationPage(page)
    }

    async waitForProductsToLoad(minCount: number = 10) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.commonPage.overlap.last().waitFor({ state: 'hidden' })
        await this.commonPage.overlay.last().waitFor({ state: 'detached' })
        await this.plp.stockItems.evaluateAll((elements, min) => elements.length > min, minCount)
        await this.plp.productItem.evaluateAll((elements, min) => elements.length > min, minCount)
    }

    async addRandomProduct(qty: number = 1) {
        const count = await this.plp.productItem.count()
        const random = Math.floor(Math.random() * count)
        const SKU = await this.plp.getSKU(random)

        const price = await this.plp.getProductInfo(SKU).getAttribute('data-price')

        await this.plp.getInputQty(SKU).fill(qty.toString())
        await this.plp.getAddToCartBtn(SKU).click()

        await this.plp.getAddMoreToCartBtn(SKU).waitFor({ state: 'visible' })

        // save product info to runtime test data
        RuntimeTestData.set('productInfo', {
            name: await this.plp.getProductInfo(SKU).getAttribute('data-name'),
            price: price,
            uom: await this.plp.getProductInfo(SKU).getAttribute('data-uom'),
            qty: qty.toString(),
            total: (Number(price) * qty).toString(),
            sku: SKU
        })
    }

    async verifyMiniCartCount(qty: string) {
        expect(await this.navigationPage.cartCount.innerText()).toBe(qty)
    }

    async verifyMiniCartTotal() {
        await expect(this.navigationPage.cartTotal).toContainText(RuntimeTestData.get('productInfo').total)
    }
}