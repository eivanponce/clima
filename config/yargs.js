const argv = require('yargs').options({
    direccion: {
        alias: "d",
        demand: true
    }
}).argv;

module.exports = { argv }