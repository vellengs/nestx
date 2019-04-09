import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CmsControllers, CmsServices } from './controllers';
import {
  ArticleSchema,
  CategorySchema,
  CommentSchema,
  MediaSchema,
  PageSchema,
  PhotoSchema
} from './schemas';

const models = [
  { name: 'Article', schema: ArticleSchema },
  { name: 'Category', schema: CategorySchema },
  { name: 'Comment', schema: CommentSchema },
  { name: 'Media', schema: MediaSchema },
  { name: 'Page', schema: PageSchema },
  { name: 'Photo', schema: PhotoSchema },
];
@Module({
  imports: [
    MongooseModule.forFeature(models),
  ],
  controllers: [...CmsControllers],
  providers: [...CmsServices],
})
export class CmsModule { }
