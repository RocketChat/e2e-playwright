import { Page } from '@playwright/test';

export async function deleteChannel(page: Page, channelName: string) {
  await page.getByRole('link', { name: `${channelName}` }).click();
  await page.getByRole('button', { name: 'Room Information' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
}
