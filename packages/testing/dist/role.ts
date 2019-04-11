import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('role module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /role/', async () => {

        const reqBody = {
            name: '',
            description: '',
            permissions: '',
        };

    const res = await HttpClient.coreApi.rolesCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /role/', async () => {

        const reqBody = {
            id: '',
            name: '',
            description: '',
            permissions: '',
        };

    const res = await HttpClient.coreApi.rolesUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /role/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.rolesSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /role/query', async () => {

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.rolesQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /role/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.rolesFindOne(id);
        expect(res.status).toBe(200);
    });
});