import { Page } from "@playwright/test"
import { NavigationPage } from "../../gilmours/modules/NavigationPage"
import { CommonPage } from "../../gilmours/modules/CommonPage"

export class NavigationSteps {
    private readonly navigationPage: NavigationPage
    private readonly page: Page
    private readonly commonPage: CommonPage

    constructor(page: Page) {
        this.navigationPage = new NavigationPage(page)
        this.page = page
        this.commonPage = new CommonPage(page)
    }

    async browseCategory(category: string, subCategory: string, list: string) {
        // await this.page.locator('#overlay').waitFor({ state: 'detached' })
        await this.navigationPage.tabBrowse.waitFor({state: 'visible'})
        await this.navigationPage.tabBrowse.click()
        await this.navigationPage.getCategory(category).click()
        await this.navigationPage.getSubCategory(subCategory).click()
        if(list != undefined) await this.navigationPage.getSubCatList(list).click()
        await this.page.waitForLoadState();
    }

    async goToCart() {
        await this.navigationPage.btnMiniCart.click()
        await this.commonPage.overlay.last().waitFor({ state: 'detached' })
    }

    async goToLists() {
        await this.navigationPage.tabList.click()
        await this.commonPage.overlay.last().waitFor({ state: 'detached' })
    }
}