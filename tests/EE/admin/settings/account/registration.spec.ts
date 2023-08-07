import { expect, test } from '@playwright/test';
import fixturesLogin from '../../../../fixtures/loginPage.json';
import fixturesSettings from '../../../../fixtures/settings.json';
import home from '../../../../locators/home.json';
import loginPage from '../../../../locators/loginPage.json';
import settings from '../../../../locators/settings.json';
import {
  disableAccountsManyallyApproveNewUsers,
  enableAccountsManyallyApproveNewUsers,
} from '../../../../support/admin/settings/accounts';
import { goToSettings } from '../../../../support/admin/settings/settings';
import {
  deleteUser,
  registerUser,
  setActiveStatusTrue,
} from '../../../../support/admin/settings/users';
import { login } from '../../../../support/login/login';

test.describe('Registration', () => {
  let username: string = fixturesSettings.name;
  let email: string = fixturesSettings.email;
  let name: string = fixturesSettings.name;
  let password: string = `${process.env.PASSWORD_ADMIN}`;
  test.beforeEach(async ({ page, request }) => {
    await login(page);
    await enableAccountsManyallyApproveNewUsers(request);
    await deleteUser(request, username);
  });
  /**
   * @jira WM-70
   */
  test.skip('Enable Manually Approve New Users and verify message @unstable ', async ({
    page,
  }) => {
    await page.locator(home.button.avatar).first().click();
    await page.getByText(home.text.logout).click();
    await page
      .getByRole('link', { name: loginPage.links.createAccount })
      .click();
    await page.locator(loginPage.createAccount.name).fill(name);
    await page.locator(loginPage.createAccount.email).fill(email);
    await page.locator(loginPage.createAccount.username).fill(username);
    await page.locator(loginPage.createAccount.password).fill(password);
    await page.locator(loginPage.createAccount.confirmPassword).fill(password);
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
    await page
      .getByRole('button', { name: loginPage.button.login })
      .first()
      .click();
    await expect(
      page.locator(loginPage.warning).filter({
        hasText: fixturesLogin.createAccount.toast.ManuallyApproveActive,
      })
    ).toBeVisible();
  });
  /**
   * @jira WM-70
   */
  test.skip('Enable manually a user @unstable ', async ({ page, request }) => {
    let userId = await registerUser(
      request,
      name,
      email,
      username,
      'teste',
      password
    );
    await goToSettings(page);
    await page.getByRole('link', { name: settings.menu.users.title }).click();
    await page
      .getByPlaceholder(settings.menu.users.placeHolder.searchBar)
      .fill(username);
    await expect(page.locator(`tr[qa-user-id='${userId}']`)).toHaveText(
      /testManuallyApproveUser.*Disabled/g
    );
    await setActiveStatusTrue(request, userId);
    await page.locator('button[title="Close"]').click();
    await page.locator(home.button.avatar).first().click();
    await page.getByText(home.text.logout).click();
    await page.getByPlaceholder(loginPage.fields.email).fill(name);
    await page.getByLabel(loginPage.fields.password).fill(password);
    await page
      .getByRole('button', { name: loginPage.button.login })
      .first()
      .click();
    expect(page.getByText(home.text.home)).toBeVisible();
  });

  test.afterEach(async ({ request }) => {
    await disableAccountsManyallyApproveNewUsers(request);
    await deleteUser(request, username);
  });
});
