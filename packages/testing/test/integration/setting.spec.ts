
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('Setting module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        // await login();
    })

    beforeAll(async () => {

    })

    it('get settings user', async () => {
        const res = await HttpClient.coreApi.settingsGetSettingsByName("main");
        expect(res.status).toBe(200);
    });




});