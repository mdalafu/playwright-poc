import { test } from '../fixtures/fixtures';
import config from '../playwright.config.ts';

test.beforeEach( async ({page, commonProcess}) => {
  await page.goto(config.DSU_URL)
  await commonProcess.startSDApplicatoin()
})

test('verify application status in SF after sign up fc: true', {tag: '@'}, async ({commonProcess, apiSteps, thankyouSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await commonProcess.completeReference('test business', 'test first', 'test last', '0212345678')
  await commonProcess.completeBusinessDetailsSameDelivery('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'No')
  await commonProcess.verifyPCAuthorisedContact('auto test test last')
  await commonProcess.completeContactInvoice('auto test test last')
  await commonProcess.completeNoRewards(true, true)
  await commonProcess.acceptTncAndSignup()
  await thankyouSteps.verifyApplicationCompleted()
  await apiSteps.verifyApplicationStatus('foodies.wholesale.tester@gmail.com', 'Completed')
})

test('verify application status in SF after sign up: fc false', async ({commonProcess, thankyouSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await commonProcess.completeReference('test business', 'test first', 'test last', '0212345678')
  await commonProcess.completeBusinessDetailsSameDelivery('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'No')
  await commonProcess.verifyPCAuthorisedContact('auto test test last')
  await commonProcess.completeContactInvoice('auto test test last')
  await commonProcess.completeNoRewards(true, false)
  await commonProcess.acceptTncAndSignup()
  await thankyouSteps.verifyApplicationCompleted()
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
  await commonProcess.inputPrimaryContact('auto test', 'test last', 'foodies.wholesale.tester4@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await finishLaterSteps.clickFinishLater()
  await finishLaterSteps.verifyDetailsInModal()
  await finishLaterSteps.clickClose()
})

test('verify saved progress in credit reference should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester4@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await commonProcess.addReference('test business', 'test first', 'test last', '0212345678')
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyCreditReferenceData()
})

test('verify saved progress in account contact should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester5@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await commonProcess.completeReference('test business', 'test first', 'test last', '0212345678')
  await commonProcess.completeBusinessDetailsSameDelivery('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'No')
  await commonProcess.verifyPCAuthorisedContact()
  await commonProcess.selectContactInvoice('auto test test last')
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyAccountContactData()
})


test('verify saved progress in rewards page should be correct', {tag: '@'}, async ({commonProcess, resumeSteps}) => {
  await commonProcess.searchNzbn('Banks')
  await commonProcess.completePrimaryContact('auto test', 'test last', 'foodies.wholesale.tester5@gmail.com', '0221763211', 'testttt', '0212345678', 'Baker', 'passport.png')
  await commonProcess.completeReference('test business', 'test first', 'test last', '0212345678')
  await commonProcess.completeBusinessDetailsSameDelivery('3 Roma Road, Mount Roskill', 'Fast Food & QSR', 'Pizza', 'No', 'No')
  await commonProcess.verifyPCAuthorisedContact()
  await commonProcess.completeContactInvoice('auto test test last')
  await commonProcess.selectAPRewards('SD Airpoints', '60143521', true, true)
  await commonProcess.saveProgress()
  await commonProcess.openResumeLink()

  await resumeSteps.verifyAllSDData()
})
