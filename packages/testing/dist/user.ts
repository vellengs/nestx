import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('user module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /user/profile', async () => {


    const res = await HttpClient.coreApi.usersProfile();
        expect(res.status).toBe(200);
    });
    it('[post] /user/', async () => {

        const reqBody = {
            username: '',
            password: '',
        };

    const res = await HttpClient.coreApi.usersCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /user/', async () => {

        const reqBody = {
            id: '',
            name: '',
            username: '',
            mobile: '',
            password: '',
            roles: '',
            email: '',
            company: '',
            siteUrl: '',
            address: '',
        };

    const res = await HttpClient.coreApi.usersUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[post] /user/role', async () => {

        const reqBody = {
            role: '',
            userIds: '',
        };

    const res = await HttpClient.coreApi.usersAddUsersToRole(reqBody);
        expect(res.status).toBe(200);
    });
    it('[delete] /user/role', async () => {

         const role = '';
         const id = '';

    const res = await HttpClient.coreApi.usersRemoveAccountFromRole(role, id);
        expect(res.status).toBe(200);
    });
    it('[get] /user/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.usersSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /user/query', async () => {

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.usersQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /user/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.usersFindOne(id);
        expect(res.status).toBe(200);
    });
});