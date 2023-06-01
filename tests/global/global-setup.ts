import { request } from '@playwright/test';

const authFile = 'playwright/.auth/admin.json';

export default async function (): Promise<void> {
  const requestContext = await request.newContext({
    baseURL: process.env.CANDIDATE_EE,
  });
  const response = await requestContext.post('/api/v1/login', {
    data: {
      email: process.env.USER_ADMIN,
      password: process.env.PASSWORD_ADMIN,
    },
    timeout: 0,
  });
  const dataJson = await response.json();
  const token = dataJson.data.authToken;
  const userId = dataJson.data.userId;
  process.env.API_TOKEN = token;
  process.env.USERID = userId;
  await requestContext.storageState({ path: authFile });
}
