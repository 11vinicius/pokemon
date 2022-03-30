import { Prisma } from "@prisma/client";
import { IsOptional, IsString } from "class-validator";
import { Pokemon } from "../entities/pokemon-module.entity";

export class CreatePokemonDto extends Pokemon{
  
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    height: number;

    @IsOptional()
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
