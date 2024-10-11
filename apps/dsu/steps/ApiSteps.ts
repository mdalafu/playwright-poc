import { expect } from "@playwright/test"
import { Services } from "../api/services"


export class ApiSteps {

    async getApplicationDetails(email: string) {
        const query = `query/?q=select DS_Status__c, DS_EncryptedId__c from DS_Application__c where DS_Applicant__r.email = '${email}' order by CreatedDate desc limit 10`
        return await Services.get(query, 200)
    }

    async verifyApplicationStatus(email: string, expectedStatus: string) {
        let status = "";
        const start = Date.now();
        const end = start + 25000;
    
        while (status !== "Completed") {
            const response = await this.getApplicationDetails(email);
            status = response.records[0].DS_Status__c;
            if (Date.now() > end) {
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 1000)); 
        }
    
        expect(status, `Application status did not reach ${expectedStatus} within 25 seconds`).toBe(expectedStatus);
    }
    
    async getResumeApplication(id: string) {
        const query = `query/?q=select id, DS_HasSendResumeLinkEmail__c, DS_ResumeLink__c  from DS_Application_Resume__c where DS_Application__r.DS_EncryptedId__c ='${id}'`
        return await Services.get(query, 200)
    }

    async getApplicationId(email: string) {
        const response = await this.getApplicationDetails(email)
        return response.records[0].DS_EncryptedId__c
    }

    async getResumeLink(email: string) {
        const id = await this.getApplicationId(email)
        const response = await this.getResumeApplication(id)
        return  { 
            link: response.records[0].DS_ResumeLink__c,
            id: response.records[0].Id
        }
    }

    async getResumeSMS(id: string) {
        const query = `query/?q=select Subject, Description from Task where What.id = '${id}' and txtinit__SMS_Type__c = 'Outbound' order by CreatedDate desc limit 1`
        return await Services.get(query, 200)
    }

    async getResumeCode(id: string) {
        const response = await this.getResumeSMS(id)
        const text = response.records[0].Description;

        let code = "";
        const regex = /\d+/;
        const regexMatcher = text.match(regex);
        if (regexMatcher) {
            code = regexMatcher[0];
        }
        return code;
    }
}