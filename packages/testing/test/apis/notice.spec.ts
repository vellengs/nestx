
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('notice module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('create notice', async () => {

        const reqBody = {
            "title": "string",
            "description": "string",
            "extra": "string",
            "status": "string",
            "type": "string"
        }

        const res = await HttpClient.coreApi.noticesCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('edit notice', async () => {
        const reqBody = {
            "id": "5ca8a3d700734500d6e5d861",
            "title": "string",
            "description": "string",
            "extra": "string",
            "status": "string",
            "type": "string"
        }
        const res = await HttpClient.coreApi
            .noticesUpdate(reqBody);
        expect(res.status).toBe(200);
    });

    it('query notices', async () => {
        const res = await HttpClient.coreApi.noticesQuery();
        expect(res.status).toBe(200);
    });

    it('get notice by id', async () => {
        const res = await HttpClient.coreApi.noticesFindOne('5b0d013341b2399582a10b0a');
        expect(res.status).toBe(200);
    });
});