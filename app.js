const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

// lugar.getLugarLatLog(argv.direccion).then((objetoLugar) => {
//     clima.getClima(objetoLugar.lat, objetoLugar.lon).then(console.log);
// });

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {
    // return new Promise((resolve, reject) => {
    //     lugar.getLugarLatLog(direccion).then((objetoLugar) => {
    //         clima.getClima(objetoLugar.lat, objetoLugar.lon)
    //             .then((temperatura) => {
    //                 resolve(`El clima de ${direccion}  es de ${temperatura}`);
    //             })
    //             .catch((err) => {
    //                 reject(`No se pudo determinar el clima de ${direccion}`);
    //             });
    //     }).catch((err) => {
    //         reject(`No se pudo determinar el clima de ${direccion}`);
    //     });
    // });

    try {
        const cord = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(cord.lat, cord.lon);
        return `El clima de ${direccion}  es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);