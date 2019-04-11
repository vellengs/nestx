
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('dict module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('create dict', async () => {
        const reqBody = {
            "category": "string",
            "name": "string",
            "translate": "string",
            "expand": "{\"demo\":123}"
        }

        const res = await HttpClient.coreApi.dictsCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('edit dict', async () => {

        const reqBody = {
            "id": "59f058a7696cf532c5172ead",
            "category": "string",
            "name": "string",
            "translate": "string",
            "expand": "{}"
        }
        const res = await HttpClient.coreApi
            .dictsUpdate(reqBody);
        expect(res.status).toBe(200);
    });

    it('query dicts', async () => {
        const res = await HttpClient.coreApi.dictsQuery();
        expect(res.status).toBe(200);
    });

    it('get dict by id', async () => {
        const res = await HttpClient.coreApi.dictsFindOne('5b0d013341b2399582a10b0a');
        expect(res.status).toBe(200);
    });


});