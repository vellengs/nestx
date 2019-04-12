import { HttpClient } from './../../scripts/client';

describe('notice module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /notice/', async () => {

        const reqBody = {
            title: '',
            description: '',
            extra: '',
            status: '',
            type: '',
        };

    const res = await HttpClient.coreApi.noticesCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /notice/', async () => {

        const reqBody = {
            id: '',
            title: '',
            description: '',
            extra: '',
            status: '',
            type: '',
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

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.noticesQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /notice/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.noticesFindOne(id);
        expect(res.status).toBe(200);
    });
});