
import { DictsController } from './dicts.controller';
import { UsersController } from './users.controller';
import { DictsService } from './dicts.service';
import { UsersService } from './users.service';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

export const CoreControllers = [
    DictsController,
    UsersController,
    MenusController,
    LogsController,
];

export const CoreServices = [
    DictsService,
    UsersService,
    MenusService,
    LogsService,
];