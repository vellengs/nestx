import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('Auth module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /auth/login', async () => {
        const res = await login();
        expect(res.status).toBe(200);
        expect(res.data.roles.length).toBeGreaterThan(0);
        expect(res.data.token).toBeDefined;
        expect(res.data.username).toBeDefined;
    });

    it('[post] /auth/register', async () => {
        const registerReq = {
            "username": "vellengs230",
            "password": "9200033",
            "mobile": "13063090591",
            "email": "demo@domain.com",
            "mobilePrefix": "86",
            "veryCode": "123456"
        }
        const captchaRes = await HttpClient.authApi.authCaptcha(registerReq.mobile).catch((err) => {
            console.log('err', err); // TODO if exception;
        });
        const res = await HttpClient.authApi.authRegister(registerReq);
        expect(res.status).toBe(201);
    });

    it('[get] /auth/logout', async () => {
        const res = await HttpClient.authApi.authLogout();
        expect(res.status).toBe(200);
        expect(res.data.ok).toBe(true);
    });

    it('[get] /auth/captcha', async () => {
        const mobile = '13063090590';
        const res = await HttpClient.authApi.authCaptcha(mobile);
        expect(res.status).toBe(200);
        expect(res.data.ok).toBe(true);
    });

});