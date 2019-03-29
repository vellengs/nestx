import { MONGODB_URI } from './../utils/secrets';
import { Installer } from "./data.install";
const installer = new Installer(MONGODB_URI);
installer.initData().then(() => {
    console.log('imported ...');
});
