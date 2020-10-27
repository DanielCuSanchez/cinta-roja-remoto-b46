const colors = require('colors/safe')
const fs = require('fs')


const guardarData = (data, nombre, extension) =>{
    fs.writeFile(`${nombre}.${extension}`, data ,(err)=>{
        if(err)
            console.log(err)
    })
}

const leerData = (nombre)=>{
    fs.readFile(`${nombre}.txt`,'UTF8',(err, data)=>{
        if(err) return console.log(err)
        console.log(data)
    })
}

guardarData('Hola soy un txt', 'archivo','txt')
leerData('archivo')



console.log(colors.blue('==============HOLA MUNDO============='))

