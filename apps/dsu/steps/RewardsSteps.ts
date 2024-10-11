import { expect, Page } from "@playwright/test"
import { RewardsPage } from "../modules/RewardsPage"
import { RuntimeTestData } from "../../utils/RuntimeTestData"


export class RewardsSteps {
    private readonly rewardsPage: RewardsPage

    constructor(page: Page) {
        this.rewardsPage = new RewardsPage(page)
    }

    async selectRewards(option: string) {
        await this.rewardsPage.txtRewardsPage.waitFor({state: 'visible'})
        await this.rewardsPage.getRewardsOption(option).click()
    }
    
    async clickEmailDeals() {
        await this.rewardsPage.spanEmailDeals.click()
    }

    async clickFreshConnection() { 
        await this.rewardsPage.spanFreshConnection.click()
    }

    async clickNext() {
        await this.rewardsPage.btnNext.click()
    }

    async inputAirpoints(name: string, number: string) {
        await this.rewardsPage.txtFldCardholderName.fill(name)
        await this.rewardsPage.txtFldAirpointsNumber.fill(number)
    }

    async clickAuthoriseAirpoints() {
        await this.rewardsPage.spanAuthoriseAirpoints.click()
    }

    async getAirpointsData(){
        return {
            name: await this.rewardsPage.txtFldCardholderName.inputValue(),
            number: await this.rewardsPage.txtFldAirpointsNumber.inputValue(),
            isAuthorised: await this.rewardsPage.chkbxAuthoriseAirpoints.isChecked(),
            isSignUp: await this.rewardsPage.chkbxEmailDeals.isChecked(),
        }
    }

    async verifyAPRewardsData() {
        expect(RuntimeTestData.get('expAirpointsData')).toEqual(await this.getAirpointsData())
    }
}