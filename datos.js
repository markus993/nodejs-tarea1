const {estudiante,obtenerPromedio} = require('./calculos');
const fs = require('fs');
const express = require('express');
const app = express();

console.log('El nombre del estudiantes es ' +estudiante.nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(estudiante.notas.ingles,estudiante.notas.matematicas,estudiante.notas.programacion));

let {nombre,edad:anios,notas:{matematicas,ingles,programacion}} = estudiante;
console.log('El nombre del estudiantes es ' +nombre);
console.log('El promedio del estudiante es ' + obtenerPromedio(matematicas,programacion,ingles));
console.log('La edad del estudiante es ' + anios);

let crearArchivo = (estudiante) =>{
    texto = 'El nombre del estudiante es '+ nombre+'\n'+
    'he obtenido un promedio de '+obtenerPromedio(matematicas,ingles,programacion);
    fs.writeFile('promedio.txt',texto,(err)=>{
        if (err) throw (err);
        console.log('Se ha creado el archivo');
    });
}

let imprimirArchivo = (estudiante) =>{
    texto = 'El nombre del estudiante es '+ nombre+'\n'+
    'he obtenido un promedio de '+obtenerPromedio(matematicas,ingles,programacion);
    app.get('/', function (req, res) {
        res.send(texto)
    })
    app.listen(3000)
}

//crearArchivo(estudiante);
imprimirArchivo(estudiante);