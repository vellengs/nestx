
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('menu module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase();
        await login();
    })

    beforeAll(async () => {

    })

    it('[post] /menu/', async () => {
        const reqBody = {
            name: 'home',
            slug: 'main',
            group: true,
            link: '/home',
            order: 0,
            blank: false,
            icon: 'icon-home',
            enable: true,
            expanded: false,
            isMenu: true,
        }

        const res = await HttpClient.coreApi.menusCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('[put] /menu/', async () => {
        const reqBody = {
            id: '5b0d013341b2399582a10b0a',
            name: '资料管理',
            slug: 'information',
            group: true,
            link: '/information',
            order: 0,
            blank: false,
            icon: 'icon-screen-desktop',
            enable: true,
            expanded: false,
            isMenu: true,
        }
        const res = await HttpClient.coreApi
            .menusUpdate(reqBody);
        expect(res.status).toBe(200);
    });


    it('[get] /menu/query', async () => {
        const res = await HttpClient.coreApi.menusQuery(true);
        expect(res.status).toBe(200);
    });

    it('[get] /menu/search', async () => {
        const params = {
            keyword: '设置',
            value: ''
        }
        const res = await HttpClient.coreApi.menusSearch(params.keyword, params.value);
        expect(res.status).toBe(200);
    });

    it('[get] /menu/auth', async () => {
        const res = await HttpClient.coreApi.menusGetUserMenus();
        expect(res.status).toBe(200);
    });

    it('[get] /menu/permissions', async () => {
        const res = await HttpClient.coreApi.menusGetPermissionTags();
        expect(res.status).toBe(200);
    });

    it('[get] /menu/auth', async () => {
        const res = await HttpClient.coreApi.menusGetUserMenus();
        expect(res.status).toBe(200);
    });

    it('[get] /menu/{id}', async () => {
        const res = await HttpClient.coreApi.menusFindOne('5b0d013341b2399582a10b0a');
        expect(res.status).toBe(200);
    });


});