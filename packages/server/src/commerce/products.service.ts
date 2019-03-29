import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/Product.interface';

@Injectable()
export class ProductsService {
  private readonly items: Product[] = [];

  create(item: Product) {
    this.items.push(item);
  }

  findAll(): Product[] {
    return this.items;
  }
}
