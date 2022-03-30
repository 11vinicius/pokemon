import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon-module.dto';
import { UpdatePokemonModuleDto } from './dto/update-pokemon-module.dto';

@Injectable()
export class PokemonModuleService {
  constructor(private prisma: PrismaService ){}

  create(data: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data:data,
      include:{
        images:{
          select:{
            url:true
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      include:{
        images:true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.pokemon.findUnique({
      where:{
        id
      },
      include:{
        images:true
      }
    })
  }

  update(id: number, data: UpdatePokemonModuleDto) {
    return this.prisma.pokemon.update({
      where:{
        id
      },
      data:data
    });
  }

  remove(id: number) {
    return this.prisma.pokemon.delete({
      where:{
        id
      }
    });
  }
}
