import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { async } from '@angular/core/testing';

@Controller('api/cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) { }


  /**
   * 创建目录
   * @param createCatDto 实体参数
   */
  @Post()
  @Roles('admin')
  async create( @Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  /**
   * 查询所有目录
   */
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }


  @Get('hello')
  async sayHello() {

    const data = await this.catsService.create({
      age: 1,
      name: 'test',
      breed: '222'
    });

    return {
      message: data.name,
    };
  }

  /**
   * 按编号查询目录
   * @param id 编号
   */
  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id,
  ) {
    // logic
  }


}
