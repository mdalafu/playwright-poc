import { expect, Page } from "@playwright/test"
import { NzbnPage } from "../modules/NzbnPage"


export class NzbnPageSteps {
    private readonly nzbnPage: NzbnPage

    constructor(page: Page) {
        this.nzbnPage = new NzbnPage(page)
    }

    async searchNzbn(nzbn: string) {
        await this.nzbnPage.txtNzbnPage.waitFor({state: 'visible'})
        await this.nzbnPage.searchFldNzbn.fill(nzbn)
    }

    async selectFirstNzbnOption(nzbn: string) {
        await this.nzbnPage.getFirstNzbnOption(nzbn).click()
    }

    async clickNext() {
        await this.nzbnPage.btnNext.click()
    }

    async closeMsg() {
        await this.nzbnPage.msgNzbnFound.waitFor({state: 'visible'})
        await this.nzbnPage.btnXMsg.click()
    }

    async verifyNzbnPrefilled(){
        await this.nzbnPage.txtFldNzbn.waitFor({state: 'visible'})
        await this.nzbnPage.txtFldBusinessName.waitFor({state: 'visible'})
        await this.nzbnPage.txtFldOrgName.waitFor({state: 'visible'})
        await this.nzbnPage.txtFldOrgType.waitFor({state: 'visible'})
    }

    async verifyMatchSearchResults(nzbn:string, max: number) {
        const list = this.nzbnPage.listNzbn
        await list.filter({ hasText: nzbn }).first().waitFor({state: 'visible'})

        const searchKeys = nzbn.split(' ')
        const elements = await list.allInnerTexts()
        for (const element of elements) {
            for (const key of searchKeys) {
                expect(element.toLowerCase()).toContain(key)
            }
        }
        expect(await list.count()).toBeLessThanOrEqual(max);
    }

    async verifyNoResults() {      
        await this.nzbnPage.optionNotFound.waitFor({state: 'visible'})
    }
        
}