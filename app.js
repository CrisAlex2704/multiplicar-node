const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));

        break

    default:
        console.log('comando no reconocido');
}

//let base = '5';// aqui definiamos la base 

/** pasos para leer desde consola
 * argv: propio de node
 * parametro leo el arreglo en la posicio 3
 * divido el arreglo  tomo la posicion 2
 */
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(e => console.log(e));
//    
//console.log(argv);
//console.log('limite', argv.limite)// para imprimir el valor del limite