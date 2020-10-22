let perro = {
    patas: 4,
    ojos: 2,
    color: 'Cafe',
    peso: '6kg',
    raza: 'Pitbul',
    comida: 'croquetas',
    clases: [],
    vacunas: ['rabia','tetanos'],
    correr: function(){
        console.log('El perro esta corriendo')
    },
    ladrar:function(sujeto){
        console.log('El perro esta ladrando al sujeto: ',sujeto)
    },
    comer: function(){
        console.log(`El perro esta comiendo ${this.comida}`)
    },
    getColor: function(){
       console.log(clases.length)
    }
}




perro.comer()

// console.log(perro.ojos)

//console.log(perro)