
// function saludo(){
//     setTimeout(()=>{
//         console.log('Hola')
//     },2000)
// }

// saludo()

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

function getEmpleado(id, callback){
    const empleadoEncontrado = empleados.find( empleado => empleado.id === id);
    if(empleadoEncontrado === undefined){
        callback(`Error empleado con ID ${id} no fue encontrado`, null);
    }else{
        callback(null, empleadoEncontrado)
    }
}

function getDireccion(empleado, callback){
    const { id } = empleado
    const empleadoDireccion = empleadosDirecciones.find(e => e.id === id);
    if(!empleadoDireccion)
        return callback(`No encontre la direccion`, null);
    callback(null, empleadoDireccion)
}

getEmpleado(3, (error, empleado)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(empleado)
    getDireccion(empleado, (error , direccion)=>{
        if(error){
            console.log(error)
            return
        }
        console.log(direccion)
    })
})
