import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('Auth module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('user login', async () => {
        const res = await login();
        expect(res.status).toBe(201);
    });

    it('user register', async () => {
        const registerReq = {
            "username": "vellengs230",
            "password": "9200033",
            "mobile": "13063090591",
            "email": "demo@domain.com",
            "mobilePrefix": "86",
            "isAdmin": "true",
            "veryCode": "123456"
        }

        const captchaRes = await HttpClient.authApi.authCaptcha(registerReq.mobile).catch((err) => {
            console.log('err', err); // TODO if exception;
        });
        const res = await HttpClient.authApi.authRegister(registerReq);
        expect(res.status).toBe(201);

    });

    it('user profile', async () => {
        await login();
        const res = await HttpClient.coreApi.usersProfile();
        expect(res.status).toBe(200);
    });
});