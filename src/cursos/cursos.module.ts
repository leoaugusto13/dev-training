import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

@Module({
    imports: [CursosModule],
    controllers: [CursosController],
    providers: [CursosService],
})
export class CursosModule {}
