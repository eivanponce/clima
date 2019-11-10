const axios = require("axios");


const getLugarLatLog = async(lugar) => {
    const ciudad = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'x-rapidapi-key': 'cf1ba37f9emsh56630531f6cbdc5p153484jsn00c7a2df344a' },
    });

    const resp = await instance.get();

    //console.log(respuesta);
    if (resp.data.Results.length === 0) {
        return false;
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = { getLugarLatLog }