class Perro {
    constructor(nombre = 'default'){
        this.patas = 4;
        this.ojos = 2;
        this.color = 'Cafe';
        this.peso = '8kg';
        this.raza = 'Pitbull';
        this.vacunas = ['rabia'];
        this.nombre = nombre
    }
    correr(){
        console.log('El perro esta corriendo');
    }
    ladrar(){
        console.log('El perro esta ladrando');
    }
    comer(){
        console.log('El perro esta comiendo')
    }
}

let ayudanteSanta = new Perro();

console.log(ayudanteSanta.nombre);
ayudanteSanta.correr();
ayudanteSanta.comer();
ayudanteSanta.ladrar();


let pitbull = new Perro('Max');

console.log(pitbull.nombre)
pitbull.comer();
pitbull.correr();
pitbull.ladrar();