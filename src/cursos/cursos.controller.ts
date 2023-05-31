import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cursos')
export class CursosController {

    @Get()
    findAll(){
        return 'Listagem de Cursos';
    }

    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return `Curso #${id}`;
    }

    @Post()
    create(@Body('name') body){
            return body;
        }
    
}
