//Desestructaracion
const usuario ={
    nombre: 'Juan Manuel',
    apellido: 'Gonzalez',
    id: 10
}
//const { nombre } = usuario
//console.log(nombre)


// const obtenerNombreUsuario = ( { nombre } )=>{
//     console.log(nombre)
// }

// const obtenerNombreUsuario = ( objeto )=>{
//     const { nombre, apellido } = objeto;
//     console.log(nombre, apellido)
// }

// obtenerNombreUsuario(usuario)


let empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Lore'
    },
    {
        id: 3,
        nombre: 'Renato'
    }
]

// empleados.map( empleado => {
//     const { id } = empleado
//     console.log(id)
// })


//Template strings || plantillas de texto


const saludar = ( nombre ) => {
    const hola = 'Konichiwa'
    const saludo = `¿${hola} como estas? ${nombre}` // Aqui es el template string
    console.log(saludo)
}

// for( const empleado of empleados ){
//     saludar(empleado.nombre);
// }

const frutas = ['Manzana','Piña','Melon','Mango']

const [ ,fruta ] = frutas
const [,,empleado ] = empleados

console.log(fruta)
console.log(empleado)