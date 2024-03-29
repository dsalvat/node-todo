const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoToDo);

    fs.writeFile('db/data.json',data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = ()  => {

    try {
        listadoToDo = require('../db/data.json');
    } catch(err){
        listadoToDo = [];
    }

    
    // console.log(listadoToDo);
}

const listar = () =>{

    cargarDB();

    return listadoToDo;

}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    
    cargarDB();

    let nuevoListado = listadoToDo.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if(listadoToDo.length === nuevoListado.length){
        return false;
    }else{
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }

}

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();

    return toDo;

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}