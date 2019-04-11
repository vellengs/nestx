import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('auth module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /auth/login', async () => {

        const reqBody = {
            username: '',
            type: '',
            password: '',
        };

    const res = await HttpClient.authApi.authLogin(reqBody);
        expect(res.status).toBe(200);
    });
    it('[post] /auth/register', async () => {

        const reqBody = {
            username: '',
            password: '',
            mobile: '',
            email: '',
            name: '',
            mobilePrefix: '',
            veryCode: '',
        };

    const res = await HttpClient.authApi.authRegister(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /auth/logout', async () => {


    const res = await HttpClient.authApi.authLogout();
        expect(res.status).toBe(200);
    });
    it('[get] /auth/captcha', async () => {

         const mobile = '';

    const res = await HttpClient.authApi.authCaptcha(mobile);
        expect(res.status).toBe(200);
    });
});