import { expect, test } from '@playwright/test';
import fixturesLogin from '../../../../fixtures/loginPage.json';
import home from '../../../../locators/home.json';
import loginPage from '../../../../locators/loginPage.json';
import settings from '../../../../locators/settings.json';
import { login } from '../../../../support/admin/login';
import {
  deleteUser,
  registerUser,
  setActiveStatusTrue,
} from '../../../../support/admin/settings/users';
test.describe('Private Apps', () => {
  let username: string = 'testManuallyApproveUser';
  let email: string = 'testManuallyAprroveUser@test.com';
  let name: string = 'testManuallyApproveUser';
  let password: string = `${process.env.PASSWORD_ADMIN}`;
  test.beforeEach(async ({ page }) => {
    await login(page);
  });
  test('Enable Manually Approve New Users and verify message ', async ({
    page,
  }) => {
    await page
      .getByRole('link', { name: loginPage.links.createAccount })
      .click();
    await page.locator(loginPage.createAccount.name).fill(name);
    await page.locator(loginPage.createAccount.email).fill(email);
    await page.locator(loginPage.createAccount.username).fill(username);
    await page.locator(loginPage.createAccount.password).fill(password);
    await page.locator(loginPage.createAccount.password).fill(password);
    await page.locator(loginPage.createAccount.reasonToJoin).fill('testReason');
    await page
      .getByRole('button', {
        name: loginPage.createAccount.button.joinYourTeam,
      })
      .click();
    await expect(
      page.locator(loginPage.createAccount.toast).filter({
        hasText: fixturesLogin.createAccount.toast.ManuallyApproveActive,
      })
    ).toBeVisible();

    await page.getByPlaceholder(loginPage.fields.email).fill(name);
    await page.getByLabel(loginPage.fields.password).fill(password);
    await page.getByRole('button', { name: loginPage.button.login }).click();
    await expect(
      page.locator(loginPage.warning).filter({
        hasText: fixturesLogin.createAccount.toast.ManuallyApproveActive,
      })
    ).toBeVisible();
  });

  test('Enable manually a user ', async ({ page, request }) => {
    let userId = await registerUser(
      request,
      name,
      email,
      username,
      'teste',
      password
    );

    await page
      .getByRole('button', { name: home.button.administration })
      .click();
    await page.getByRole('link', { name: settings.menu.users.title }).click();
    await page
      .getByPlaceholder(settings.menu.users.placeHolder.searchBar)
      .fill(username);
    await expect(page.locator(`tr[qa-user-id='${userId}']`)).toHaveText(
      /Isabel .* Disabled/g
    );
    await setActiveStatusTrue(request, userId);
    await expect(page.locator(`tr[qa-user-id='${userId}']`)).toHaveText(
      /Isabel .* Enabled/g
    );
    await page.locator(home.button.avatar).first().click();
    await page.getByText(home.text.logout).click();
    await page.getByPlaceholder(loginPage.fields.email).fill(name);
    await page.getByLabel(loginPage.fields.password).fill(password);
    expect(page.getByText(home.text.home)).toBeVisible();
  });

  test.afterEach(async ({ request }) => {
    await deleteUser(request, username);
  });
});
