
import { HttpClient } from './../../scripts/client';

describe('Auth module test', () => {

    beforeAll(async () => {
        console.log('pre condition');
    })

    afterAll(async () => {
        console.log('reset');
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