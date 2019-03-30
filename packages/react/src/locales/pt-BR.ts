import globalHeader from './pt-BR/globalHeader';
import login from './pt-BR/login';
import menu from './pt-BR/menu';
import settingDrawer from './pt-BR/settingDrawer';
import settings from './pt-BR/settings';
import pwa from './pt-BR/pwa';
import component from './pt-BR/component';

export default {
  'navBar.lang': 'Idiomas',
  'layout.user.link.help': 'ajuda',
  'layout.user.link.privacy': 'política de privacidade',
  'layout.user.link.terms': 'termos de serviços',
  'app.home.introduce': 'introduzir',
  ...login,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
