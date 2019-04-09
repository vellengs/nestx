"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dicts_controller_1 = require("./dicts.controller");
const users_controller_1 = require("./users.controller");
const dicts_service_1 = require("./dicts.service");
const users_service_1 = require("./users.service");
const menus_controller_1 = require("./menus.controller");
const menus_service_1 = require("./menus.service");
const logs_service_1 = require("./logs.service");
const logs_controller_1 = require("./logs.controller");
const notices_controller_1 = require("./notices.controller");
const notices_service_1 = require("./notices.service");
const mock_controller_1 = require("./mock.controller");
const mock_service_1 = require("./mock.service");
const settings_controller_1 = require("./settings.controller");
const settings_service_1 = require("./settings.service");
const roles_controller_1 = require("./roles.controller");
const roles_service_1 = require("./roles.service");
const groups_controller_1 = require("./groups.controller");
const groups_service_1 = require("./groups.service");
const appearances_controller_1 = require("./appearances.controller");
const appearances_service_1 = require("./appearances.service");
exports.CoreControllers = [
    dicts_controller_1.DictsController,
    users_controller_1.UsersController,
    menus_controller_1.MenusController,
    logs_controller_1.LogsController,
    notices_controller_1.NoticesController,
    mock_controller_1.MockController,
    settings_controller_1.SettingsController,
    roles_controller_1.RolesController,
    groups_controller_1.GroupsController,
    appearances_controller_1.AppearancesController,
];
exports.CoreServices = [
    dicts_service_1.DictsService,
    users_service_1.UsersService,
    menus_service_1.MenusService,
    logs_service_1.LogsService,
    notices_service_1.NoticesService,
    mock_service_1.MockService,
    settings_service_1.SettingsService,
    roles_service_1.RolesService,
    groups_service_1.GroupsService,
    appearances_service_1.AppearancesService,
];
//# sourceMappingURL=index.js.map