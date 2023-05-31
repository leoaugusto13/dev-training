import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('cursos')
export class CursosController {

    @Get()
    findAll(@Res() response){
        return response.status(200).send('Listagem de Cursos');
    }

    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return `Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body){
            return body;
        }
    
}
