import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GgService } from './gg.service';
import { CreateGgDto } from './dto/create-gg.dto';
import { UpdateGgDto } from './dto/update-gg.dto';

@Controller('gg')
export class GgController {
  constructor(private readonly ggService: GgService) {}

  @Post()
  create(@Body() createGgDto: CreateGgDto) {
    return this.ggService.create(createGgDto);
  }

  @Get()
  findAll() {
    return this.ggService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ggService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGgDto: UpdateGgDto) {
    return this.ggService.update(+id, updateGgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ggService.remove(+id);
  }
}
