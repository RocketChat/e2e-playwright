import { expect, test } from '@playwright/test';
import fixtures from '../../../fixtures/marketplace/marketplace.json';
import locator from '../../../locators/marketplace.json';
import {
  confirmPurchase,
  goToMarketplace,
  searchAppExplore,
  searchAppInstalled,
  unistallAppAPI,
} from '../../../support/marketplace/marketplace';
import { login } from '../../../support/users/user';

test.describe('Install Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  /**
   * @jira AECO-261
   */
  test.skip('Install - Anonymizer - Outside menu @bug', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.anonymizer);
    await searchAppExplore(page, fixtures.appName.anonymizer);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.anonymizer} installed`
    );
    await searchAppInstalled(page, fixtures.appName.anonymizer);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.anonymizer} Enabled` })
    ).toBeVisible();
  });

  /**
   * @jira AECO-261
   */
  test.skip('Install - Anonymizer - Inside menu @bug', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.anonymizer);
    await searchAppExplore(page, fixtures.appName.anonymizer);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.anonymizer })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.anonymizer} installed`
    );
    await searchAppInstalled(page, fixtures.appName.anonymizer);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.anonymizer} Enabled` })
    ).toBeVisible();
  });

  test('Install - Anti Bots - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.antiBots);
    await searchAppExplore(page, fixtures.appName.antiBots);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.antiBots} installed`
    );
    await searchAppInstalled(page, fixtures.appName.antiBots);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.antiBots} Enabled` })
    ).toBeVisible();
  });

  test('Install - Anti Bots - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.antiBots);
    await searchAppExplore(page, fixtures.appName.antiBots);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.antiBots })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.antiBots} installed`
    );
    await searchAppInstalled(page, fixtures.appName.antiBots);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.antiBots} Enabled` })
    ).toBeVisible();
  });

  test('Install - Basketball FRVR - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.basketballFRVR);
    await searchAppExplore(page, fixtures.appName.basketballFRVR);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.basketballFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.basketballFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.basketballFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Basketball FRVR - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.basketballFRVR);
    await searchAppExplore(page, fixtures.appName.basketballFRVR);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.basketballFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.basketballFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.basketballFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.basketballFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Big Blue Button - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.bigBlueButton);
    await searchAppExplore(page, fixtures.appName.bigBlueButton);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.bigBlueButton} installed`
    );
    await searchAppInstalled(page, fixtures.appName.bigBlueButton);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.bigBlueButton} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Big blue button - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.bigBlueButton);
    await searchAppExplore(page, fixtures.appName.bigBlueButton);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.bigBlueButton })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.bigBlueButton} installed`
    );
    await searchAppInstalled(page, fixtures.appName.bigBlueButton);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.bigBlueButton} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Botpress Connect - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.botpressConnect);
    await searchAppExplore(page, fixtures.appName.botpressConnect);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.botpressConnect} installed`
    );
    await searchAppInstalled(page, fixtures.appName.botpressConnect);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.botpressConnect} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Botpress Connect - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.botpressConnect);
    await searchAppExplore(page, fixtures.appName.botpressConnect);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.botpressConnect })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.botpressConnect} installed`
    );
    await searchAppInstalled(page, fixtures.appName.botpressConnect);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.botpressConnect} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Brazilian Zip Code Lookup - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.brazilianZipCodeLookup);
    await searchAppExplore(page, fixtures.appName.brazilianZipCodeLookup);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.brazilianZipCodeLookup} installed`
    );
    await searchAppInstalled(page, fixtures.appName.brazilianZipCodeLookup);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.brazilianZipCodeLookup} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Brazilian Zip Code Lookup - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.brazilianZipCodeLookup);
    await searchAppExplore(page, fixtures.appName.brazilianZipCodeLookup);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.brazilianZipCodeLookup })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.brazilianZipCodeLookup} installed`
    );
    await searchAppInstalled(page, fixtures.appName.brazilianZipCodeLookup);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.brazilianZipCodeLookup} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Broadcaster - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.broadcaster);
    await searchAppExplore(page, fixtures.appName.broadcaster);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.broadcaster} installed`
    );
    await searchAppInstalled(page, fixtures.appName.broadcaster);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.broadcaster} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Broadcaster - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.broadcaster);
    await searchAppExplore(page, fixtures.appName.broadcaster);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.broadcaster })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.broadcaster} installed`
    );
    await searchAppInstalled(page, fixtures.appName.broadcaster);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.broadcaster} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Collaboard - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.collaboard);
    await searchAppExplore(page, fixtures.appName.collaboard);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.collaboard} installed`
    );
    await searchAppInstalled(page, fixtures.appName.collaboard);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.collaboard} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Collaboard - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.collaboard);
    await searchAppExplore(page, fixtures.appName.collaboard);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.collaboard })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.collaboard} installed`
    );
    await searchAppInstalled(page, fixtures.appName.collaboard);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.collaboard} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Content Filter - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.contentFilter);
    await searchAppExplore(page, fixtures.appName.contentFilter);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.contentFilter} installed`
    );
    await searchAppInstalled(page, fixtures.appName.contentFilter);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.contentFilter} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Content Filter - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.contentFilter);
    await searchAppExplore(page, fixtures.appName.contentFilter);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.contentFilter })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.contentFilter} installed`
    );
    await searchAppInstalled(page, fixtures.appName.contentFilter);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.contentFilter} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - CryptoVert - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.cryptoVert);
    await searchAppExplore(page, fixtures.appName.cryptoVert);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.cryptoVert} installed`
    );
    await searchAppInstalled(page, fixtures.appName.cryptoVert);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.cryptoVert} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - CryptoVert - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.cryptoVert);
    await searchAppExplore(page, fixtures.appName.cryptoVert);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.cryptoVert })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.cryptoVert} installed`
    );
    await searchAppInstalled(page, fixtures.appName.cryptoVert);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.cryptoVert} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Cukoo Reminder - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.cukooReminder);
    await searchAppExplore(page, fixtures.appName.cukooReminder);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.cukooReminder} installed`
    );
    await searchAppInstalled(page, fixtures.appName.cukooReminder);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.cukooReminder} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Cukoo Reminder - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.cukooReminder);
    await searchAppExplore(page, fixtures.appName.cukooReminder);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.cukooReminder })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.cukooReminder} installed`
    );
    await searchAppInstalled(page, fixtures.appName.cukooReminder);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.cukooReminder} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Darts FRVR - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dartsFRVR);
    await searchAppExplore(page, fixtures.appName.dartsFRVR);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dartsFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dartsFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dartsFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Darts FRVR - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dartsFRVR);
    await searchAppExplore(page, fixtures.appName.dartsFRVR);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.dartsFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dartsFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dartsFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dartsFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Dialogflow - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dialogflow);
    await searchAppExplore(page, fixtures.appName.dialogflow);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dialogflow} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dialogflow);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dialogflow} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Dialogflow - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dialogflow);
    await searchAppExplore(page, fixtures.appName.dialogflow);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.dialogflow })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dialogflow} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dialogflow);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dialogflow} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Dropbox Paper - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dropboxPaper);
    await searchAppExplore(page, fixtures.appName.dropboxPaper);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dropboxPaper} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dropboxPaper);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dropboxPaper} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Dropbox Paper - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.dropboxPaper);
    await searchAppExplore(page, fixtures.appName.dropboxPaper);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.dropboxPaper })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.dropboxPaper} installed`
    );
    await searchAppInstalled(page, fixtures.appName.dropboxPaper);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.dropboxPaper} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - GIPHY - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.giphy);
    await searchAppExplore(page, fixtures.appName.giphy);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.giphy} installed`
    );
    await searchAppInstalled(page, fixtures.appName.giphy);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.giphy} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - GIPHY - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.giphy);
    await searchAppExplore(page, fixtures.appName.giphy);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.giphy })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.giphy} installed`
    );
    await searchAppInstalled(page, fixtures.appName.giphy);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.giphy} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Github - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.github);
    await searchAppExplore(page, fixtures.appName.github);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.github} installed`
    );
    await searchAppInstalled(page, fixtures.appName.github);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.github} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Github - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.github);
    await searchAppExplore(page, fixtures.appName.github);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.github })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.github} installed`
    );
    await searchAppInstalled(page, fixtures.appName.github);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.github} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - GitLab - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.gitlab);
    await searchAppExplore(page, fixtures.appName.gitlab);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.gitlab} installed`
    );
    await searchAppInstalled(page, fixtures.appName.gitlab);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.gitlab} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - GitLab - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.gitlab);
    await searchAppExplore(page, fixtures.appName.gitlab);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.gitlab })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.gitlab} installed`
    );
    await searchAppInstalled(page, fixtures.appName.gitlab);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.gitlab} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Gold Digger FRVR - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.goldDiggerFRVR);
    await searchAppExplore(page, fixtures.appName.goldDiggerFRVR);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.goldDiggerFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.goldDiggerFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.goldDiggerFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Gold Digger FRVR - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.goldDiggerFRVR);
    await searchAppExplore(page, fixtures.appName.goldDiggerFRVR);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.goldDiggerFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.goldDiggerFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.goldDiggerFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.goldDiggerFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Hex FRVR - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.hexFRVR);
    await searchAppExplore(page, fixtures.appName.hexFRVR);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.hexFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.hexFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.hexFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Hex FRVR - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.hexFRVR);
    await searchAppExplore(page, fixtures.appName.hexFRVR);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.hexFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.hexFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.hexFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.hexFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Hubspot CRM Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.hubspotCRMIntegration);
    await searchAppExplore(page, fixtures.appName.hubspotCRMIntegration);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.hubspotCRMIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.hubspotCRMIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.hubspotCRMIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Hubspot CRM Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.hubspotCRMIntegration);
    await searchAppExplore(page, fixtures.appName.hubspotCRMIntegration);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.hubspotCRMIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.hubspotCRMIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.hubspotCRMIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.hubspotCRMIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - icanhazdadjoke - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.icanhazdadjoke);
    await searchAppExplore(page, fixtures.appName.icanhazdadjoke);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.icanhazdadjoke} installed`
    );
    await searchAppInstalled(page, fixtures.appName.icanhazdadjoke);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.icanhazdadjoke} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - icanhazdadjoke - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.icanhazdadjoke);
    await searchAppExplore(page, fixtures.appName.icanhazdadjoke);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.icanhazdadjoke })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.icanhazdadjoke} installed`
    );
    await searchAppInstalled(page, fixtures.appName.icanhazdadjoke);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.icanhazdadjoke} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Imgur - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.imgur);
    await searchAppExplore(page, fixtures.appName.imgur);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.imgur} installed`
    );
    await searchAppInstalled(page, fixtures.appName.imgur);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.imgur} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Imgur - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.imgur);
    await searchAppExplore(page, fixtures.appName.imgur);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.imgur })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.imgur} installed`
    );
    await searchAppInstalled(page, fixtures.appName.imgur);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.imgur} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jenkins Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.jenkinsIntegration);
    await searchAppExplore(page, fixtures.appName.jenkinsIntegration);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.jenkinsIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.jenkinsIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.jenkinsIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jenkins Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.jenkinsIntegration);
    await searchAppExplore(page, fixtures.appName.jenkinsIntegration);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.jenkinsIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.jenkinsIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.jenkinsIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.jenkinsIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmart);
    await searchAppExplore(page, fixtures.appName.ligeroSmart);
    await page.getByTestId(locator.testId.menuSingleApp).nth(1).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmart} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmart);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmart} Enabled`,
        exact: true,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmart);
    await searchAppExplore(page, fixtures.appName.ligeroSmart);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.ligeroSmart })
      .nth(1)
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmart} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmart);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmart} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart Botpress - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmartBotpress);
    await searchAppExplore(page, fixtures.appName.ligeroSmartBotpress);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmartBotpress} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmartBotpress);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmartBotpress} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart Botpress - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmartBotpress);
    await searchAppExplore(page, fixtures.appName.ligeroSmartBotpress);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.ligeroSmartBotpress })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmartBotpress} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmartBotpress);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmartBotpress} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart Whatsapp - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmartWhatsapp);
    await searchAppExplore(page, fixtures.appName.ligeroSmartWhatsapp);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmartWhatsapp} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmartWhatsapp);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmartWhatsapp} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - LigeroSmart Whatsapp - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.ligeroSmartWhatsapp);
    await searchAppExplore(page, fixtures.appName.ligeroSmartWhatsapp);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.ligeroSmartWhatsapp })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.ligeroSmartWhatsapp} installed`
    );
    await searchAppInstalled(page, fixtures.appName.ligeroSmartWhatsapp);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.ligeroSmartWhatsapp} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Math - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.math);
    await searchAppExplore(page, fixtures.appName.math);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.math} installed`
    );
    await searchAppInstalled(page, fixtures.appName.math);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.math} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Math - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.math);
    await searchAppExplore(page, fixtures.appName.math);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.math })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.math} installed`
    );
    await searchAppInstalled(page, fixtures.appName.math);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.math} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - MemeBuddy - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.memeBuddy);
    await searchAppExplore(page, fixtures.appName.memeBuddy);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.memeBuddy} installed`
    );
    await searchAppInstalled(page, fixtures.appName.memeBuddy);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.memeBuddy} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - MemeBuddy - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.memeBuddy);
    await searchAppExplore(page, fixtures.appName.memeBuddy);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.memeBuddy })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.memeBuddy} installed`
    );
    await searchAppInstalled(page, fixtures.appName.memeBuddy);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.memeBuddy} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Microsoft Teams - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.microsoftTeams);
    await searchAppExplore(page, fixtures.appName.microsoftTeams);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.microsoftTeams} installed`
    );
    await searchAppInstalled(page, fixtures.appName.microsoftTeams);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.microsoftTeams} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Microsoft Teams - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.microsoftTeams);
    await searchAppExplore(page, fixtures.appName.microsoftTeams);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.microsoftTeams })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.microsoftTeams} installed`
    );
    await searchAppInstalled(page, fixtures.appName.microsoftTeams);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.microsoftTeams} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - npm Tools - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.npmTools);
    await searchAppExplore(page, fixtures.appName.npmTools);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);

    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.npmTools} installed`
    );
    await searchAppInstalled(page, fixtures.appName.npmTools);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.npmTools} Enabled` })
    ).toBeVisible();
  });

  test('Install - npm Tools - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.npmTools);
    await searchAppExplore(page, fixtures.appName.npmTools);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.npmTools })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.npmTools} installed`
    );
    await searchAppInstalled(page, fixtures.appName.npmTools);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.npmTools} Enabled` })
    ).toBeVisible();
  });

  test('Install - NUITEQ Stage - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.nUITEQStage);
    await searchAppExplore(page, fixtures.appName.nUITEQStage);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.nUITEQStage} installed`
    );
    await searchAppInstalled(page, fixtures.appName.nUITEQStage);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.nUITEQStage} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - NUITEQ Stage - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.nUITEQStage);
    await searchAppExplore(page, fixtures.appName.nUITEQStage);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.nUITEQStage })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.nUITEQStage} installed`
    );
    await searchAppInstalled(page, fixtures.appName.nUITEQStage);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.nUITEQStage} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Out of Office Responder - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.outOfOfficeResponder);
    await searchAppExplore(page, fixtures.appName.outOfOfficeResponder);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.outOfOfficeResponder} installed`
    );
    await searchAppInstalled(page, fixtures.appName.outOfOfficeResponder);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.outOfOfficeResponder} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Out of Office Responder - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.outOfOfficeResponder);
    await searchAppExplore(page, fixtures.appName.outOfOfficeResponder);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.outOfOfficeResponder })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.outOfOfficeResponder} installed`
    );
    await searchAppInstalled(page, fixtures.appName.outOfOfficeResponder);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.outOfOfficeResponder} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Pinball FRVR - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pinballFRVR);
    await searchAppExplore(page, fixtures.appName.pinballFRVR);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pinballFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pinballFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pinballFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Pinball FRVR - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pinballFRVR);
    await searchAppExplore(page, fixtures.appName.pinballFRVR);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.pinballFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pinballFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pinballFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pinballFRVR} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Poll - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.poll);
    await searchAppExplore(page, fixtures.appName.poll);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.poll} installed`
    );
    await searchAppInstalled(page, fixtures.appName.poll);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.poll} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Poll - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.poll);
    await searchAppExplore(page, fixtures.appName.poll);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.poll })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.poll} installed`
    );
    await searchAppInstalled(page, fixtures.appName.poll);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.poll} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Poll Plus - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pollPlus);
    await searchAppExplore(page, fixtures.appName.pollPlus);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pollPlus} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pollPlus);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pollPlus} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Poll Plus - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pollPlus);
    await searchAppExplore(page, fixtures.appName.pollPlus);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.pollPlus })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pollPlus} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pollPlus);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pollPlus} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Progess Bar - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.progressBar);
    await searchAppExplore(page, fixtures.appName.progressBar);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.progressBar} installed`
    );
    await searchAppInstalled(page, fixtures.appName.progressBar);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.progressBar} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Progess Bar - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.progressBar);
    await searchAppExplore(page, fixtures.appName.progressBar);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.progressBar })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.progressBar} installed`
    );
    await searchAppInstalled(page, fixtures.appName.progressBar);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.progressBar} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Push Channel - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pushChannel);
    await searchAppExplore(page, fixtures.appName.pushChannel);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pushChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pushChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pushChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Push Channel - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.pushChannel);
    await searchAppExplore(page, fixtures.appName.pushChannel);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.pushChannel })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.pushChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.pushChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.pushChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - QR Code Generator - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.qrCodeGenerator);
    await searchAppExplore(page, fixtures.appName.qrCodeGenerator);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.qrCodeGenerator} installed`
    );
    await searchAppInstalled(page, fixtures.appName.qrCodeGenerator);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.qrCodeGenerator} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - QR Code Generator - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.qrCodeGenerator);
    await searchAppExplore(page, fixtures.appName.qrCodeGenerator);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.qrCodeGenerator })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.qrCodeGenerator} installed`
    );
    await searchAppInstalled(page, fixtures.appName.qrCodeGenerator);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.qrCodeGenerator} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - RapidPro Channel - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.rapidProChannel);
    await searchAppExplore(page, fixtures.appName.rapidProChannel);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rapidProChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rapidProChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rapidProChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - RapidPro Channel - Inside menu', async ({
    page,
    request,
  }) => {
    await searchAppExplore(page, fixtures.appName.rapidProChannel);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.rapidProChannel })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rapidProChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rapidProChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rapidProChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Rasa - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.rasa);
    await searchAppExplore(page, fixtures.appName.rasa);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rasa} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rasa);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rasa} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Rasa - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.rasa);
    await searchAppExplore(page, fixtures.appName.rasa);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.rasa })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rasa} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rasa);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rasa} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - rc-trending - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.rcTrending);
    await searchAppExplore(page, fixtures.appName.rcTrending);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rcTrending} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rcTrending);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rcTrending} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - rc-trending - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.rcTrending);
    await searchAppExplore(page, fixtures.appName.rcTrending);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.rcTrending })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.rcTrending} installed`
    );
    await searchAppInstalled(page, fixtures.appName.rcTrending);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.rcTrending} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Reminder Bot - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.reminderBot);
    await searchAppExplore(page, fixtures.appName.reminderBot);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.reminderBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.reminderBot);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.reminderBot} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Reminder Bot - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.reminderBot);
    await searchAppExplore(page, fixtures.appName.reminderBot);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.reminderBot })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.reminderBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.reminderBot);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.reminderBot} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Salesforce CRM Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.salesforceCRMIntegration);
    await searchAppExplore(page, fixtures.appName.salesforceCRMIntegration);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.salesforceCRMIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.salesforceCRMIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.salesforceCRMIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Salesforce CRM Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.salesforceCRMIntegration);
    await searchAppExplore(page, fixtures.appName.salesforceCRMIntegration);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.salesforceCRMIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.salesforceCRMIntegration} installed`
    );
    await searchAppInstalled(page, fixtures.appName.salesforceCRMIntegration);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.salesforceCRMIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Search - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.search);
    await searchAppExplore(page, fixtures.appName.search);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.search} installed`
    );
    await searchAppInstalled(page, fixtures.appName.search);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.search} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Search - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.search);
    await searchAppExplore(page, fixtures.appName.search);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.search })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.search} installed`
    );
    await searchAppInstalled(page, fixtures.appName.search);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.search} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Slackline - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.slackline);
    await searchAppExplore(page, fixtures.appName.slackline);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.slackline} installed`
    );
    await searchAppInstalled(page, fixtures.appName.slackline);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.slackline} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Slackline - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.slackline);
    await searchAppExplore(page, fixtures.appName.slackline);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.slackline })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.slackline} installed`
    );
    await searchAppInstalled(page, fixtures.appName.slackline);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.slackline} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Start Push Flow - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.startPushFlow);
    await searchAppExplore(page, fixtures.appName.startPushFlow);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.startPushFlow} installed`
    );
    await searchAppInstalled(page, fixtures.appName.startPushFlow);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.startPushFlow} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Start Push Flow - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.startPushFlow);
    await searchAppExplore(page, fixtures.appName.startPushFlow);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.startPushFlow })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.startPushFlow} installed`
    );
    await searchAppInstalled(page, fixtures.appName.startPushFlow);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.startPushFlow} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Tenor - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.tenor);
    await searchAppExplore(page, fixtures.appName.tenor);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.tenor} installed`
    );
    await searchAppInstalled(page, fixtures.appName.tenor);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.tenor} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Tenor - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.tenor);
    await searchAppExplore(page, fixtures.appName.tenor);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.tenor })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.tenor} installed`
    );
    await searchAppInstalled(page, fixtures.appName.tenor);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.tenor} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - TextIt Channel - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.textltChannel);
    await searchAppExplore(page, fixtures.appName.textltChannel);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.textltChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.textltChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.textltChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - TextIt Channel - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.textltChannel);
    await searchAppExplore(page, fixtures.appName.textltChannel);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.textltChannel })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.textltChannel} installed`
    );
    await searchAppInstalled(page, fixtures.appName.textltChannel);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.textltChannel} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Timax - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.timax);
    await searchAppExplore(page, fixtures.appName.timax);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.timax} installed`
    );
    await searchAppInstalled(page, fixtures.appName.timax);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.timax} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Timax - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.timax);
    await searchAppExplore(page, fixtures.appName.timax);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.timax })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.timax} installed`
    );
    await searchAppInstalled(page, fixtures.appName.timax);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.timax} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - WebEx Meeting - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.webExMeeting);
    await searchAppExplore(page, fixtures.appName.webExMeeting);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.webExMeeting} installed`
    );
    await searchAppInstalled(page, fixtures.appName.webExMeeting);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.webExMeeting} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - WebEx Meeting - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.webExMeeting);
    await searchAppExplore(page, fixtures.appName.webExMeeting);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.webExMeeting })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.webExMeeting} installed`
    );
    await searchAppInstalled(page, fixtures.appName.webExMeeting);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.webExMeeting} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Welcome Bot - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.welcomeBot);
    await searchAppExplore(page, fixtures.appName.welcomeBot);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.welcomeBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.welcomeBot);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.welcomeBot} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Welcome Bot - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.welcomeBot);
    await searchAppExplore(page, fixtures.appName.welcomeBot);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.welcomeBot })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await expect(page.locator(locator.class.toast).first()).toHaveText(
      `${fixtures.appName.welcomeBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.welcomeBot);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.welcomeBot} Enabled`,
      })
    ).toBeVisible();
  });
  test.only('Install - WhatsApp Sandbox - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.whatsappSandbox);
    await searchAppExplore(page, fixtures.appName.whatsappSandbox);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.whatsappSandbox);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.whatsappSandbox} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });

  test.only('Install - WhatsApp Sandbox - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.whatsappSandbox);
    await searchAppExplore(page, fixtures.appName.whatsappSandbox);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.whatsappSandbox })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.whatsappSandbox);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.whatsappSandbox} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });

  test('Install - WhatsApp Tickets - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.whatsappTickets);
    await searchAppExplore(page, fixtures.appName.whatsappTickets);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();

    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.whatsappTickets);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.whatsappTickets} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });

  test('Install - WhatsApp Tickets - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.whatsappTickets);
    await searchAppExplore(page, fixtures.appName.whatsappTickets);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.whatsappTickets })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.whatsappTickets);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.whatsappTickets} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });

  test('Install - Word Replacer - Outside menu', async ({ page, request }) => {
    test.setTimeout(120000);
    await unistallAppAPI(request, fixtures.appId.wordReplacer);
    await searchAppExplore(page, fixtures.appName.wordReplacer);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.wordReplacer);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.wordReplacer} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Word Replacer - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.wordReplacer);
    await searchAppExplore(page, fixtures.appName.wordReplacer);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.wordReplacer })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.wordReplacer);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.wordReplacer} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - YouTrack Linker - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.youTrackLinker);
    await searchAppExplore(page, fixtures.appName.youTrackLinker);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.youTrackLinker);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.youTrackLinker} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });

  test('Install - YouTrack Linker - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.youTrackLinker);
    await searchAppExplore(page, fixtures.appName.youTrackLinker);
    await page
      .locator(locator.link.appLink)
      .filter({ hasText: fixtures.appName.youTrackLinker })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await confirmPurchase(page);
    const responsePromise = await page.waitForResponse(
      `${process.env.URL}/api/apps/`
    );
    const response = await responsePromise;
    await searchAppInstalled(page, fixtures.appName.youTrackLinker);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.youTrackLinker} Enabled`,
      })
    ).toBeVisible({ timeout: 10000 });
  });
});
