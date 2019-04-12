import { HttpClient } from './../../scripts/client';

describe('photo module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /photo/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.cmsApi.photoSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[post] /photo/', async () => {

        const reqBody = {
            name: '',
            caption: '',
            description: '',
            ext: '',
            url: '',
            uri: '',
        };

    const res = await HttpClient.cmsApi.photoCreate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[put] /photo/', async () => {

        const reqBody = {
            id: '',
            name: '',
            caption: '',
            description: '',
            ext: '',
            url: '',
            uri: '',
        };

    const res = await HttpClient.cmsApi.photoUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /photo/query', async () => {

         const keyword = '';
         const page = '';
         const size = '';

    const res = await HttpClient.cmsApi.photoQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    it('[delete] /photo/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.photoRemove(id);
        expect(res.status).toBe(200);
    });
    it('[get] /photo/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.photoFindOne(id);
        expect(res.status).toBe(200);
    });
});