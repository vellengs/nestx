import { DictsController } from "./dicts.controller";
import { UsersController } from "./users.controller";
import { DictsService } from "./dicts.service";
import { UsersService } from "./users.service";
import { MenusController } from "./menus.controller";
import { MenusService } from "./menus.service";
import { LogsService } from "./logs.service";
import { LogsController } from "./logs.controller";
import { NoticesController } from "./notices.controller";
import { NoticesService } from "./notices.service";
import { SettingsController } from "./settings.controller";
import { SettingsService } from "./settings.service";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { GroupsController } from "./groups.controller";
import { GroupsService } from "./groups.service";
import { AppearancesController } from "./appearances.controller";
import { AppearancesService } from "./appearances.service";
import { AccessManagement } from "./access.management";
import { LoggerService } from "./logger.service";

export const BaseControllers = [
  DictsController,
  UsersController,
  MenusController,
  LogsController,
  NoticesController,
  SettingsController,
  RolesController,
  GroupsController,
  AppearancesController
];

export const BaseServices = [
  DictsService,
  UsersService,
  MenusService,
  LogsService,
  NoticesService,
  SettingsService,
  RolesService,
  GroupsService,
  AppearancesService,
  AccessManagement,
  LoggerService
];

export {
  DictsController,
  UsersController,
  MenusController,
  LogsController,
  NoticesController,
  SettingsController,
  RolesController,
  GroupsController,
  AppearancesController,
  DictsService,
  UsersService,
  MenusService,
  LogsService,
  NoticesService,
  SettingsService,
  RolesService,
  GroupsService,
  AppearancesService,
  AccessManagement,
  LoggerService
};
