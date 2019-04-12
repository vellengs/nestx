import { HttpClient } from './../../scripts/client';

describe('appearance module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /appearance/', async () => {

        const reqBody = {
            name: '',
            option: '',
            data: '',
        };

    const res = await HttpClient.coreApi.appearancesCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /appearance/', async () => {

        const reqBody = {
            id: '',
            name: '',
            option: '',
            data: '',
        };

    const res = await HttpClient.coreApi.appearancesUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /appearance/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.appearancesSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /appearance/query', async () => {

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.appearancesQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /appearance/name/{name}', async () => {

         const name = '';

    const res = await HttpClient.coreApi.appearancesGetAppearanceByName(name);
        expect(res.status).toBe(200);
    });
    it('[get] /appearance/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.appearancesFindOne(id);
        expect(res.status).toBe(200);
    });
});