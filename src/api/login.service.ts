import { get, post } from './request'

export const publicKey = (data:LoginParams = {}) => {
    return get('/ecomm/p/public-key', data)
}

export const getCaptcha = () => {
    return get('/ecomm/p/captcha');
}

export const userLogin = (params: LoginParams) => {
    return post('/ecomm/p/login', params);
}

export interface LoginParams {
    username?: string;
    password?: string;
    captcha?: string;
    token?: string;
}