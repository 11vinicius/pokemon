import { Test, TestingModule } from '@nestjs/testing';
import { PokemonModuleService } from './pokemon-module.service';

describe('PokemonModuleService', () => {
  let service: PokemonModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonModuleService],
    }).compile();

    service = module.get<PokemonModuleService>(PokemonModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
