//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const adults = ages1.filter((age) => age > 18)

console.log(adults)
//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const evenAges = ages.filter((age) => age % 2 === 0)
console.log(evenAges) // [22, 14, 24, 12, 90]

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

// Usamos .filter() para crear un nuevo array con los streamers que jueguen 'League of Legends'
const lolStreamers = streamers1.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(lolStreamers)

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
)
console.log(streamersWithU)
//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

// Usamos .filter() para crear un nuevo array con los streamers que incluyan 'Legends' en su propiedad .gameMorePlayed
const filteredStreamers = streamers.filter((streamer) => {
  // Verificamos si el juego más jugado contiene 'Legends'
  if (streamer.gameMorePlayed.includes('Legends')) {
    // Si la edad es mayor a 35, ponemos el nombre del juego en mayúsculas
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return true // Incluimos al streamer en el array
  }
  return false // Excluimos al streamer si no cumple la condición
})

console.log(filteredStreamers)
