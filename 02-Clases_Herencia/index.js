const { Pelicula } = require('./Pelicula');
const { Documental } = require('./Documental');
const { Cine } = require('./Cine');


const star_wars = new Pelicula('star wars the last jedi','120m','Rian Johnson','B');
const climate_change = new Documental('Cambio climatico','90m','Juan Martinez','C');

const cinepolis = new Cine('Plaza medellin');



cinepolis.reproducirPelicula(star_wars);
cinepolis.reproducirPelicula(climate_change);
