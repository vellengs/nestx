import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('api/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) { }

}
