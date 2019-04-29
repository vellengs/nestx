import { AuthModule } from 'nestx-auth/src/index';
import { BaseModule } from 'nestx-base/src/index';
import { CmsModule } from 'nestx-cms/src/index';
import { AppModule } from './app.module';
const scanModules = [AuthModule, BaseModule, CmsModule, AppModule];
