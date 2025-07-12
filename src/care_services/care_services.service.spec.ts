import { Test, TestingModule } from '@nestjs/testing';
import { CareServiceService } from './care_services.service';

describe('CareServicesService', () => {
  let service: CareServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareServiceService],
    }).compile();

    service = module.get<CareServiceService>(CareServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
