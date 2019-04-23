
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('dict module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('[post] /dict/', async () => {
        const reqBody = {
            "category": "string",
            "name": "string",
            "translate": "string",
            "expand": "{\"demo\":123}"
        }
        const res = await HttpClient.coreApi.dictsCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('[put] /dict/', async () => {
        const reqBody = {
            "id": "59f058a7696cf532c5172ead",
            "category": "string",
            "name": "string",
            "translate": "string",
            "expand": "{}"
        }
        const res = await HttpClient.coreApi.dictsUpdate(reqBody);
        expect(res.status).toBe(200);
    });

    it('[get] /dict/search', async () => {
        const keyword = 'iphone';
        const value = '苹果';
        const res = await HttpClient.coreApi.dictsSearch(keyword, value);
        expect(res.status).toBe(200);
        expect(res.data.length).toBeGreaterThan(0);
    });

    it('[get] /dict/query', async () => {
        const res = await HttpClient.coreApi.dictsQuery();
        expect(res.status).toBe(200);
    });

    it('[get] /dict/{id}', async () => {
        const id = '59f058a7696cf532c5172ea1';
        const res = await HttpClient.coreApi.dictsFindOne(id);
        expect(res.status).toBe(200);
        expect(res.data.id).toBe(id);
    });
});