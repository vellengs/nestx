import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('article module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /article/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.cmsApi.articleSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[post] /article/', async () => {

        const reqBody = {
            name: '',
            title: '',
            keyword: '',
            picture: '',
            category: '',
            description: '',
            author: '',
            sort: '',
            disable: '',
            meta: '',
            content: '',
            template: '',
        };

    const res = await HttpClient.cmsApi.articleCreate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[put] /article/', async () => {

        const reqBody = {
            id: '',
            name: '',
            picture: '',
            title: '',
            keyword: '',
            category: '',
            description: '',
            author: '',
            sort: '',
            disable: '',
            meta: '',
            content: '',
            template: '',
        };

    const res = await HttpClient.cmsApi.articleUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /article/query', async () => {

         const keyword = '';
         const category = '';
         const page = '';
         const size = '';

    const res = await HttpClient.cmsApi.articleQuery(keyword, category, page, size);
        expect(res.status).toBe(200);
    });
    it('[delete] /article/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.articleRemove(id);
        expect(res.status).toBe(200);
    });
    it('[get] /article/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.articleFindOne(id);
        expect(res.status).toBe(200);
    });
});