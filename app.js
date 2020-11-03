/* const multiplicar = require('./multiplicar/multiplicar'); */ // para importar completamente el archivo y todo lo que tiene
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // o hacer destructuraciony
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        console.log(argv);

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Se creo el archivo ${archivo.green}`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando desconocido');
        break;

}

/* argv = process.argv; */