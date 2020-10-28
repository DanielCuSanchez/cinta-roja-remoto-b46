const axios = require('axios')
const fetch = require('node-fetch')
const { resolve } = require('path')

// function suma(n1,n2){
//     return n1+n2
// }

// suma(1,2)


//Promesas -> codigo asincrono
// FUNCION QUE DEVUELVE PROMESA
const getID = ()=>{
    return new Promise((resolve, reject)=>{
        console.log('Estoy dentro de la promesa')
        resolve('respDB');
        //reject('Promesa con ERROR')
    })
}


//ES LA LLAMADA A LA FUNCION
// getID()
// .then((respuesta)=>{
//     console.log(respuesta, 'RESPUESTA EN THEN')
// })
// .catch((error)=>{
//     console.log(`${error} ERROR EN CATCH`)
// })


const solicitarHamburguesa  = (cantidad)=>{
    return new Promise((resolve, reject)=>{
        if(cantidad < 10){
            resolve('Felicidades aqui tines tus hamburgesas')
        }
        reject('No podemos procesar tu orden son mas de 10 hamburguesas')
    })
}

// solicitarHamburguesa(12)
// .then(( respuesta )=>{
//     console.log(respuesta)
// })
// .catch(error => console.log(error))

const getData = (URL)=>{
    return new Promise((resolve, reject)=>{
        fetch(URL)
            .then(r => resolve(r))
            .catch(e => reject(e))
    })
}

// getData('https://pokeapi.co/api/v2/pokemon')
// .then(resp => console.log(resp))
// .catch(e => console.log(e))






// axios.get('https://pokeapi.co/api/v2/pokemon')
// .then(respuesta => console.log(respuesta.data))
// .catch(e => console.log(e))


let empleadosDirecciones = [{
    id: 1,
    direccion: 'Calle 1'
},
{
    id: 2,
    direccion: 'Calle 2'
}
]

let empleados = [{
    id: 1,
    nombre: 'Juan Perez'
},
{
    id: 2,
    nombre: 'Pedro'
},
{
    id: 3,
    nombre: 'Andres'
}
]

const getEmpleadoById = (id)=>{
    return new Promise((resolve, reject)=>{
        const empleadoFind = empleados.find(empleado => empleado.id === id);
        if(empleadoFind){
            resolve(empleadoFind)
        }else{
            reject('Empleado no encontrado')
        }
    })
}
const getDireccionEmpleado = (empledo)=>{
    return new Promise((resolve, reject)=>{
        const direccionFind = empleadosDirecciones.find(d => d.id === empledo.id);
        if(direccionFind){
            resolve(direccionFind)
        }else{
            reject('Direccion no encontrada')
        }
    })
}

getEmpleadoById(1)
.then(empleado => {
    console.log(empleado)
    return getDireccionEmpleado(empleado);
})
.then(direccion =>{
    console.log(direccion);
})
.catch(e => console.log(e))