/* se crea un array con las opciones que va utilizar los mismo campos */
const opciones = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'crear una tabla de multiplicar segun los datos ingresados', opciones)
    .help()
    .argv;


module.exports = {
    argv
}



/**  esta son las configuraciones sin tomar en cuent que se puede crear un array como esta arriba
 * const argv = require('yargs')
.command('listar', 'imprime en consola la tabla de multiplicar', {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
})
.command('crear', 'crear una tabla de multiplicar segun los datos ingresados', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
})
.help()
.argv;
 * 
 */