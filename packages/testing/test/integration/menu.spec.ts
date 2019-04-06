
import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('menu module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    beforeAll(async () => {

    })

    it('create menu', async () => {
        await login();
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
            paths: [] as any,
            isMenu: true,
        }

        const res = await HttpClient.coreApi.menusCreate(reqBody);
        expect(res.status).toBe(201);
    });

    it('edit menu', async () => {
        await login();
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


    it('query menu', async () => {
        await login();
        const res = await HttpClient.coreApi.menusQuery(true);
        expect(res.status).toBe(200);
    });


    it('search menu', async () => {
        await login();
        const params = {
            keyword: '设置',
            value: ''
        }
        const res = await HttpClient.coreApi.menusSearch(params.keyword, params.value);
        expect(res.status).toBe(200);
    });


    it.only('get users menus', async () => {
        await login();
        const res = await HttpClient.coreApi.menusGetUserMenus();
        expect(res.status).toBe(200);
    });

    it('get permission tags', async () => {
        await login();
        const res = await HttpClient.coreApi.menusGetPermissionTags();
        expect(res.status).toBe(200);
    });

});