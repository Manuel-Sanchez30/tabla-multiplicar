const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');




console.clear();
//console.log(argv);
console.log(argv.base);
/* console.log(process.argv);

const [, , arg3] = process.argv;
console.log(arg3); 
const [, base] = arg3.split('=');
console.log(base); */

//let num = 6;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'.blue))
    .catch(err => console.log(err))