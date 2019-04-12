import { HttpClient } from './../../scripts/client';

describe('group module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })


    it('[post] /group/', async () => {
        const reqBody = {
            outid: '',
            name: '',
            icon: '',
            parent: '',
            paths: '',
            director: '',
            order: '',
            isRegion: '',
            description: '',
        };
    const res = await HttpClient.coreApi.groupsCreate(reqBody);
        expect(res.status).toBe(204);
    });
    

    it('[put] /group/', async () => {
        const reqBody = {
            id: '',
            outid: '',
            name: '',
            icon: '',
            parent: '',
            paths: '',
            director: '',
            order: '',
            isRegion: '',
            description: '',
        };
    const res = await HttpClient.coreApi.groupsUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    

    it('[get] /group/search', async () => {
         const keyword = '';
         const value = '';
    const res = await HttpClient.coreApi.groupsSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    

    it('[get] /group/query', async () => {
         const keyword = '';
         const page = '';
         const size = '';
    const res = await HttpClient.coreApi.groupsQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    

    it('[get] /group/{id}', async () => {
         const id = '';
    const res = await HttpClient.coreApi.groupsFindOne(id);
        expect(res.status).toBe(200);
    });
    
});