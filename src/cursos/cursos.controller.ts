import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `Atualização do Curso #${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Body() body){
        return `Excluir o Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body('name') body){
            return body;
        }
    
}
