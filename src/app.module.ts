import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosController } from './cursos/cursos.controller';

@Module({
  imports: [],
  controllers: [AppController, CursosController],
  providers: [AppService],
})
export class AppModule {}
