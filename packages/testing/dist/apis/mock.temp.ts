import { HttpClient } from './../../scripts/client';

describe('mock module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /mock/init', async () => {


    const res = await HttpClient.mockApi.mockInitData();
        expect(res.status).toBe(200);
    });
    it('[get] /mock/reset', async () => {


    const res = await HttpClient.mockApi.mockReset();
        expect(res.status).toBe(200);
    });
});