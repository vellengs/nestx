
import { existsSync } from 'fs';
import { resolve } from 'path';
import * as bluebird from 'bluebird';
import * as mongoose from 'mongoose';
import { model, Connection } from 'mongoose';

export class Installer {
    private static processing = false;
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
        if (!Installer.processing) {
            Installer.processing = true;
            await new Promise((resolve) => {
                this.db.dropDatabase(resolve);
            });
            await bluebird.promisifyAll(['Role', 'Dict', 'Menu', 'Setting', 'User']).map((name) => {
                return this.importData(name);
            });
        }
        return true;
    }

    async reset() {
        await this.initData();
    }


}