import { test, expect } from '@playwright/test';
import { login } from '../support/user';
import {
  goToMarketplace,
  unistallAppAPI,
  searchAppExplore,
  searchAppInstalled,
  unistallPrivateApp,
} from './support/marketplace';
import fixtures from './fixtures/fixtures.json';
import locator from './locators/marketplace.json';

test.describe('Install Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  test('Install - Bamboo - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.bambooIntegration);
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bambooIntegration
    );
    await searchAppExplore(page, fixtures.appName.enterprise.bambooIntegration);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.bambooIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bambooIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bambooIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Bamboo - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.bambooIntegration);
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bambooIntegration
    );
    await searchAppExplore(page, fixtures.appName.enterprise.bambooIntegration);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.bambooIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.bambooIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bambooIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bambooIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Bitbucket Cloud Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.bitbucketCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.bitbucketCloudIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bitbucketCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Bitbucket Cloud Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.bitbucketCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({
        hasText: fixtures.appName.enterprise.bitbucketCloudIntegration,
      })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.twitter} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bitbucketCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bitbucketCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Bitbucket Server Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.bitbucketServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.bitbucketServerIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bitbucketServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Bitbucket Server Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.bitbucketServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({
        hasText: fixtures.appName.enterprise.bitbucketServerIntegration,
      })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.twitter} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.bitbucketServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.bitbucketServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Confluence Cloud Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.confluenceCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.confluenceCloudIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.confluenceCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Confluence Cloud Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.confluenceCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({
        hasText: fixtures.appName.enterprise.confluenceCloudIntegration,
      })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.confluenceCloudIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.confluenceCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.confluenceCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Confluence Server Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.confluenceServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.confluenceServerIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.confluenceServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Confluence Server Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.confluenceServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({
        hasText: fixtures.appName.enterprise.confluenceServerIntegration,
      })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.confluenceServerIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.confluenceServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.confluenceServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Data Loss Prevention - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.dataLoss);
    await unistallPrivateApp(page, fixtures.appName.enterprise.dataLoss);
    await searchAppExplore(page, fixtures.appName.enterprise.dataLoss);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.dataLoss} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.dataLoss} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Data Loss Prevention - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.dataLoss);
    await unistallPrivateApp(page, fixtures.appName.enterprise.dataLoss);
    await searchAppExplore(page, fixtures.appName.enterprise.dataLoss);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.dataLoss })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.dataLoss} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.dataLoss} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Fabulor - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.fabulor);
    await searchAppExplore(page, fixtures.appName.enterprise.fabulor);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.fabulor} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.fabulor);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.fabulor} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Fabulor - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.fabulor);
    await searchAppExplore(page, fixtures.appName.enterprise.fabulor);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.fabulor })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.fabulor} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.fabulor);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.fabulor} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Facebook Messenger - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.facebook);
    await unistallPrivateApp(page, fixtures.appName.enterprise.facebook);
    await searchAppExplore(page, fixtures.appName.enterprise.facebook);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.facebook} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.facebook);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.facebook} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Facebook Messenger - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.facebook);
    await unistallPrivateApp(page, fixtures.appName.enterprise.facebook);
    await searchAppExplore(page, fixtures.appName.enterprise.facebook);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.facebook })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.facebook} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.facebook);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.facebook} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Calendar - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleCalendar);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleCalendar);
    await searchAppExplore(page, fixtures.appName.enterprise.googleCalendar);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleCalendar} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleCalendar);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleCalendar} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Calendar - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleCalendar);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleCalendar);
    await searchAppExplore(page, fixtures.appName.enterprise.googleCalendar);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.googleCalendar })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleCalendar} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleCalendar);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleCalendar} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Drive - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleDrive);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleDrive);
    await searchAppExplore(page, fixtures.appName.enterprise.googleDrive);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleDrive} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleDrive);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleDrive} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Drive - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleDrive);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleDrive);
    await searchAppExplore(page, fixtures.appName.enterprise.googleDrive);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.googleDrive })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleDrive} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleDrive);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleDrive} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Meet - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleMeet);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleMeet);
    await searchAppExplore(page, fixtures.appName.enterprise.googleMeet);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleMeet} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleMeet);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleMeet} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Google Meet - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.googleMeet);
    await unistallPrivateApp(page, fixtures.appName.enterprise.googleMeet);
    await searchAppExplore(page, fixtures.appName.enterprise.googleMeet);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.googleMeet })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.googleMeet} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.googleMeet);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.googleMeet} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Instagram Direct - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.instagramDirect);
    await unistallPrivateApp(page, fixtures.appName.enterprise.instagramDirect);
    await searchAppExplore(page, fixtures.appName.enterprise.instagramDirect);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.instagramDirect} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.instagramDirect);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.instagramDirect} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Instagram Direct - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.instagramDirect);
    await unistallPrivateApp(page, fixtures.appName.enterprise.instagramDirect);
    await searchAppExplore(page, fixtures.appName.enterprise.instagramDirect);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.instagramDirect })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.instagramDirect} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.instagramDirect);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.instagramDirect} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jira Cloud Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.jiraCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.jiraCloudIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.jiraCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jira Cloud Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.jiraCloudIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.jiraCloudIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.jiraCloudIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.jiraCloudIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.jiraCloudIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jira Server Integration - Outside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.jiraServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.jiraServerIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.jiraServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Jira Server Integration - Inside menu', async ({
    page,
    request,
  }) => {
    await unistallAppAPI(
      request,
      fixtures.appId.enterprise.jiraServerIntegration
    );
    await unistallPrivateApp(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await searchAppExplore(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.jiraServerIntegration })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.jiraServerIntegration} installed`
    );
    await searchAppInstalled(
      page,
      fixtures.appName.enterprise.jiraServerIntegration
    );
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.jiraServerIntegration} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Pexip - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.pexip);
    await unistallPrivateApp(page, fixtures.appName.enterprise.pexip);
    await searchAppExplore(page, fixtures.appName.enterprise.pexip);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.pexip} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.pexip);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.pexip} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Pexip - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.pexip);
    await unistallPrivateApp(page, fixtures.appName.enterprise.pexip);
    await searchAppExplore(page, fixtures.appName.enterprise.pexip);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.pexip })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.pexip} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.pexip);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.pexip} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Telegram - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.telegram);
    await unistallPrivateApp(page, fixtures.appName.enterprise.telegram);
    await searchAppExplore(page, fixtures.appName.enterprise.telegram);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.telegram} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.telegram);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.telegram} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Telegram - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.telegram);
    await unistallPrivateApp(page, fixtures.appName.enterprise.telegram);
    await searchAppExplore(page, fixtures.appName.enterprise.telegram);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.telegram })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.telegram} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.telegram);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.telegram} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Trello - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.trello);
    await unistallPrivateApp(page, fixtures.appName.enterprise.trello);
    await searchAppExplore(page, fixtures.appName.enterprise.trello);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.trello} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.trello);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.trello} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Trello - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.trello);
    await unistallPrivateApp(page, fixtures.appName.enterprise.trello);
    await searchAppExplore(page, fixtures.appName.enterprise.trello);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.trello })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.trello} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.trello);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.trello} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Twitter - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.twitter);
    await unistallPrivateApp(page, fixtures.appName.enterprise.twitter);
    await searchAppExplore(page, fixtures.appName.enterprise.twitter);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.twitter} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.twitter);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.twitter} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Twitter - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.twitter);
    await unistallPrivateApp(page, fixtures.appName.enterprise.twitter);
    await searchAppExplore(page, fixtures.appName.enterprise.twitter);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.twitter })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.twitter} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.twitter);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.twitter} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - WhatsApp Cloud - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.whatsAppCloud);
    await unistallPrivateApp(page, fixtures.appName.enterprise.whatsAppCloud);
    await searchAppExplore(page, fixtures.appName.enterprise.whatsAppCloud);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.whatsAppCloud} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.whatsAppCloud);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.whatsAppCloud} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - WhatsApp Cloud - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.whatsAppCloud);
    await unistallPrivateApp(page, fixtures.appName.enterprise.whatsAppCloud);
    await searchAppExplore(page, fixtures.appName.enterprise.whatsAppCloud);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.whatsAppCloud })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.whatsAppCloud} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.whatsAppCloud);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.whatsAppCloud} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Zapier - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.zapier);
    await unistallPrivateApp(page, fixtures.appName.enterprise.zapier);
    await searchAppExplore(page, fixtures.appName.enterprise.zapier);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.zapier} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.zapier);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.zapier} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Zapier - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.zapier);
    await unistallPrivateApp(page, fixtures.appName.enterprise.zapier);
    await searchAppExplore(page, fixtures.appName.enterprise.zapier);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.zapier })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.zapier} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.zapier);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.zapier} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Zoom - Outside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.zoom);
    await unistallPrivateApp(page, fixtures.appName.enterprise.zoom);
    await searchAppExplore(page, fixtures.appName.enterprise.zoom);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.install).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.zoom} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.zoom);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.zoom} Enabled`,
      })
    ).toBeVisible();
  });

  test('Install - Zoom - Inside menu', async ({ page, request }) => {
    await unistallAppAPI(request, fixtures.appId.enterprise.zoom);
    await unistallPrivateApp(page, fixtures.appName.enterprise.zoom);
    await searchAppExplore(page, fixtures.appName.enterprise.zoom);
    await page
      .locator('div[role="link"]')
      .filter({ hasText: fixtures.appName.enterprise.zoom })
      .click();
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      `${fixtures.appName.enterprise.zoom} installed`
    );
    await searchAppInstalled(page, fixtures.appName.enterprise.zoom);
    await expect(
      page.getByRole('link', {
        name: `${fixtures.appName.enterprise.zoom} Enabled`,
      })
    ).toBeVisible();
  });
});
