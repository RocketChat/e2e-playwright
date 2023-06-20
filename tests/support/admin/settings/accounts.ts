import { APIRequestContext } from '@playwright/test';

export async function enableAccountsManyallyApproveNewUsers(
  request: APIRequestContext
) {
  await request.post(`/api/v1/settings/Accounts_ManuallyApproveNewUsers`, {
    headers: {
      'X-Auth-Token': `${process.env.API_TOKEN}`,
      'X-User-Id': `${process.env.USERID}`,
      'X-2fa-method': 'password',
      'X-2fa-code': `${process.env.SHA256HASHPASSWORD}`,
    },
    data: {
      value: true,
    },
  });
}

export async function disableAccountsManyallyApproveNewUsers(
  request: APIRequestContext
) {
  await request.post(`/api/v1/settings/Accounts_ManuallyApproveNewUsers`, {
    headers: {
      'X-Auth-Token': `${process.env.API_TOKEN}`,
      'X-User-Id': `${process.env.USERID}`,
      'X-2fa-method': 'password',
      'X-2fa-code': `${process.env.SHA256HASHPASSWORD}`,
    },
    data: {
      value: false,
    },
  });
}
