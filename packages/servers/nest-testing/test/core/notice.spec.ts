import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('notice module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    afterAll(async () => {

    })

    it('[post] /notice/', async () => {
        const reqBody = {
            title: 'demo',
            description: 'notice message',
            extra: 'hi',
            status: 'read',
            type: 'what',
        };
        const res = await HttpClient.coreApi.noticesCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('[put] /notice/', async () => {
        const reqBody = {
            id: '59f058a7696cf532d5172ea2',
            title: 'new title',
            description: 'desc',
            extra: 'other extra',
            status: 'todo',
            type: 'type',
        };
        const res = await HttpClient.coreApi.noticesUpdate(reqBody);
        expect(res.status).toBe(200);
    });

    it('[get] /notice/search', async () => {
        const keyword = '';
        const value = '';
        const res = await HttpClient.coreApi.noticesSearch(keyword, value);
        expect(res.status).toBe(200);
    });

    it('[get] /notice/query', async () => {
        const res = await HttpClient.coreApi.noticesQuery();
        expect(res.status).toBe(200);
    });

    it('[get] /notice/{id}', async () => {
        const id = '59f058a7696cf532d5172ea2';
        const res = await HttpClient.coreApi.noticesFindOne(id);
        expect(res.status).toBe(200);
    });
});