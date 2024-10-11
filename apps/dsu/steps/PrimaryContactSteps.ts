import { expect, Page } from "@playwright/test"
import { PrimaryContactPage } from "../modules/PrimaryContactPage"
import path from "path"
import { RuntimeTestData } from "../../utils/RuntimeTestData"


export class PrimaryContactSteps {
    private readonly primaryContactPage: PrimaryContactPage
    private readonly page: Page

    constructor(page: Page) {
        this.primaryContactPage = new PrimaryContactPage(page)
        this.page = page
    }

    async inputRequiredFields(firstName: string, lastName: string, email: string, mobile: string) {
        await this.primaryContactPage.txtPrimaryContactPage.waitFor({state: 'visible'})
        await this.primaryContactPage.slotMsgXIcon.click()
        await this.primaryContactPage.txtFldFirstName.fill(firstName)
        await this.primaryContactPage.txtFldLastName.fill(lastName)
        await this.primaryContactPage.txtFldEmailAddress.fill(email)
        await this.primaryContactPage.txtFldMobile.fill(mobile)
    }

    async inputOptionalFields(preferredName: string, phone: string, role: string) {
        await this.primaryContactPage.txtFldPreferredName.fill(preferredName)
        await this.primaryContactPage.txtFldPhone.fill(phone)
        await this.primaryContactPage.dropDownRole.click()
        await this.primaryContactPage.getRoleOption(role).click()
    }

    async clickNext() {
        await this.primaryContactPage.btnNext.click()
    }

    async uploadFiles(filePath: string) {
        const fileChooserPromise = this.primaryContactPage.page.waitForEvent('filechooser');
        await this.primaryContactPage.btnUploadFiles.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join(process.cwd(), `apps/dsu/data/${filePath}`));
        await this.primaryContactPage.getPassportFilename(filePath).waitFor({state: 'visible'})
    }

    async getPrimaryContactData() {
        // get selected role text
        await this.primaryContactPage.txtPrimaryContactPage.waitFor({state: 'visible'})
        await this.primaryContactPage.dropDownRole.click()
        await this.primaryContactPage.selectedRole.waitFor({state: 'visible'})
        const role = await this.primaryContactPage.selectedRole.textContent()
        await this.primaryContactPage.txtFldFirstName.click()
        
        return {
            firstName: await this.primaryContactPage.txtFldFirstName.inputValue(),
            lastName: await this.primaryContactPage.txtFldLastName.inputValue(),
            email: await this.primaryContactPage.txtFldEmailAddress.inputValue(),
            mobile: await this.primaryContactPage.txtFldMobile.inputValue(),
            preferredName: await this.primaryContactPage.txtFldPreferredName.inputValue(),
            phone: await this.primaryContactPage.txtFldPhone.inputValue(),
            role: role
        }
    }

    async verifyPrimaryContactData() {
        const primaryContactData = await this.getPrimaryContactData()
        expect(primaryContactData).toEqual(RuntimeTestData.get('expPrimaryContactData'))
    }

    async verifyInPrimaryContactPage() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.primaryContactPage.txtPrimaryContactPage.waitFor({state: 'visible'})
        await this.primaryContactPage.txtFldFirstName.waitFor({state: 'visible'})
    }
}