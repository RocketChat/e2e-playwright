import { test, expect } from '@playwright/test';
import { login } from '../../admin/support/user';
import {
  goToMarketplace,
  searchAppPrivate,
  installPrivateApp,
  unistallApp,
} from './support/marketplace';
import { fileUpload } from '../../../support/helpers';
import locator from './locators/marketplace.json';
import fixtures from './fixtures/fixtures.json';
test.describe('Private Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  test('Upload two Private App', async ({ page }) => {
    await unistallApp(page, locator.text.dataLoss);
    await unistallApp(page, locator.text.facebook);
    await page.getByRole('link', { name: locator.link.privateApp }).click();
    await page
      .getByRole('button', { name: locator.button.uploadPrivateApp })
      .click();
    await fileUpload(locator.button.browseFiles, fixtures.pathDataloss, page);
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();

    await page.getByRole('link', { name: locator.link.privateApp }).click();
    await page
      .getByRole('button', { name: locator.button.uploadPrivateApp })
      .click();
    await fileUpload(locator.button.browseFiles, fixtures.pathFacebook, page);
    await page.getByRole('button', { name: locator.button.install }).click();
    await page.getByRole('button', { name: locator.button.agree }).click();
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Enabled`,
      })
    ).toBeVisible();
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.facebook} Enabled`,
      })
    ).toBeVisible();
  });

  test('Uninstall a Private App - Outside Menu', async ({ page }) => {
    await installPrivateApp(page, locator.text.dataLoss, fixtures.pathDataloss);
    await searchAppPrivate(page, locator.text.dataLoss);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Data Loss Prevention uninstalled'
    );
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link').filter({ hasText: locator.text.dataLoss })
    ).not.toBeVisible();
  });

  test('Uninstall Private App - Inside Menu', async ({ page }) => {
    await installPrivateApp(page, locator.text.facebook, fixtures.pathFacebook);
    await searchAppPrivate(page, locator.text.facebook);
    await page
      .getByRole('link')
      .filter({ hasText: locator.text.facebook })
      .click();
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Facebook Messenger uninstalled'
    );
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link').filter({ hasText: locator.text.facebook })
    ).not.toBeVisible();
  });

  test('Enable and Disable two Private App - Outside Menu', async ({
    page,
  }) => {
    await installPrivateApp(page, locator.text.facebook, fixtures.pathFacebook);
    await installPrivateApp(page, locator.text.dataLoss, fixtures.pathDataloss);

    //Disabled - Facebook
    await searchAppPrivate(page, locator.text.facebook);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.disable).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Facebook Messenger apps'
    );
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.facebook} Disabled`,
      })
    ).toBeVisible();

    //Disabled - Data Loss
    await searchAppPrivate(page, locator.text.dataLoss);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.disable).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Data Loss Prevention apps'
    );
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Disabled`,
      })
    ).toBeVisible();

    //Enable - Facebook
    await searchAppPrivate(page, locator.text.facebook);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.enable).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Facebook Messenger apps'
    );
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.facebook} Enabled`,
      })
    ).toBeVisible();

    //Enable - Data Loss
    await searchAppPrivate(page, locator.text.dataLoss);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.enable).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Data Loss Prevention apps'
    );
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Enabled`,
      })
    ).toBeVisible();
  });

  test('Enable and Disable two Private App - Inside Menu', async ({ page }) => {
    await installPrivateApp(page, locator.text.facebook, fixtures.pathFacebook);
    await installPrivateApp(page, locator.text.dataLoss, fixtures.pathDataloss);

    //Disabled - Facebook
    await searchAppPrivate(page, locator.text.facebook);
    await page
      .getByRole('link')
      .filter({ hasText: locator.text.facebook })
      .click();
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.disable).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Facebook Messenger apps'
    );
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Disabled`,
      })
    ).toBeVisible();

    //Disabled - Data Loss
    await searchAppPrivate(page, locator.text.dataLoss);
    await page
      .getByRole('link')
      .filter({ hasText: locator.text.dataLoss })
      .click();
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.disable).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Data Loss Prevention apps'
    );
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Disabled`,
      })
    ).toBeVisible();

    //Enable - Facebook
    await searchAppPrivate(page, locator.text.facebook);
    await page
      .getByRole('link')
      .filter({ hasText: locator.text.facebook })
      .click();
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.enable).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Facebook Messenger apps'
    );
    await searchAppPrivate(page, locator.text.facebook);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.facebook} Enabled`,
      })
    ).toBeVisible();

    //Enable - Data Loss
    await searchAppPrivate(page, locator.text.dataLoss);
    await page
      .getByRole('link')
      .filter({ hasText: locator.text.dataLoss })
      .click();
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.enable).click();
    await expect(page.locator(locator.class.toast)).toHaveText(
      'Data Loss Prevention apps'
    );
    await searchAppPrivate(page, locator.text.dataLoss);
    await expect(
      page.getByRole('link', {
        name: `${locator.link.apps.enterprise.dataLoss} Enabled`,
      })
    ).toBeVisible();
  });

  test('Inside menu Private App', async ({ page }) => {
    await installPrivateApp(page, locator.text.dataLoss, fixtures.pathDataloss);
    await expect(page.getByRole('tab', { name: 'Details' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Security' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Releases' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Settings' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Logs' })).toBeVisible();
  });
});
