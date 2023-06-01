import { Injectable } from '@nestjs/common';
import { CursoEntity } from './entities/curso.entity';

@Injectable()
export class CursosService {

    private cursos: CursoEntity[] = [
        { 
            id: 1,
            name: "Fundamentos do Nextjs",
            description: "Fundamentos do Nextjs",
            tags: ['node.js', 'nextjs', 'javascript', 'frontend'],
        }
      
    ];

    findAll(){
       return this.cursos; 
    }

    findOne(id: string){
        return this.cursos.find((curso: CursoEntity) => curso.id === Number(id));
    }

    create(createCursoDto: any){
        this.cursos.push(createCursoDto);
    }

    update(id: string, updateCursoDto: any){
        const existeCursos = this.cursos.findIndex((curso: CursoEntity) => curso.id === Number(id));

        this.cursos[existeCursos] = updateCursoDto;
    
    }

    remove(id: string){
        const existeCursos = this.cursos.findIndex((cursos: CursoEntity) => cursos.id === Number(id));

        if(existeCursos >= 0) {
            this.cursos.splice(existeCursos, 1);
        }
    }

}
