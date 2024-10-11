import { Locator, Page } from "@playwright/test";

export class NavigationPage {
    readonly page: Page
    readonly tabBrowse: Locator
    readonly tabList: Locator
    readonly cartCount: Locator
    readonly cartTotal: Locator
    readonly btnMiniCart: Locator
    
    constructor(page: Page) {
        this.page = page
        this.tabBrowse = page.locator('.menu-bar-shop-departments').getByText('Browse')
        this.tabList = page.getByRole('banner').getByRole('link', { name: 'Lists' })
        this.cartCount = page.locator('#cartHeader .shopping-cart-info__count')
        this.cartTotal = page.locator('#cartHeader .shopping-cart-info__total')
        this.btnMiniCart = page.locator('#cartHeader ')
    }

    getCategory(category: string) {
        return this.page.getByRole('banner').getByText(category)
    }

    getSubCategory(subCategory: string) {
        return this.page.getByRole('link', {name: subCategory, exact: true})
    }

    getSubCatList(list: string) {
        return this.page.locator("//ul[contains(@id, 'mega-menu-subcat-list')]").getByRole('link', {name: list})
    }
}