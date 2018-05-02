import { Module } from '@nestjs/common';

import { StaticController } from './static.controller';

@Module({
  imports: [],
  controllers: [StaticController],
  providers: [],
})
export class StaticModule {}
