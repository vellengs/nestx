import { HttpClient } from './../../scripts/client';

describe('media module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })


    it('[get] /media/search', async () => {
         const keyword = '';
         const value = '';
    const res = await HttpClient.cmsApi.mediaSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    

    it('[post] /media/', async () => {
        const reqBody = {
            name: '',
            caption: '',
            description: '',
            ext: '',
            url: '',
            uri: '',
        };
    const res = await HttpClient.cmsApi.mediaCreate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[put] /media/', async () => {
        const reqBody = {
            id: '',
            name: '',
            caption: '',
            description: '',
            ext: '',
            url: '',
            uri: '',
        };
    const res = await HttpClient.cmsApi.mediaUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[get] /media/query', async () => {
         const keyword = '';
         const page = '';
         const size = '';
    const res = await HttpClient.cmsApi.mediaQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    

    it('[delete] /media/{id}', async () => {
         const id = '';
    const res = await HttpClient.cmsApi.mediaRemove(id);
        expect(res.status).toBe(200);
    });
    

    it('[get] /media/{id}', async () => {
         const id = '';
    const res = await HttpClient.cmsApi.mediaFindOne(id);
        expect(res.status).toBe(200);
    });
    
});