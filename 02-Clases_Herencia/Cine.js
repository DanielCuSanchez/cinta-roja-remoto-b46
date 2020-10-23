
class Cine {
    constructor(nombre){
        this.nombre = nombre;
    }
    reproducirPelicula(peliculaParaReproducir){
        const { titulo, duracion } = peliculaParaReproducir; //Desestructuracion
        return console.log(`Estoy reproduciendo ${titulo} con la duracion ${duracion}`);
    }
}

module.exports = { Cine };