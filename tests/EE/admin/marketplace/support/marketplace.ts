import { Page } from '@playwright/test';
import home from '../../../../locators/home.json';
import { delay } from '../../../../support/helpers';
import locator from '../locators/marketplace.json';

export async function searchAppInstalled(page: Page, appName: String) {
  await page.getByRole('link', { name: locator.link.appInstalled }).click();
  await page
    .getByPlaceholder(locator.placeholder.searchInstalledApp)
    .fill(`${appName}`);
  await delay(3000);
  if (
    await page
      .getByRole('link')
      .filter({ hasText: `${appName}` })
      .isVisible()
  ) {
    return true;
  } else return false;
}

export async function searchAppPrivate(page: Page, appName: any) {
  await page.getByRole('link', { name: locator.link.privateApp }).click();
  await page
    .getByPlaceholder(locator.placeholder.searchPrivateApp)
    .fill(`${appName}`);
  await delay(3000);

  if (
    await page
      .getByRole('link')
      .filter({ hasText: `${appName}` })
      .isVisible()
  ) {
    return true;
  } else return false;
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

export async function goToMarketplace(page: Page) {
  await page.getByRole('button', { name: home.button.administration }).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.marketplace)
    .click();
}
