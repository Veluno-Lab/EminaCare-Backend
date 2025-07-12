import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverServicesService } from './caregiver_services.service';

describe('CaregiverServicesService', () => {
  let service: CaregiverServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaregiverServicesService],
    }).compile();

    service = module.get<CaregiverServicesService>(CaregiverServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
