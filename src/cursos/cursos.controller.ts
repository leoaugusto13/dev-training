import { Controller, Get } from '@nestjs/common';

@Controller()
export class CursosController {

    @Get('cursos')
    findAll(){
        return 'Listagem de Cursos';
    }
}
