
import { CoreDatabase as Db } from './database';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { connect } from './connector';
import { Connection } from "mongoose";

export class Installer {

    mongooseUri = '';
    db: Connection;
    constructor(mongooseUri: string) {
        this.mongooseUri = mongooseUri;
        this.db = connect(mongooseUri);
    }

    private static loadJson(dataFolder: string, file: string) {
        const filePath = resolve(dataFolder, `data/export.${file}.json`);
        if (existsSync(filePath)) {
            return require(filePath);
        }
        return [];
    }

    async initData() {
        const dataFolder = process.cwd();
        await Db.Role.insertMany(Installer.loadJson(dataFolder, 'roles'));
        await Db.Dict.insertMany(Installer.loadJson(dataFolder, 'dicts'));
        await Db.Menu.insertMany(Installer.loadJson(dataFolder, 'menus'));
        await Db.Setting.insertMany(Installer.loadJson(dataFolder, 'settings'));
        // await Db.Account.insertMany(Installer.loadJson(dataFolder, 'accounts'));
    }

    async drop() {
        this.db.dropDatabase();
        this.db.close();
    }


}