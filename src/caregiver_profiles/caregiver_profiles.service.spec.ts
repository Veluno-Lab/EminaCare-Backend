import { Test, TestingModule } from '@nestjs/testing';
import { CaregiverProfilesService } from './caregiver_profiles.service';

describe('CaregiverProfilesService', () => {
  let service: CaregiverProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaregiverProfilesService],
    }).compile();

    service = module.get<CaregiverProfilesService>(CaregiverProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
