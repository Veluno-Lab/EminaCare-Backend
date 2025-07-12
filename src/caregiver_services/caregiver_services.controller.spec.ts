import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverServicesController } from './caregiver_services.controller';

describe('CaregiverServicesController', () => {
  let controller: CaregiverServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaregiverServicesController],
    }).compile();

    controller = module.get<CaregiverServicesController>(
      CaregiverServicesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
