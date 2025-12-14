import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { GgModule } from './gg/gg.module';

@Module({
  imports: [TaskModule, GgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
