import { test, expect } from '@playwright/test';
import { login } from '../../admin/support/user';
import {
  unistallApp,
  goToMarketplace,
  searchAppPrivate,
} from './support/marketplace';
import { delay, fileUpload } from '../../../support/helpers';
import locator from './locators/marketplace.json';
import fixtures from './fixtures/fixtures.json';
test.describe('Private Apps', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await goToMarketplace(page);
  });

  test('Upload two Private App', async ({ page }) => {
    test.setTimeout(120000);
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
});
