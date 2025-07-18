import { Test, TestingModule } from '@nestjs/testing';
import { MommyProfilesService } from './mommy_profiles.service';

describe('MommyProfilesService', () => {
  let service: MommyProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MommyProfilesService],
    }).compile();

    service = module.get<MommyProfilesService>(MommyProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
