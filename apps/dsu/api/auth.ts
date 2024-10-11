import { expect, request } from '@playwright/test'
import config from '../playwright.config.ts';

export class API {
  static async auth() {
    const context = await request.newContext({
      baseURL: 'https://test.salesforce.com',
    })

    const response = await context.post('/services/oauth2/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        grant_type: 'password',
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
        username: config.SF_USERNAME,
        password: config.SF_PASSWORD,
      },
    })

    const responseBody = await response.json()
    if (response.status() !== 200) {
      console.log( responseBody)
    }
    expect(response.status()).toBe(200)
    config.ACCESS_TOKEN = responseBody.access_token
    config.INSTANCE_URL = responseBody.instance_url
    return {
      access_token: responseBody.access_token,
      instance_url: responseBody.instance_url,
    }
  }
}
