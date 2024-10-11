import { Locator, Page } from "@playwright/test";

export class NzbnPage {
    readonly page: Page
    readonly txtNzbnPage: Locator
    readonly searchFldNzbn: Locator
    readonly btnNext: Locator
    readonly msgNzbnFound: Locator
    readonly btnXMsg: Locator
    readonly txtFldNzbn: Locator
    readonly txtFldBusinessName: Locator
    readonly txtFldOrgName: Locator
    readonly txtFldOrgType: Locator
    readonly listNzbn: Locator
    readonly optionNotFound: Locator
    
    constructor(page: Page) {
        this.page = page
        this.txtNzbnPage = page.getByText('NZ business number or name')
        this.searchFldNzbn = page.getByPlaceholder('Search by your NZBN or')
        this.btnNext = page.getByText('Next', { exact: true })
        this.msgNzbnFound = page.getByRole('heading', { name: "We’ve found your NZBN and pre"})
        this.btnXMsg = page.getByRole('button', { name: 'Close' })
        this.txtFldNzbn  = page.locator('div').filter({ hasText: /^NZBN$/ }).nth(1).locator('input')
        this.txtFldBusinessName = page.locator('div').filter({ hasText: /^Business \/ organisation trading name\*$/ }).first().locator('input')
        this.txtFldOrgName = page.locator('div').filter({ hasText: /^Business \/ organisation legal name\*$/ }).first().locator('input')
        this.txtFldOrgType = page.locator('div').filter({ hasText: 'organisation type'}).first().getByRole('combobox')
        this.listNzbn = page.getByRole('presentation').and(this.page.locator('//*[@data-value]'))
        this.optionNotFound = page.getByRole('option', { name: 'Can’t find your NZBN or' })
    }

    getFirstNzbnOption(nzbn: string) {
        return this.page.getByRole('option', { name: nzbn}).first()
    }
}