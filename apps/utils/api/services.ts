import { APIResponse, expect, request } from '@playwright/test'
import config from '../../../playwright.config'
import { API } from './auth'

export class Services {
  static async delete(
    type: string,
    id: string,
    statusExpected: number = 204,
  ): Promise<boolean> {
    const context = await Services.setAuth()
    const response = await context.delete(
      `/services/data/v60.0/sobjects/${type}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${config.ACCESS_TOKEN}`,
        },
      },
    )
    const status = response.status()
    return status === statusExpected
  }

  static async postPatch(
    url: string,
    body: unknown,
    statusExpected: number = 201,
    type: string = 'post',
  ) {
    const context = await Services.setAuth()
    let response: APIResponse
    if (type.toLowerCase() === 'patch') {
      response = await context.patch(`/services/data/v60.0${url}`, {
        headers: {
          Authorization: `Bearer ${config.ACCESS_TOKEN}`,
        },
        data: body,
      })
    } else if (type.toLowerCase() === 'apex') {
      response = await context.post(`/services/apexrest/${url}`, {
        headers: {
          Authorization: `Bearer ${config.ACCESS_TOKEN}`,
        },
        data: body,
      })
    } else
      response = await context.post(`/services/data/v60.0${url}`, {
        headers: {
          Authorization: `Bearer ${config.ACCESS_TOKEN}`,
        },
        data: body,
      })

    if (response.status() !== statusExpected || response.status() === 400) {
      const responseBody = await response.json()
      console.error(
        `Error: Expected status ${statusExpected} but received ${response.status()}`,
      )
      console.error(`Response Body: ${JSON.stringify(responseBody)}`)
      return responseBody
    }

    expect(response.status()).toBe(statusExpected)
    if (type === 'post' || type === 'apex') {
      console.log('POST', url, body, response.status(), await response.json())
      return await response.json()
    }
    return true
  }

  static async get(query: string, statusExpected: number) {
    const context = await Services.setAuth()
    const response = await context.get(`/services/data/v60.0/${query}`, {
      headers: {
        Authorization: `Bearer ${config.ACCESS_TOKEN}`,
      },
    })
    const responseBody = await response.json()
    if (response.status() !== statusExpected) console.log(responseBody)
    expect(response.status()).toBe(statusExpected)
    return responseBody
  }

  private static async setAuth() {
    if (!config.ACCESS_TOKEN) await API.auth()
    return await request.newContext({
      baseURL: config.INSTANCE_URL,
    })
  }
  
}
