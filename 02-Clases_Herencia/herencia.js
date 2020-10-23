//Superclase
class Usuario {
    constructor(id, nombre, apellido, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getId(){
        return this.id;
    }
    getEdad(){
        return this.edad;
    }
}

//Subclase
class Administrador extends Usuario{
    constructor(id, nombre, apellido, edad, foto){
        super(id, nombre, apellido, edad);
        this.foto = foto;
    }
}


//Subclase
class Operador extends Usuario{
    constructor(id, nombre, apellido, edad, descripcion){
        super(id, nombre, apellido, edad);
        this.descripcion = descripcion;
    }
}


const admin = new Administrador('1','Daniel','Cu','23','/images/perfil.jpg');
const operador = new Operador('2','Daniel','Cu','23','Es un trabajador');
console.log(admin.getId());
console.log(operador.getId());
console.log(admin);
console.log(operador);


//Superclase -> Animal
//Subclases: Gato, Perro