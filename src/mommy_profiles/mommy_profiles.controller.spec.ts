import { Test, TestingModule } from '@nestjs/testing';
import { MommyProfilesController } from './mommy_profiles.controller';

describe('MommyProfilesController', () => {
  let controller: MommyProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MommyProfilesController],
    }).compile();

    controller = module.get<MommyProfilesController>(MommyProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
