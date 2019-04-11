import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('page module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /page/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.cmsApi.pageSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[post] /page/', async () => {

        const reqBody = {
            name: '',
            title: '',
            description: '',
            sort: '',
            disable: '',
            meta: '',
            publish: '',
            content: '',
            template: '',
        };

    const res = await HttpClient.cmsApi.pageCreate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[put] /page/', async () => {

        const reqBody = {
            id: '',
            name: '',
            title: '',
            description: '',
            sort: '',
            disable: '',
            publish: '',
            meta: '',
            content: '',
            template: '',
        };

    const res = await HttpClient.cmsApi.pageUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /page/query', async () => {

         const keyword = '';
         const page = '';
         const size = '';

    const res = await HttpClient.cmsApi.pageQuery(keyword, page, size);
        expect(res.status).toBe(200);
    });
    it('[delete] /page/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.pageRemove(id);
        expect(res.status).toBe(200);
    });
    it('[get] /page/{id}', async () => {

         const id = '';

    const res = await HttpClient.cmsApi.pageFindOne(id);
        expect(res.status).toBe(200);
    });
});