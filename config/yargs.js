const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    },
};

const argv = require('yargs')
    .command(
        'listar', 'Imprimir en consola la tabla de modificar', opts)
    .command(
        'crear', 'Crear archivo de tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};