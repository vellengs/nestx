
import { existsSync } from 'fs';
import { resolve } from 'path';
import * as bluebird from 'bluebird';
import { Connection, Model } from 'mongoose';

export class Installer {
    private static processing = false;
    constructor(readonly db: Connection) {

    }
    public static async importData(model: Model<any>) {
        const dataFolder = process.cwd();
        const data = Installer.loadJson(dataFolder, model.modelName);
        // console.log('start delete ...', model.modelName);
        await model.deleteMany({}).exec();
        //  console.log('start insert ...', model.modelName);
        await model.insertMany(data)
    }

    private static loadJson(dataFolder: string, file: string) {
        const filePath = resolve(dataFolder, `data/export.${file}.json`);
        if (existsSync(filePath)) {
            return require(filePath);
        }
        return [];
    }

    async initData() {
        console.log('start init data');
        if (!Installer.processing) {
            Installer.processing = true;
            await bluebird.promisifyAll(['Role', 'Dict', 'Menu', 'Setting', 'User']).map(async (name) => {
                const model = this.db.model(name);
                return Installer.importData(model);
            });

            Installer.processing = false;
        }
        await new Promise((resolve) => setTimeout(resolve, 200));
        return true;
    }

    async reset() {
        console.log('start reset data ..');
        await this.initData();
    }


}