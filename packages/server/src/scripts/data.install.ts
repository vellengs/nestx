
import { existsSync } from 'fs';
import { resolve } from 'path';
import * as bluebird from 'bluebird';
import * as mongoose from 'mongoose';
import { model, Connection } from 'mongoose';

export class Installer {
    constructor(readonly db: Connection) {

    }

    private static loadJson(dataFolder: string, file: string) {
        const filePath = resolve(dataFolder, `data/export.${file}.json`);
        if (existsSync(filePath)) {
            return require(filePath);
        }
        return [];
    }

    private async importData(name: string) {
        const dataFolder = process.cwd();
        const data = Installer.loadJson(dataFolder, name.toLowerCase());
        return await this.db.model(name).insertMany(data);
    }

    async initData() {
        await this.db.dropDatabase();
        return bluebird.promisifyAll(['Role', 'Dict', 'Menu', 'Setting', 'User']).map((name) => {
            return this.importData(name);
        });
    }

    async reset() {
        await this.initData();
    }


}