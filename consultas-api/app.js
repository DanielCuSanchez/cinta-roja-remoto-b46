const request = require('request');
const axios = require('axios');

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
                resolve(body);
            }
        })
    })
}
// getWeatherByCity('London')
// .then(respuesta => {
//     console.log(respuesta);
// })
// .catch(e => console.log(e));


const getWeatherByCity2 = ( city )=>{
    return new Promise((resolve, reject)=>{
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74835d738b5362c91b3b5ab9a489aecb `;
        axios.get(URL)
            .then(response =>{
                const { data } = response;
                resolve(data);
            })
            .catch(e => reject(e));
    })
}
getWeatherByCity2('London')
.then( console.log )
//then (r => console.log(r));
.catch(console.log )