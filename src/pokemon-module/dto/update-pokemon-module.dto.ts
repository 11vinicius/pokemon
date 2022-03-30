import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon-module.dto';

export class UpdatePokemonModuleDto extends PartialType(CreatePokemonDto) {}
