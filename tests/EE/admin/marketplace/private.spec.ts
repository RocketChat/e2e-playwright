import { test, expect } from '@playwright/test';
import { login } from '../../admin/support/user';
import {
  unistallApp,
  goToMarketplace,
  searchAppPrivate,
  installPrivateApp,
  unistallAppAPI,
} from './support/marketplace';
import { delay, fileUpload } from '../../../support/helpers';
import locator from './locators/marketplace.json';
import fixtures from './fixtures/fixtures.json';
test.describe('Private Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  test('Upload two Private App', async ({ page, request }) => {
    test.setTimeout(120000);
    await unistallAppAPI(request, '8a30dc27-0cfe-4639-8e30-c7efb60c17f4');
    // await unistallApp(page, locator.text.dataLoss);
    //await unistallApp(page, locator.text.facebook);

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
    await delay(5000);
    await searchAppPrivate(page, locator.text.dataLoss);
    expect(
      await page
        .getByRole('link', { name: locator.link.dataLossEnabled })
        .isVisible()
    );

    await searchAppPrivate(page, locator.text.facebook);
    expect(
      await page
        .getByRole('link', { name: locator.link.facebookEnabled })
        .isVisible()
    );
  });

  test.only('Uninstall two Private App - Outside Menu', async ({
    page,
    request,
  }) => {
    test.setTimeout(120000);
    await installPrivateApp(page, locator.text.dataLoss, fixtures.pathDataloss);
    await searchAppPrivate(page, locator.text.dataLoss);
    await page.getByTestId(locator.testId.menuSingleApp).click();
    await page.getByText(locator.text.unistall).click();
    await page.getByRole('button', { name: locator.button.yes }).click();
    await expect(page.locator('#toastBarRoot')).toBeHidden();
    await expect(
      page.locator('#toastBarRoot > * > .rcx-toastbar-content')
    ).toHaveText('Data Loss Prevention uninstalled');
  });

  test('Uninstall two Private App - Inside Menu', async ({ page }) => {
    await installApp(page, locator.text.dataLoss);
    await installApp(page, locator.text.facebook);
    await unistallApp(page, locator.text.dataLoss);
    await unistallApp(page, locator.text.facebook);
    searchAppPrivate(page, locator.text.dataLoss);
    searchAppPrivate(page, locator.text.facebook);
  });

  test('Enable two Private App', async ({ page }) => {});

  test('Disable two Private App', async ({ page }) => {});

  test('Inside menu Private App', async ({ page }) => {});

  test('Change settings Private App', async ({ page }) => {});
});
