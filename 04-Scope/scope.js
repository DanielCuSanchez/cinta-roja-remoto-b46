console.log('Clase de scope')
//Ejemplo1
{
    var global = 'VariableVAR'
    let variable = 'VariableLET'
    const saludo = 'variableCONST'
}
//console.log(global)
//console.log(variable)
//console.log(saludo)


//Ejemplo 2 con funciones: Las reglas se ajustan dependiendo el tipo de funcion.
//Los niveles de let y const en variables bajan y pasan el valor pero no se puede de regreso.
//Nota: Revisar que es el THIS en JS
const saludar = () =>  {
    var saludo = 'Hola'
    //console.log(saludo)
    console.log('ARROW',this)
}

function saludar1 () {
    var saludo = 'Hola'
    //console.log(saludo)
    console.log('FUNCTION',this)
}

// saludar()
// saludar1()
//console.log(saludo)


const nombre = 'Hector'
let nombre1 = 'andres'
function saludo(){
    let nombre1 = 'Juanito'
    console.log(nombre1)
    function dos(){
        console.log(nombre1)
    }
    dos()
}

//saludo()