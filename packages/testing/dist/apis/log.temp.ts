import { HttpClient } from './../../scripts/client';

describe('log module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })


    it('[get] /log/search', async () => {
         const keyword = '';
         const value = '';
    const res = await HttpClient.coreApi.logsSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    

    it('[get] /log/query', async () => {
         const keyword = '';
         const page = '';
         const size = '';
    const res = await HttpClient.coreApi.logsQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    

    it('[get] /log/{id}', async () => {
         const id = '';
    const res = await HttpClient.coreApi.logsFindOne(id);
        expect(res.status).toBe(200);
    });
    
});