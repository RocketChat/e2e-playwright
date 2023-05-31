import { test, expect } from '@playwright/test';
import { login } from '../../admin/support/user';
import home from '../../../locators/home.json';
import createChannel from '../../../locators/createChannel.json';
import { deleteChannel } from '../channel/support/channel';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('Create a Private Channel', async ({ page }) => {
  await page.locator(home.button.createNew).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.channel)
    .click();
  await page
    .getByPlaceholder(createChannel.placeholder.channelName)
    .fill('ChannelTestAutomation');
  await page.getByRole('button', { name: createChannel.button.create }).click();

  expect(
    await page.getByRole('link', { name: 'ChannelTestAutomation' }).isVisible()
  );
});

test('Create a Public Channel', async ({ page }) => {
  await page.locator(home.button.createNew).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.channel)
    .click();
  await page
    .getByPlaceholder(createChannel.placeholder.channelName)
    .fill('ChannelTestAutomation');
  await page.locator(createChannel.toggle.private).first().click();
  await page.getByRole('button', { name: createChannel.button.create }).click();

  expect(
    await page.getByRole('link', { name: 'ChannelTestAutomation' }).isVisible()
  );
});

test.afterEach(async ({ page }) => {
  await deleteChannel(page, 'ChannelTestAutomation');
});
