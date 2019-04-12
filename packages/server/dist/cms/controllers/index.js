"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_controller_1 = require("./photo.controller");
const photo_service_1 = require("./photo.service");
const article_controller_1 = require("./article.controller");
const category_controller_1 = require("./category.controller");
const media_controller_1 = require("./media.controller");
const page_controller_1 = require("./page.controller");
const widget_controller_1 = require("./widget.controller");
const article_service_1 = require("./article.service");
const category_service_1 = require("./category.service");
const media_service_1 = require("./media.service");
const page_service_1 = require("./page.service");
const widget_service_1 = require("./widget.service");
exports.CmsControllers = [
    photo_controller_1.PhotoController,
    article_controller_1.ArticleController,
    category_controller_1.CategoryController,
    media_controller_1.MediaController,
    page_controller_1.PageController,
    photo_controller_1.PhotoController,
    widget_controller_1.WidgetController,
];
exports.CmsServices = [
    photo_service_1.PhotoService,
    article_service_1.ArticleService,
    category_service_1.CategoryService,
    media_service_1.MediaService,
    page_service_1.PageService,
    photo_service_1.PhotoService,
    widget_service_1.WidgetService,
];
//# sourceMappingURL=index.js.map