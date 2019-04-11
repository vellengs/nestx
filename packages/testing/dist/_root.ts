import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('_root module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[get] /', async () => {


    const res = await HttpClient.appApi.appRoot();
        expect(res.status).toBe(200);
    });
});