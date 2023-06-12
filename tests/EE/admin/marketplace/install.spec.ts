import { test, expect } from '@playwright/test';
import { login } from '../support/user';
import {
  goToMarketplace,
  unistallAppAPI,
  searchAppExplore,
  searchAppInstalled,
} from './support/marketplace';
import fixtures from './fixtures/fixtures.json';
import locator from './locators/marketplace.json';

test.describe('Install Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  test('Install - Anonymizer - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.anonymizer);
    await searchAppExplore(page, fixtures.appName.anonymizer);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.anonymizer} installed`
    );
    await searchAppInstalled(page, fixtures.appName.anonymizer);
    await expect(
      page.getByRole('link', { name: `${fixtures.appName.anonymizer} Enabled` })
    ).toBeVisible();
  });

  test('Install - Anonymizer - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.anonymizer);
    await searchAppExplore(page, fixtures.appName.anonymizer);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.anonymizer })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
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
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
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
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.antiBots })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
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
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
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
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.basketballFRVR })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.basketballFRVR} installed`
    );
    await searchAppInstalled(page, fixtures.appName.basketballFRVR);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.basketballFRVR} Enabled`,
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
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.microsoftTeams} installed`
    );
    await searchAppInstalled(page, fixtures.appName.microsoftTeams);
    await expect(
      page.getByRole('link', { name: locator.link.apps.microsoftTeams })
    ).toBeVisible();
  });

  test('Install - Microsoft Teams - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.microsoftTeams);
    await searchAppExplore(page, fixtures.appName.microsoftTeams);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.microsoftTeams })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.microsoftTeams} installed`
    );
    await searchAppInstalled(page, fixtures.appName.microsoftTeams);
    await expect(
      page.getByRole('link', { name: locator.link.apps.microsoftTeams })
    ).toBeVisible();
  });

  test('Install - Github - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.github);
    await searchAppExplore(page, fixtures.appName.github);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.github} installed`
    );
    await searchAppInstalled(page, fixtures.appName.github);
    await expect(
      page.getByRole('link', { name: locator.link.apps.github })
    ).toBeVisible();
  });

  test('Install - Github - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.github);
    await searchAppExplore(page, fixtures.appName.github);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.github })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.github} installed`
    );
    await searchAppInstalled(page, fixtures.appName.github);
    await expect(
      page.getByRole('link', { name: locator.link.apps.github })
    ).toBeVisible();
  });

  test('Install - Reminder Bot - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.reminderBot);
    await searchAppExplore(page, fixtures.appName.reminderBot);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.reminderBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.reminderBot);
    await expect(
      page.getByRole('link', { name: locator.link.apps.reminderBot })
    ).toBeVisible();
  });

  test('Install - Reminder Bot - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.reminderBot);
    await searchAppExplore(page, fixtures.appName.reminderBot);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.reminderBot })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.reminderBot} installed`
    );
    await searchAppInstalled(page, fixtures.appName.reminderBot);
    await expect(
      page.getByRole('link', { name: locator.link.apps.reminderBot })
    ).toBeVisible();
  });

  test('Install - Botpress Connector - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.botpressConnector);
    await searchAppExplore(page, fixtures.appName.botpressConnector);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.botpressConnector} installed`
    );
    await searchAppInstalled(page, fixtures.appName.botpressConnector);
    await expect(
      page.getByRole('link', { name: locator.link.apps.botpressConnector })
    ).toBeVisible();
  });

  test('Install - Botpress Connector - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.botpressConnector);
    await searchAppExplore(page, fixtures.appName.botpressConnector);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.botpressConnector })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.botpressConnector} installed`
    );
    await searchAppInstalled(page, fixtures.appName.botpressConnector);
    await expect(
      page.getByRole('link', { name: locator.link.apps.botpressConnector })
    ).toBeVisible();
  });

  test('Install - Collaboard - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.collaboard);
    await searchAppExplore(page, fixtures.appName.collaboard);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.collaboard} installed`
    );
    await searchAppInstalled(page, fixtures.appName.collaboard);
    await expect(
      page.getByRole('link', { name: locator.link.apps.collaboard })
    ).toBeVisible();
  });

  test('Install - Collaboard - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.collaboard);
    await searchAppExplore(page, fixtures.appName.collaboard);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.collaboard })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.collaboard} installed`
    );
    await searchAppInstalled(page, fixtures.appName.collaboard);
    await expect(
      page.getByRole('link', { name: locator.link.apps.collaboard })
    ).toBeVisible();
  });
});
