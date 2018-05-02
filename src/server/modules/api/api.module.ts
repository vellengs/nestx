import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { CatsModule } from '../../cats/cats.module';
import { CatsService } from '../../cats/cats.service';
import { catsProviders } from '../../cats/cats.providers';

@Module({
  imports: [CatsModule],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule { }
