import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CmsControllers, CmsServices } from './controllers';
import {
  ArticleSchema,
  CategorySchema,
  CommentSchema,
  MediaSchema,
  PageSchema,
  PhotoSchema,
  ContentSchema,
  CustomSchema,
} from './schemas';
import { WidgetSchema } from './schemas/widget.schema';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from './../config';

const models = [
  { name: 'Article', schema: ArticleSchema },
  { name: 'Category', schema: CategorySchema },
  { name: 'Comment', schema: CommentSchema },
  { name: 'Media', schema: MediaSchema },
  { name: 'Page', schema: PageSchema },
  { name: 'Photo', schema: PhotoSchema },
  { name: 'Widget', schema: WidgetSchema },
  { name: 'Content', schema: ContentSchema },
  { name: 'Custom', schema: CustomSchema },
];
@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dest: configService.get('MULTER_DEST'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature(models),
  ],
  controllers: [...CmsControllers],
  providers: [...CmsServices],
})
export class CmsModule {}
