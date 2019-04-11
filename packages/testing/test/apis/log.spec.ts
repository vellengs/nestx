
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('log module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('query logs', async () => {
        const res = await HttpClient.coreApi.logsQuery();
        expect(res.status).toBe(200);
    });

    it('get log by id', async () => {
        const res = await HttpClient.coreApi.logsFindOne('5b0d013341b2399582a10b0a');
        expect(res.status).toBe(200);
    });


});