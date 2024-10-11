import { test } from '../fixtures/fixtures';
import config from '../playwright.config.ts';

test.beforeEach( async ({page, commonProcess}) => {
  await page.goto(config.DSU_URL)
  await commonProcess.startCNCApplication()
})

test('verify application status in SF after sign up', {tag: '@'}, async ({commonProcess, apiSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester0@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker')
  await commonProcess.completeBusinessDetails('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'No')
  await commonProcess.completeNoRewards(true, false)
  await commonProcess.acceptTncAndSignup()
  await commonProcess.upgradeToDelivery()

  await apiSteps.verifyApplicationStatus('foodies.wholesale.tester@gmail.com', 'Completed')
})

test.describe('verify nzbn search results', async () => {
  test('name: test', async ({nzbnPageSteps}) => {
    await nzbnPageSteps.searchNzbn('test')
    await nzbnPageSteps.verifyMatchSearchResults('test', 10)
  })

  test('partial name: testing limited', async ({nzbnPageSteps}) => {
    await nzbnPageSteps.searchNzbn('testing limited')
    await nzbnPageSteps.verifyMatchSearchResults('testing limited', 10)
  })

  test('partial nzbn: 942', async ({nzbnPageSteps}) => {
    await nzbnPageSteps.searchNzbn('942')
    await nzbnPageSteps.verifyMatchSearchResults('942', 10)
  })

  test('invalid nzbn', async ({nzbnPageSteps}) => {
    await nzbnPageSteps.searchNzbn('xxxxxxnoresultsxxxx')
    await nzbnPageSteps.verifyNoResults()
  })

})

test('verify details in modal should be correct', {tag: ''}, async ({commonProcess, finishLaterSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.inputPrimaryContact('auto test', 'test last', 'foodies.wholesale.tester@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker')
  await finishLaterSteps.clickFinishLater()
  await finishLaterSteps.verifyDetailsInModal()
  await finishLaterSteps.clickClose()
})

test('verify saved progress in primary contact should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.inputPrimaryContact('auto test', 'test last', 'foodies.wholesale.tester1@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker')
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyPrimaryContactData()
})

test('verify saved progress in business details should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester4@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker')
  await commonProcess.inputBusinessDetails('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'Pending')
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyBusinessDetailsData()
})

test('verify saved progress in rewards page should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester6@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker')
  await commonProcess.completeBusinessDetails('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'Pending')
  await commonProcess.selectAPRewards('CNC Airpoints', '60143520', true, true)
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyAllCNCData()
})
