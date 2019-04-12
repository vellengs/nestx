import { HttpClient } from './../../scripts/client';

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
    

    it('[put] /user/profile', async () => {
        const reqBody = {
            name: '',
            mobile: '',
            password: '',
            roles: '',
            email: '',
            company: '',
            siteUrl: '',
            address: '',
        };
    const res = await HttpClient.coreApi.usersUpdateProfile(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[post] /user/', async () => {
        const reqBody = {
            username: '',
            password: '',
            avatar: '',
            email: '',
            name: '',
            mobile: '',
            isAdmin: '',
            isApproved: '',
            expired: '',
            company: '',
            siteUrl: '',
            address: '',
        };
    const res = await HttpClient.coreApi.usersCreate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[put] /user/', async () => {
        const reqBody = {
            id: '',
            name: '',
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
         const page = '';
         const size = '';
    const res = await HttpClient.coreApi.usersQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    

    it('[get] /user/{id}', async () => {
         const id = '';
    const res = await HttpClient.coreApi.usersFindOne(id);
        expect(res.status).toBe(200);
    });
    
});