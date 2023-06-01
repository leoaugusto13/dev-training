import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {

    constructor(private readonly cursosService: CursosService){}

    @Get()
    findAll(){
        return this.cursosService.findAll();
    }

    @Get(':id')
    findOne(
        @Param('id') id: string
    ) {
        return this.cursosService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.cursosService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Body() body){
        return this.cursosService.remove(id);
    }

    @Post()
     create(@Body() body){
            return this.cursosService.create(body);
        }
    
}
