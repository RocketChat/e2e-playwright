import { request } from '@playwright/test';

const authFile = 'playwright/.auth/admin.json';

export default async function (): Promise<void> {
  const requestContext = await request.newContext({
    baseURL: process.env.STAGINGURL,
  });
  const response = await requestContext.post('/api/v1/login', {
    data: {
      email: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    timeout: 0,
  });
  const dataJson = await response.json();
  const token = dataJson.authToken;
  const userId = dataJson.userId;
  process.env.API_TOKEN = token;
  process.env.USERID = userId;
  await requestContext.storageState({ path: authFile });
}
