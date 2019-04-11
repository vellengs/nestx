import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('category module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /category/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.cmsApi.categorySearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[post] /category/', async () => {

        const reqBody = {
            name: '',
            slug: '',
            order: '',
            parent: '',
            paths: '',
            description: '',
        };

    const res = await HttpClient.cmsApi.categoryCreate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[put] /category/', async () => {

        const reqBody = {
            id: '',
            name: '',
            slug: '',
            order: '',
            parent: '',
            paths: '',
            description: '',
        };

    const res = await HttpClient.cmsApi.categoryUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /category/query', async () => {

         const keyword = '';
         const page = '';
         const size = '';

    const res = await HttpClient.cmsApi.categoryQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    it('[delete] /category/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.categoryRemove(id);
        expect(res.status).toBe(200);
    });
    it('[get] /category/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.categoryFindOne(id);
        expect(res.status).toBe(200);
    });
});