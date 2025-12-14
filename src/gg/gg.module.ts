import { Module } from '@nestjs/common';
import { GgService } from './gg.service';
import { GgController } from './gg.controller';

@Module({
  controllers: [GgController],
  providers: [GgService],
})
export class GgModule {}
