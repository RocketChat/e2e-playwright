import { test, expect, request } from '@playwright/test';
import { login } from '../support/user';
import home from '../../../locators/home.json';
import createDiscussion from '../../../locators/createDiscussion.json';
import { deleteDiscussion, deleteDiscussionAPI } from './support/discussion';
import { createChannelAPI, deleteChannel } from '../channel/support/channel';

test.beforeEach(async ({ page, context }) => {
  await createChannelAPI(context.request, 'discussion-channel-automation'); 
  await login(page);
});

test('Create a discussion', async ({ page, context }) => {
  await page.locator(home.button.createNew).click();
  await page
    .getByTestId(home.dropdown.createNew)
    .getByText(home.text.discussion)
    .click();
  await page
    .getByPlaceholder(createDiscussion.placeholder.selectChannel)
    .fill('discussion-channel-automation')
  await page.getByRole('option', { name: 'discussion-channel-automation', exact: true }).locator('div').first().click();
  await page.getByPlaceholder(createDiscussion.placeholder.nameDiscussion).fill('discussionTestAutomation');
  await page.getByRole('button', { name: createDiscussion.button.create }).click();

  expect(
    await page.getByRole('link', { name: 'discussionTestAutomation' }).isVisible()
  );
});

test.afterEach(async ({ page, context }) => {
  await deleteDiscussionAPI(context.request, 'discussionTestAutomation');
  await deleteChannel(page, 'discussion-channel-automation');
});
