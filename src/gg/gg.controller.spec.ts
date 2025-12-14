import { Test, TestingModule } from '@nestjs/testing';
import { GgController } from './gg.controller';
import { GgService } from './gg.service';

describe('GgController', () => {
  let controller: GgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GgController],
      providers: [GgService],
    }).compile();

    controller = module.get<GgController>(GgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
