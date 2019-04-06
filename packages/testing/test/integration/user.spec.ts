
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('User module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    beforeAll(async () => {

    })

    /**
     * TODO if not admin user can create admin user?
     */
    it('create user', async () => {
        await login();
        const createUserReq = {
            "username": "createTest",
            "password": "8911111",
            "mobile": "13049833837",
            "email": "create@domain.com",
            "mobilePrefix": "86",
            "isAdmin": "true",
            "veryCode": "123456"
        }

        const res = await HttpClient.coreApi.usersCreate(createUserReq);
        expect(res.status).toBe(201);
    });

    /**
     * TODO if not admin user can create admin user?
     */
    it('edit user', async () => {
        await login();
        const editUserReq = {
            "id": "5c984580d8efba637156bc85",
            "name": "viking",
            "username": "vellengs2",
            "mobile": "13063090490",
            "email": "edit_user@vellengs.com"
        }
        const res = await HttpClient.coreApi
            .usersUpdate(editUserReq);
        expect(res.status).toBe(200);
    });


    it('query user', async () => {
        await login();
        const res = await HttpClient.coreApi.usersQuery();
        expect(res.status).toBe(200);
    });


});