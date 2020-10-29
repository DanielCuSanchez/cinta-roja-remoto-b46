
const arreglo = [ 1, 2, 3, 4, 5, 6];


//Imperativa
for( let i = 0 ; i < arreglo.length; i++){
    //console.log(arreglo[i]);
}

//Declarativo
//arreglo.forEach( value => console.log(value));

//Imperativo
let nuevoArreglo = [];

for( let i = 0 ; i < arreglo.length; i++ ){
    nuevoArreglo[i] = arreglo[i];
}
console.log('NUEVO ARREGLO',nuevoArreglo);
console.log('VIEJO ARREGLO',arreglo);

//Declarativa

const nuevoArreglo2 = arreglo.map((elemento, index) => elemento + 100); //regresa un valor
console.log('NUEVO 2', nuevoArreglo2);

const nuevoArreglo3 = arreglo.filter(elemento => elemento % 2 === 0);

const elementoBuscar = arreglo.find(elemento => elemento === 6);

console.log('ELEMENTO',elementoBuscar);
console.log('NUEVO 3',nuevoArreglo3);