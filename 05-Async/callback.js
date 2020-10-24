
// function saludo(){
//     setTimeout(()=>{
//         console.log('Hola')
//     },2000)
// }

// saludo()

let usuarios = [{
    id: 1
},
{
    id: 2
},
{
    id: 3
}
]

let usuariosNombres = [{
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

function buscarNombrePorId( id ){
    let { nombre } = usuariosNombres.find(elemento => elemento.id === id)
    console.log(nombre)
}
//buscarNombrePorId(1)


//Desestructaracion
const usuario ={
    nombre: 'Juan Manuel',
    apellido: 'Pedro',
    id: 10
}
const { nombre } = usuario
//console.log(nombre)

