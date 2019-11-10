const axios = require("axios");


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c9ece330d89275e5c289060f63aafe10&units=metric`);

    return resp.data.main.temp;

}

module.exports = { getClima }