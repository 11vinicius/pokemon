import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonModuleService } from './pokemon-module.service';
import { CreatePokemonDto } from './dto/create-pokemon-module.dto';
import { UpdatePokemonModuleDto } from './dto/update-pokemon-module.dto';

@Controller('pokemon')
export class PokemonModuleController {
  constructor(private readonly pokemonModuleService: PokemonModuleService) {}

  @Post()
  create(@Body() createPokemonModuleDto: CreatePokemonDto) {
    return this.pokemonModuleService.create(createPokemonModuleDto);
  }

  @Get()
  findAll() {
    return this.pokemonModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonModuleDto: UpdatePokemonModuleDto) {
    return this.pokemonModuleService.update(+id, updatePokemonModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonModuleService.remove(+id);
  }
}
