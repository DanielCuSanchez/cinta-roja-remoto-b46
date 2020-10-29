const request = require('request');

//console.log(request);

//74835d738b5362c91b3b5ab9a489aecb

const getWeatherByCity = ( city ) => {
    return new Promise((resolve, reject)=>{
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74835d738b5362c91b3b5ab9a489aecb `;
        request(URL, (err, response, body )=>{
            if(err){
                reject(err);
                return
            }
            if(response.statusCode === 200){
                resolve(body)
            }
        })
    })
}
getWeatherByCity('London')
.then(respuesta => {
    console.log(respuesta);
})
.catch(e => console.log(e))
