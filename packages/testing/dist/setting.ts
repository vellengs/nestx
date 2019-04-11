import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('setting module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /setting/', async () => {

        const reqBody = {
            name: '',
            key: '',
            value: '',
            description: '',
        };

    const res = await HttpClient.coreApi.settingsCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /setting/', async () => {

        const reqBody = {
            id: '',
            name: '',
            key: '',
            value: '',
            description: '',
        };

    const res = await HttpClient.coreApi.settingsUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[put] /setting/name/{name}', async () => {

         const name = '';
         const entry = '';

    const res = await HttpClient.coreApi.settingsUpdateSettingsByName(name, entry);
        expect(res.status).toBe(200);
    });
    it('[get] /setting/name/{name}', async () => {

         const name = '';

    const res = await HttpClient.coreApi.settingsGetSettingsByName(name);
        expect(res.status).toBe(200);
    });
    it('[get] /setting/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.settingsSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /setting/query', async () => {

         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.settingsQuery(keyword, index, size);
        expect(res.status).toBe(200);
    });
    it('[get] /setting/key/{key}', async () => {

         const key = '';

    const res = await HttpClient.coreApi.settingsGetSettingsByKey(key);
        expect(res.status).toBe(200);
    });
    it('[get] /setting/{id}', async () => {

         const id = '';

    const res = await HttpClient.coreApi.settingsFindOne(id);
        expect(res.status).toBe(200);
    });
});