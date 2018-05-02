import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('api/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) { }


  @Get('hello')
  async sayHello() {

    const data = await this.photoService.create();

    return {
      message: data,
    };
  }


  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}
