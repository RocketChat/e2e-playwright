import { APIRequestContext, Page } from '@playwright/test';
import home from '../../../../locators/home.json';
import { delay, fileUpload } from '../../../../support/helpers';
import locator from '../locators/marketplace.json';

export async function searchAppInstalled(page: Page, appName: String) {
  await page.getByRole('link', { name: locator.link.appInstalled }).click();
  await page
    .getByPlaceholder(locator.placeholder.searchInstalledApp)
    .fill(`${appName}`);
  await delay(3000);
  if (
    await page
      .locator('div[role="link"]')
      .filter({ hasText: `${appName}` })
      .isVisible()
  ) {
    return true;
  } else return false;
}

export async function searchAppExplore(page: Page, appName: String) {
  await page.getByRole('link', { name: locator.link.explore }).click();
  await page
    .getByPlaceholder(locator.placeholder.searchApps)
    .fill(`${appName}`);
  await delay(3000);
}

export async function searchAppPrivate(page: Page, appName: any) {
  await page.getByRole('link', { name: locator.link.privateApp }).click();
  await page
    .getByPlaceholder(locator.placeholder.searchPrivateApp)
    .fill(`${appName}`);
  await delay(3000);
  if (
    await page
      .locator('div[role=link]')
      .filter({ hasText: `${appName}` })
      .isVisible()
  ) {
    return true;
  } else return false;
}

export async function unistallAppAPI(request: APIRequestContext, app: string) {
  try {
    await request.delete(`/api/apps/${app}`, {
      headers: {
        'X-Auth-Token': `${process.env.API_TOKEN}`,
        'X-User-Id': `${process.env.USERID}`,
      },
    });
  } catch (error) {
    console.log(error + ' App was not uninstalled');
  }
}

export async function installAppAPI(request: APIRequestContext, app: string) {
  try {
    await request.post(`/api/apps/`, {
      headers: {
        'X-Auth-Token': `${process.env.API_TOKEN}`,
        'X-User-Id': `${process.env.USERID}`,
      },
      data: {
        appId: `${app}`,
        marketplace: true,
        //version: '0.1.1',
      },
    });
  } catch (error) {
    console.log(error + ' App was not installed');
  }
}

export async function unistallPrivateApp(page: Page, appName: string) {
  let appisntalledPrivate = await searchAppPrivate(page, appName);
  if (appisntalledPrivate) {
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
  }
}
export async function unistallApp(page: Page, appName: String) {
  let appisntalledPrivate = await searchAppPrivate(page, appName);
  if (appisntalledPrivate) {
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
  }
  let appinstalled = await searchAppInstalled(page, appName);
  if (appinstalled) {
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
  }
}
export async function installPrivateApp(
  page: Page,
  appName: string,
  appPath: string
) {
  await unistallApp(page, appName);
  await page.getByRole('link', { name: locator.link.privateApp }).click();
  await page
    .getByRole('button', { name: locator.button.uploadPrivateApp })
    .click();
  await fileUpload(locator.button.browseFiles, appPath, page);
  await page.getByRole('button', { name: locator.button.install }).click();
  await page.getByRole('button', { name: locator.button.agree }).click();
}

export async function goToMarketplace(page: Page) {
  await page.getByRole('button', { name: home.button.administration }).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.marketplace)
    .click();
}
