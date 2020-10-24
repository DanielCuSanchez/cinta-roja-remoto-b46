//Subclase

const { Largometraje } = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, clasificacion){
        super(titulo, duracion, director);
        this.clasificacion = clasificacion;
    }
}

module.exports = {  Pelicula };