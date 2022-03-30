import { Module } from '@nestjs/common';
import { PokemonModuleService } from './pokemon-module.service';
import { PokemonModuleController } from './pokemon-module.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PokemonModuleController],
  providers: [PokemonModuleService, PrismaService]
})
export class PokemonModuleModule {}
