
import { existsSync } from 'fs';
import { resolve } from 'path';
import { Connection, Model } from 'mongoose';

const models = ['Role', 'Dict', 'Menu', 'Setting', 'User'];

export class Installer {
    private static processing = false;
    constructor(readonly db: Connection) {

    }
    public static async importData(model: Model<any>) {
        const dataFolder = process.cwd();
        const data = Installer.loadJson(dataFolder, model.modelName);
        await model.deleteMany({}).exec();
        await model.insertMany(data);
    }

    private static loadJson(dataFolder: string, file: string) {
        const filePath = resolve(dataFolder, `data/export.${file}.json`);
        if (existsSync(filePath)) {
            return require(filePath);
        }
        return [];
    }

    async initData() {
        if (!Installer.processing) {
            Installer.processing = true;
            console.log('Installer processing');
            for (const name of models) {
                const model = this.db.model(name);
                await Installer.importData(model);
            }
            Installer.processing = false;
        }
    }

    async reset() {
        console.log('start reset data ..');
        await this.initData();
    }


}