import { Installer } from "./data.install";
import { CoreDatabase as db } from "./database";

async function exec() {
    await Installer.importData(db.Dict);
    await Installer.importData(db.Group);
    await Installer.importData(db.Log);
    await Installer.importData(db.Menu);
    await Installer.importData(db.Role);
    await Installer.importData(db.Setting);
    await Installer.importData(db.User);
    return true;
}
exec().then(() => {
    console.log('data imported.')
    process.exit(0);
});