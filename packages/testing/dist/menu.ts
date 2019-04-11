import { HttpClient } from './../../scripts/client';
import { login } from '../utils/login';

describe('menu module test', () => {

    beforeAll(async () => {
        await HttpClient.initDatabase()
    })

    afterAll(async () => {

    })

    it('[post] /menu/', async () => {

        const reqBody = {
            name: '',
            slug: '',
            group: '',
            link: '',
            order: '',
            externalLink: '',
            blank: '',
            icon: '',
            badge: '',
            badgeDot: '',
            badgeStatus: '',
            enable: '',
            expanded: '',
            acl: '',
            paths: '',
            parent: '',
            permissions: '',
            isMenu: '',
        };

    const res = await HttpClient.coreApi.menusCreate(reqBody);
        expect(res.status).toBe(204);
    });
    it('[put] /menu/', async () => {

        const reqBody = {
            id: '',
            name: '',
            slug: '',
            group: '',
            link: '',
            order: '',
            externalLink: '',
            blank: '',
            icon: '',
            badge: '',
            badgeDot: '',
            badgeStatus: '',
            enable: '',
            expanded: '',
            acl: '',
            paths: '',
            parent: '',
            permissions: '',
            isMenu: '',
        };

    const res = await HttpClient.coreApi.menusUpdate(reqBody);
        expect(res.status).toBe(200);
    });
    it('[get] /menu/search', async () => {

         const keyword = '';
         const value = '';

    const res = await HttpClient.coreApi.menusSearch(keyword, value);
        expect(res.status).toBe(200);
    });
    it('[get] /menu/query', async () => {

         const isMenu = '';
         const keyword = '';
         const index = '';
         const size = '';

    const res = await HttpClient.coreApi.menusQuery(isMenu, keyword, index, size);
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

         const id = '';

    const res = await HttpClient.coreApi.menusFindOne(id);
        expect(res.status).toBe(200);
    });
});