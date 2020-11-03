const fs = require('fs'); //libreria que ya existe en node
const colors = require('colors');
/* const fs = require('express');
const fs = require('./'); */

/* console.log(module); */

listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('========================================================'.green);
    console.log(`================= Tabla de ${base} ====================`.green);
    console.log('========================================================'.green);

    if (!Number(base)) {
        console.log(' Base - El valor introducido no es un numero');
        return;
    }

    if (!Number(limite)) {
        console.log('Limite - El valor introducido no es un numero');
        return;
    }


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

// para agregar a vala variable modulo nuestra funcion

module.exports = {
    crearArchivo,
    listarTabla
};