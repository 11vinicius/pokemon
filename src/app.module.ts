import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModuleModule } from './pokemon-module/pokemon-module.module';


@Module({
  imports: [PokemonModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
