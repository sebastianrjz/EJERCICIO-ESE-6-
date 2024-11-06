//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names = users1.map((user) => user.name)
console.log(names)

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
// Usamos .map() para crear una lista de nombres y cambiar 'A' por 'Anacleto'
const updatedNames = users.map((user) =>
  user.name.startsWith('A') ? 'Anacleto' : user.name
)
console.log(updatedNames)

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

// Usamos .map() para crear la lista de nombres y añadir ' (Visitado)' cuando isVisited sea true
const updatedCities = cities.map((city) =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
)
console.log(updatedCities) // ['Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul']
