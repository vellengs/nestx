
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('User module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('create user', async () => {

        const reqBody = {
            "username": "createTest",
            "password": "8911111",
            "mobile": "13049833837",
            "email": "create@domain.com",
            "mobilePrefix": "86",
            "isAdmin": "true",
            "veryCode": "123456"
        }

        const res = await HttpClient.coreApi.usersCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('edit user', async () => {
        const reqBody = {
            "id": "5b31eba49a674f606f7c5849",
            "name": "viking",
            "username": "vellengs2",
            "mobile": "13063090490",
            "email": "edit_user@vellengs.com"
        }
        const res = await HttpClient.coreApi
            .usersUpdate(reqBody);
        expect(res.status).toBe(200);
    });

    it('query user', async () => {
        const res = await HttpClient.coreApi.usersQuery();
        expect(res.status).toBe(200);
    });

    it('get user by id', async () => {
        const res = await HttpClient.coreApi.dictsFindOne('5b31eba49a674f606f7c5849');
        expect(res.status).toBe(200);
    });

});