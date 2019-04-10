import { Installer } from "./data.install";
import { CoreDatabase as db } from "./database";
import { resolve } from 'path';
import * as fs from 'fs';

async function importModuleAppearances(modules: string[]) {
    const current = process.cwd();
    for (const module of modules) {
        const folder = resolve(current, `src/${module}/appearances`);
        const files = fs.readdirSync(folder);
        for (const file of files) {
            const name = file.substr(0, file.indexOf('.'));
            console.log('name', name);
            const filePath = resolve(folder, file);
            await loadAppearance(name, filePath);
        }
    }
}

async function loadAppearance(name: string, file: string) {
    const result = await import(file);
    if (result) {
        const instance = new db.Appearance({
            name,
            options: JSON.stringify(result.options),
            data: JSON.stringify(result.appearance),
        });
        return await instance.save().then((rs) => { console.log('done', rs) });
    }
    return null;
}

async function exec() {
    await Installer.importData(db.Dict);
    await Installer.importData(db.Group);
    await Installer.importData(db.Log);
    await Installer.importData(db.Menu);
    await Installer.importData(db.Role);
    await Installer.importData(db.Setting);
    await Installer.importData(db.User);
    db.Appearance.remove({});
    await importModuleAppearances(['core', 'cms']);
    return true;
}
exec().then(() => {

    console.log('data imported.');
    process.exit(0);
});

