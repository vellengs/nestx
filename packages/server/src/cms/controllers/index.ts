import { PhotoController } from "./photo.controller";
import { PhotoService } from "./photo.service";
import { ArticleController } from "./article.controller";
import { CategoryController } from "./category.controller";
import { MediaController } from "./media.controller";
import { PageController } from "./page.controller";
import { WidgetController } from "./widget.controller";
import { ArticleService } from "./article.service";
import { CategoryService } from "./category.service";
import { MediaService } from "./media.service";
import { PageService } from "./page.service";
import { WidgetService } from "./widget.service";


export const CmsControllers = [
    PhotoController,
    ArticleController,
    CategoryController,
    MediaController,
    PageController,
    PhotoController,
    WidgetController,
];

export const CmsServices = [
    PhotoService,
    ArticleService,
    CategoryService,
    MediaService,
    PageService,
    PhotoService,
    WidgetService,
];