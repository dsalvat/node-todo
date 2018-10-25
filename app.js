// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv);
const toDo = require('./todo/todo');

let comando = argv._[0];

switch(comando){

    case 'crear':
        let tarea = toDo.crear( argv.descripcion);        
        console.log(`Crear por hacer: ${tarea}`);
    break;

    case 'listar':
        let listado = toDo.listar();

        for (let tarea of listado){
            console.log('======To Do======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("==================".green);
        }        
    break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
    break;
    
    default:
        console.log('Comando no reconocido');
    break;



}