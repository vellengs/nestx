"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const models = ['Role', 'Dict', 'Menu', 'Setting', 'User'];
class Installer {
    constructor(db) {
        this.db = db;
    }
    static importData(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataFolder = process.cwd();
            const data = Installer.loadJson(dataFolder, model.modelName);
            yield model.deleteMany({}).exec();
            yield model.insertMany(data);
        });
    }
    static loadJson(dataFolder, file) {
        const filePath = path_1.resolve(dataFolder, `data/export.${file}.json`);
        if (fs_1.existsSync(filePath)) {
            return require(filePath);
        }
        return [];
    }
    initData() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Installer.processing) {
                Installer.processing = true;
                console.log('Installer processing');
                for (const name of models) {
                    const model = this.db.model(name);
                    yield Installer.importData(model);
                }
                Installer.processing = false;
            }
        });
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('start reset data ..');
            yield this.initData();
        });
    }
}
Installer.processing = false;
exports.Installer = Installer;
//# sourceMappingURL=data.install.js.map