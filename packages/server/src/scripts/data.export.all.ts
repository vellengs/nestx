import { writeFileSync } from 'fs';
import { CoreDatabase as Db } from './database';

function save2File(file: string, data: object) {
    writeFileSync(`data/export.${file}.json`, JSON.stringify(data));
}

async function exportData() {
    const users = await Db.User.find().exec();
    save2File('user', users.map((item) => {
        return {
            _id: item._id,
            username: item.username,
            name: item.name,
            password: item.password,
            avatar: item.avatar,
            type: item.type,
            email: item.email,
            mobile: item.mobile,
            roles: item.roles,
            groups: item.groups,
            isDisable: item.isDisable,
            isAdmin: item.isAdmin,
            isApproved: item.isApproved,
            secret: item.secret,
            expired: item.expired
        }
    }));

    const dicts = await Db.Dict.find().exec();
    save2File('dict', dicts.map((item) => {
        return {
            _id: item._id,
            category: item.category,
            name: item.name,
            translate: item.translate,
        }
    }));

    const groups = await Db.Group.find().exec();
    save2File('group', groups.map((item) => {
        return {
            _id: item._id,
            outid: item.outid,
            name: item.name,
            icon: item.icon,
            isRegion: item.isRegion,
            order: item.order,
            parent: item.parent,
            paths: item.paths,
            director: item.director,
            description: item.description,
        }
    }));

    const roles = await Db.Role.find().exec();
    save2File('role', roles.map((item) => {
        return {
            _id: item._id,
            name: item.name,
            description: item.description,
            permissions: item.permissions,
        }
    }));

    const menus = await Db.Menu.find().exec();
    save2File('menu', menus.map((item) => {
        return {
            _id: item._id,
            name: item.name,
            parent: item.parent,
            paths: item.paths,
            order: item.order,
            isMenu: item.isMenu,
            link: item.link,
            slug: item.slug,
            externalLink: item.externalLink,
            blank: item.blank,
            icon: item.icon,
            enable: item.enable,
            permissions: item.permissions
        }
    }));

    const settings = await Db.Setting.find().exec();
    save2File('setting', settings.map((item) => {
        return {
            _id: item._id,
            name: item.name,
            key: item.key,
            value: item.value,
            description: item.description
        }
    }));

    console.log('export data done....');
}

exportData()