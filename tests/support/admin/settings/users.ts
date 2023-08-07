import { APIRequestContext } from '@playwright/test';

export async function deleteUser(request: APIRequestContext, username: string) {
  await request.post(`/api/v1/users.delete`, {
    headers: {
      'X-Auth-Token': `${process.env.API_TOKEN}`,
      'X-User-Id': `${process.env.USERID}`,
      'Content-type': 'application/json',
    },
    data: {
      username: `${username}`,
    },
  });
}

export async function registerUser(
  request: APIRequestContext,
  username: string,
  email: string,
  name: string,
  reason: string,
  pass: string
) {
  let response: any;
  if (!reason) {
    response = await request.post(`/api/v1/users.register`, {
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        pass: `${pass}`,
        name: `${name}`,
        email: `${email}`,
        username: `${username}`,
      },
    });
  } else {
    response = await request.post(`/api/v1/users.register`, {
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        pass: `${pass}`,
        name: `${name}`,
        email: `${email}`,
        username: `${username}`,
        reason: `${reason}`,
      },
    });
  }

  const dataJson = await response.json();
  let userId = dataJson.user._id;
  return userId;
}

export async function setActiveStatusTrue(
  request: APIRequestContext,
  userId: string
) {
  await request.post(`/api/v1/users.setActiveStatus`, {
    headers: {
      'X-Auth-Token': `${process.env.API_TOKEN}`,
      'X-User-Id': `${process.env.USERID}`,
      'Content-type': 'application/json',
    },
    data: {
      userId: `${userId}`,
      activeStatus: true,
      confirmRelinquish: false,
    },
  });
}
