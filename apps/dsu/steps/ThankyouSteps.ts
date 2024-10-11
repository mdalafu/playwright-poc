import { Page } from "@playwright/test"
import { ThankyouPage } from "../modules/ThankyouPage"


export class ThankyouSteps {
    private readonly thankyouPage: ThankyouPage

    constructor(page: Page) {
        this.thankyouPage = new ThankyouPage(page)
    }

    async clickFindOutMore() {
        await this.thankyouPage.btnFindOutMore.click()
    }
    
    async verifyApplicationCompleted() {  
        await this.thankyouPage.txtApplicationCompleted.waitFor({state: 'visible'})
    }
}