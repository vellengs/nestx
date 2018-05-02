import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) { }

  async create() {
    const photo = new Photo();
    photo.description = '111';
    photo.filename = '121';
    photo.isPublished = false;
    photo.name = '123213';
    photo.views = 1;
    await photo.save();
    return photo;
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
}
