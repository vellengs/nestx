
import { DictsController } from './dicts.controller';
import { UsersController } from './users.controller';
import { DictsService } from './dicts.service';
import { UsersService } from './users.service';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { NoticesController } from './notices.controller';
import { NoticesService } from './notices.service';
import { MockController } from './mock.controller';
import { MockService } from './mock.service';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

export const CoreControllers = [
    DictsController,
    UsersController,
    MenusController,
    LogsController,
    NoticesController,
    MockController,
    SettingsController,
    RolesController,
    GroupsController,
];

export const CoreServices = [
    DictsService,
    UsersService,
    MenusService,
    LogsService,
    NoticesService,
    MockService,
    SettingsService,
    RolesService,
    GroupsService,
];