import { Test, TestingModule } from '@nestjs/testing';
import { PokemonModuleController } from './pokemon-module.controller';
import { PokemonModuleService } from './pokemon-module.service';

describe('PokemonModuleController', () => {
  let controller: PokemonModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonModuleController],
      providers: [PokemonModuleService],
    }).compile();

    controller = module.get<PokemonModuleController>(PokemonModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
