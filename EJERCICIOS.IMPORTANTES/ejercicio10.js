//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
// Crear un array vacío para almacenar las categorías únicas
let uniqueCategories = []

for (const movie of movies) {
  // Recorrer cada categoría de la película
  for (const category of movie.categories) {
    // Verificar si la categoría no está ya en el array de categorías
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category)
    }
  }
}
// Imprimir el array de categorías únicas
console.log(uniqueCategories)
