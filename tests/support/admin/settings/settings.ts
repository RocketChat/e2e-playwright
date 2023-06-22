import { Page } from '@playwright/test';
import home from '../../../locators/home.json';

export async function goToSettings(page: Page) {
  await page.getByRole('button', { name: home.button.administration }).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.workspace)
    .click();
}
