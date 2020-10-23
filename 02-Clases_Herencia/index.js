const { Pelicula } = require('./Pelicula');
const { Documental } = require('./Documental');

const star_wars = new Pelicula('star wars the last jedi','120m','Rian Johnson','B');
const climate_change = new Documental('Cambio climatico','90m','Juan Martinez','C');
console.log(star_wars);
console.log(climate_change);