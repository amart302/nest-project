import { Injectable } from '@nestjs/common';
import { CreateGgDto } from './dto/create-gg.dto';
import { UpdateGgDto } from './dto/update-gg.dto';

@Injectable()
export class GgService {
  create(createGgDto: CreateGgDto) {
    return 'This action adds a new gg';
  }

  findAll() {
    return `This action returns all gg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gg`;
  }

  update(id: number, updateGgDto: UpdateGgDto) {
    return `This action updates a #${id} gg`;
  }

  remove(id: number) {
    return `This action removes a #${id} gg`;
  }
}
