import { Injectable, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeService {
    constructor(
    ) { }
}
