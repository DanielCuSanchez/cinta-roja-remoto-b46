//Subclase

const { Largometraje } = require("./Largometraje");

class Documental extends Largometraje{
    constructor(titulo, duracion, director, narrador){
        super(titulo, duracion, director);
        this.narrador = narrador;
    }
}

module.exports = { Documental };