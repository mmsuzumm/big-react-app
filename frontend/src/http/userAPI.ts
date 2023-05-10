import { host, authHost } from './index';

interface IRegistration {
  email: string;
  password: string;
  rePassword: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const registration = async (params: IRegistration) => {
  const response = await host.post('api/user/registration', {
    ...params,
    role: 'Admin',
  });
  return response;
};

export const login = async (params: ILogin) => {
  const response = await host.post('api/user/login', {
    ...params,
  });
  return response;
};

export const check = async () => {
  const response = await host.post('api/user/registration');
  return response;
};
