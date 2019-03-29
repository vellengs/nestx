import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { RoleTypes } from './../config/enums';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/Product.interface';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @Roles(RoleTypes.admin)
  async create(@Body() createCatDto: CreateProductDto) {
    this.productsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {

  }
}
