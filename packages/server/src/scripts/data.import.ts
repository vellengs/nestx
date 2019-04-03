import { Installer } from "./data.install";
import { CoreDatabase } from "./database";
const installer = new Installer(CoreDatabase.Context);
installer.initData().then(() => {
    console.log('data imported');
    process.exit(0);
});
