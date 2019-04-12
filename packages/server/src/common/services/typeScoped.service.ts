import { Injectable } from '@nestjs/common';
import { ClassType } from 'class-transformer/ClassTransformer';

@Injectable()
export class TypeScoped {

  static scoped<T, V>(cls: ClassType<T>, entry: V) {
    console.log('type:', typeof cls);
    return entry; // TODO
  }

}
