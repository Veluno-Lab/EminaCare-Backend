import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverProfilesController } from './caregiver_profiles.controller';

describe('CaregiverProfilesController', () => {
  let controller: CaregiverProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaregiverProfilesController],
    }).compile();

    controller = module.get<CaregiverProfilesController>(CaregiverProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
