
import { HttpClient } from './../../scripts/client';

describe('Auth module test', () => {

    beforeAll(async () => {
        HttpClient.mockApi.mockInitData();
    })

    afterAll(async () => {
        HttpClient.mockApi.mockReset();
    })

    it('user login', async () => {
        const loginReq = {
            "username": "admin",
            "password": "xufeng23",
            "type": "account"
        };

        const res = await HttpClient.authApi.authLogin(loginReq);
        expect(res.status).toBe(201);
    });

});