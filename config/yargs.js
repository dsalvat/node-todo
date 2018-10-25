const descripcion = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
      }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    }
}



const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', { 
            descripcion 
        })
        .command('actualizar', 'Actualizar el estado comlpetado de una tarea', { 
            descripcion, 
            completado 
        })
        .command('borrar', 'Borrar una tarea', { 
            descripcion
        })
        .help()
        .argv;


module.exports = {
    argv
}

