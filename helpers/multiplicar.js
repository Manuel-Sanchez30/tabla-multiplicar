
const fs = require('fs');
const { Module } = require('module');
const colors = require('colors');


const crearArchivo = async (num = 5, listar=false, hasta=5)=>{

    try {
        

        let salida = '';
        let consola = '';

        for(let i=1; i <= hasta; i++){
            
            salida += (`${num} x ${i} = ${num * i}\n`);
            consola += (`${num} ${'x'.red} ${i} ${'='.red} ${num * i}\n`);
        }
        if(listar){ 
            console.log('=========================');
            console.log( 'Tabla del:'.green, num);
            console.log('=========================');
            console.log(salida);
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida)

        return `tabla del ${num}.txt`;

}   catch (error) {
        throw error;   
    }
}   

module.exports = {
    crearArchivo
}