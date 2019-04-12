
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('user module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('[post] /user/', async () => {
        const reqBody = {
            username: 'demo001',
            password: 'psw0121',
            avatar: 'http://www.avatar.com/example.jpg',
            email: 'demo001@',
            name: 'sam',
            mobile: '13069099883',
            isAdmin: true,
            isApproved: true,
            expired: new Date(2109, 1, 10).getTime(),
            company: 'A demo name of company',
            siteUrl: 'http://wwww.example.com',
            address: 'baba 012 add ss',
        }
        const res = await HttpClient.coreApi.usersCreate(reqBody);
        expect(res.status).toBe(201);
        expect(res.data.username).toBe(reqBody.username);
        expect(res.data.isAdmin).toBe(reqBody.isAdmin);
    });

    it('[get] /user/profile', async () => {
        const res = await HttpClient.coreApi.usersProfile();
        expect(res.status).toBe(200);
        expect(res.data.username).toBeDefined();
        expect(res.data.roles.length).toBeGreaterThan(1);
        expect(res.data.password).toBeUndefined();
    });

    it('[put] /user/profile', async () => {
        const profile = await HttpClient.coreApi.usersProfile();

        const reqBody = {
            name: 'newName',
            username: '',
            mobile: '13029999211',
            // password: '',
            email: 'new@mail.com',
            company: 'new company name',
            siteUrl: 'http://www.new-domain.com',
            address: 'this is a demo of address',
        };

        const res = await HttpClient.coreApi.usersUpdateProfile(reqBody);
        expect(res.status).toBe(200);
    });

    // it('edit user', async () => {
    //     const reqBody = {
    //         "id": "5b31eba49a674f606f7c5849",
    //         "name": "viking",
    //         "username": "vellengs2",
    //         "mobile": "13063090490",
    //         "email": "edit_user@vellengs.com"
    //     }
    //     const res = await HttpClient.coreApi
    //         .usersUpdate(reqBody);
    //     expect(res.status).toBe(200);
    // });

    // it('query user', async () => {
    //     const res = await HttpClient.coreApi.usersQuery();
    //     expect(res.status).toBe(200);
    // });

    // it('get user by id', async () => {
    //     const res = await HttpClient.coreApi.dictsFindOne('5b31eba49a674f606f7c5849');
    //     expect(res.status).toBe(200);
    // });

    // it('get user profile', async () => {
    //     const res = await HttpClient.coreApi.usersProfile();
    //     expect(res.status).toBe(200);
    // });




    // it('[post] /user/', async () => {

    //     const reqBody = {
    //         username: '',
    //         password: '',
    //         avatar: '',
    //         email: '',
    //         name: '',
    //         mobile: '',
    //         isAdmin: '',
    //         isApproved: '',
    //         expired: '',
    //         company: '',
    //         siteUrl: '',
    //         address: '',
    //     };

    //     const res = await HttpClient.coreApi.usersCreate(reqBody);
    //     expect(res.status).toBe(200);
    // });
    // it('[put] /user/', async () => {

    //     const reqBody = {
    //         id: '',
    //         name: '',
    //         username: '',
    //         mobile: '',
    //         password: '',
    //         roles: '',
    //         email: '',
    //         company: '',
    //         siteUrl: '',
    //         address: '',
    //     };

    //     const res = await HttpClient.coreApi.usersUpdate(reqBody);
    //     expect(res.status).toBe(200);
    // });
    // it('[post] /user/role', async () => {

    //     const reqBody = {
    //         role: '',
    //         userIds: '',
    //     };

    //     const res = await HttpClient.coreApi.usersAddUsersToRole(reqBody);
    //     expect(res.status).toBe(200);
    // });
    // it('[delete] /user/role', async () => {

    //     const role = '';
    //     const id = '';

    //     const res = await HttpClient.coreApi.usersRemoveAccountFromRole(role, id);
    //     expect(res.status).toBe(200);
    // });
    // it('[get] /user/search', async () => {

    //     const keyword = '';
    //     const value = '';

    //     const res = await HttpClient.coreApi.usersSearch(keyword, value);
    //     expect(res.status).toBe(200);
    // });
    // it('[get] /user/query', async () => {

    //     const keyword = '';
    //     const index = '';
    //     const size = '';

    //     const res = await HttpClient.coreApi.usersQuery(keyword, index, size);
    //     expect(res.status).toBe(200);
    // });
    // it('[get] /user/{id}', async () => {

    //     const id = '';

    //     const res = await HttpClient.coreApi.usersFindOne(id);
    //     expect(res.status).toBe(200);
    // });

});