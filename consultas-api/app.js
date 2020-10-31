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
// getWeatherByCity2('London')
// .then( console.log )
// //then (r => console.log(r));
// .catch(console.log )


const getAsteroids = async (start_date, end_date) =>{
    const API_KEY = 'w4lKuDCvMLuD5KBfkJKOmZSIfr9FgCWES821srDb';
    const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`;
    const response = await axios.get(URL);
    //console.log(response)
    if(response.status === 200){
        const { data } = response;
        //console.log(data.near_earth_objects);
        const asteroides = data.near_earth_objects;
        const keys =  Object.keys(asteroides)
        const asteroidesPeligrosos = keys.map(key => {
            const asteroidesP = asteroides[key].filter(e => e.is_potentially_hazardous_asteroid);
            if(asteroidesP.length === 0){
                return `${key}`
            }else{
                return asteroidesP
            }
        })
        //console.log(asteroidesPeligrosos)
        return asteroidesPeligrosos
       
    }else{
        return response.error
    }
}

getAsteroids('2020-10-01','2020-10-07')
.then(asteroides =>  console.log(asteroides))
.catch(e => console.log(e))
