/**requireds
Existen 3 tipos de require 
const fs = require('fs'); //libreria que ya existe en node y solo lo nombramos 
const fs = require('express'); // libreria que no existe, hay que instalar paquetes no nativos
const fs = require('./fs'); // archivos propios creados por nosotros
**/

const fs = require('fs');
const colors = require('colors');


let listarArchivo = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {

        if (!Number(base), !Number(limite)) {
            reject('El valor introducido no es un numero')
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            //console.log(`respueta: ${base} * ${i} = ${base * i}`);
            data += ` ${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        })

    });

}

module.exports = {
    crearArchivo,
    listarArchivo
}