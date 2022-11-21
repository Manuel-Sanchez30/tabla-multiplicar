const argv = require('yargs')
    .option('b',{ 
        alias:'base',
        type:'number',
        demandOption: true,
        describe:'Es la base con la cual se crea la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean', 
        default: false,
        describe:'Muestra la tabla que se ejecuta'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        describe:'limite hasta donde quiero que llegue la tabla'
    })
    .check((argv, options)=>{
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

    module.exports = argv;