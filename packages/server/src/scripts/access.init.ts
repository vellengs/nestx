import { grants } from './access.grants';
import { CoreDatabase as Db } from './database';

async function init() {
  let result = 0;
  // await Db.Menu.remove({ isMenu: true }).exec();
  const keys = Object.keys(grants);

  for (let key of keys) {
    const node = grants[key];
    const { actions } = node;
    const items = Object.keys(actions);
    for (let subKey of items) {
      const action = actions[subKey];
      const menu = {
        name: node.name + action,
        slug: `${key}/${subKey}`,
        link: `${key}/${subKey}`,
        isMenu: false,
      };
      const count = await Db.Menu.findOneAndUpdate({ link: menu.link }, menu, {
        upsert: true,
        new: true,
      }).exec();
      if (count) {
        result++;
      }
    }
  }
  console.log('result', result);
}

init();
