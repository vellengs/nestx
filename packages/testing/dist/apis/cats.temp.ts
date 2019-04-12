import { HttpClient } from './../../scripts/client';

describe('cats module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })


    it('[post] /cats/', async () => {
        const reqBody = {
            name: '',
            title: '',
        };
    const res = await HttpClient.defaultApi.productsCreate(reqBody);
        expect(res.status).toBe(204);
    });
    

    it('[get] /cats/', async () => {
    const res = await HttpClient.defaultApi.productsFindAll();
        expect(res.status).toBe(200);
    });
    

    it('[get] /cats/{id}', async () => {
         const id = '';
    const res = await HttpClient.defaultApi.productsFindOne(id);
        expect(res.status).toBe(204);
    });
    
});