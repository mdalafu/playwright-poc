import { expect, Page } from "@playwright/test"
import { NavigationPage } from "../modules/NavigationPage"
import { FinishLaterPage } from "../modules/FinishLaterPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"

export class FinishLaterSteps {
    private readonly navigationPage: NavigationPage
    private readonly finishLaterPage: FinishLaterPage

    constructor(page: Page) {
        this.navigationPage = new NavigationPage(page)
        this.finishLaterPage = new FinishLaterPage(page)
    }

    async clickFinishLater() {
        await this.navigationPage.btnFinishLater.click()
        await this.finishLaterPage.txtConfirmDetails.waitFor({ state: 'visible' })
    }

    async verifyDetailsInModal() {
        expect(await this.finishLaterPage.txtFldFirstName.textContent()).toBe(RuntimeTestData.get('expPrimaryContactData').firstName)
        expect(await this.finishLaterPage.txtEmailAddress.textContent()).toBe(RuntimeTestData.get('expPrimaryContactData').email)
        expect(await this.finishLaterPage.txtMobileNumber.textContent()).toBe(RuntimeTestData.get('expPrimaryContactData').mobile)
    }

    async clickClose() {
      await this.finishLaterPage.btnClose.click()
      await this.finishLaterPage.txtConfirmDetails.waitFor({ state: 'hidden' })
    }

    async clickSaveProgress() {
        await this.finishLaterPage.btnSave.click()
        await this.finishLaterPage.slotMsgApplicaionSaved.waitFor({ state: 'visible' })
        await this.finishLaterPage.slotMsgXIcon.click()
    }
}