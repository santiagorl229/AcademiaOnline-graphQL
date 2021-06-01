import { database } from './../data/data.store';
import { IResolvers } from 'graphql-tools'
const query: IResolvers = {
    Query: {
        estudiantes(): any {
            return database.estudiantes;
        },
        estudiante(__: void, { id }): any {
            const resultado = database.estudiantes.filter(estudiante => estudiante.id === id)[0];
            console.log(resultado)
            if (resultado === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                }
            } else {
                return resultado;
            }

        },
        cursos(): any {
            return database.cursos;
        },
        
        curso(__: void, { id }): any {
            const resultado = database.cursos.filter(cursos => cursos.id === id)[0];
            console.log(resultado)
            if (resultado === undefined) {
                return {
                    id: '-1',
                    title: `No se ha encontrado el curso con el ID ${id}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                }
            } else {
                return resultado;
            }

        },

    }
}
export default query;
