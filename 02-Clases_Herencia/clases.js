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
    getNombre(){
        return this.nombre
    }
    setNombre(nombre){
        this.nombre = nombre
    }
    getPatas(){
        return this.patas
    }
    setPatas(numeroPatas){
        this.patas = numeroPatas
    }
    getVacunas(){
        return this.vacunas
    }
    setVacunas(vacuna){
        this.vacunas.push(vacuna)
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

let ayudanteSanta = new Perro('Ayudante de santa');

console.log(ayudanteSanta.getNombre());
console.log(ayudanteSanta.getPatas());
console.log(ayudanteSanta.getVacunas());
ayudanteSanta.correr();
ayudanteSanta.comer();
ayudanteSanta.ladrar();


let pitbull = new Perro('Max');

console.log(pitbull.nombre)
pitbull.comer();
pitbull.correr();
pitbull.ladrar();