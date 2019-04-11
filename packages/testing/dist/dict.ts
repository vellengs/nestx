import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('dict module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /dict/', async () => {

        const reqBody = {
            category: '',
            name: '',
            translate: '',
            expand: '',
        };

    const res = await HttpClient.coreApi.dictsCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /dict/', async () => {

        const reqBody = {
            id: '',
            category: '',
            name: '',
            translate: '',
            expand: '',
        };

    const res = await HttpClient.coreApi.dictsUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /dict/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.dictsSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /dict/query', async () => {

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.dictsQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /dict/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.dictsFindOne(id);
        expect(res.status).toBe(200);
    });
});