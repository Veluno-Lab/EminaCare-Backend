import { Test, TestingModule } from '@nestjs/testing';
import { CareServiceController } from './care_services.controller';

describe('CareServicesController', () => {
  let controller: CareServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareServiceController],
    }).compile();

    controller = module.get<CareServiceController>(CareServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
