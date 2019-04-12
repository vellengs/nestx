import { HttpClient } from './../../scripts/client';

describe('widget module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })


    it('[get] /widget/search', async () => {
         const keyword = '';
         const value = '';
    const res = await HttpClient.cmsApi.widgetSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    

    it('[post] /widget/', async () => {
        const reqBody = {
            name: '',
            title: '',
            params: '',
            type: '',
        };
    const res = await HttpClient.cmsApi.widgetCreate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[put] /widget/', async () => {
        const reqBody = {
            id: '',
            name: '',
            title: '',
            params: '',
            type: '',
        };
    const res = await HttpClient.cmsApi.widgetUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[get] /widget/query', async () => {
         const keyword = '';
         const page = '';
         const size = '';
    const res = await HttpClient.cmsApi.widgetQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    

    it('[delete] /widget/{id}', async () => {
         const id = '';
    const res = await HttpClient.cmsApi.widgetRemove(id);
        expect(res.status).toBe(200);
    });
    

    it('[get] /widget/{id}', async () => {
         const id = '';
    const res = await HttpClient.cmsApi.widgetFindOne(id);
        expect(res.status).toBe(200);
    });
    
});