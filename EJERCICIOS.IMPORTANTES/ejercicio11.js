//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

// Variable para almacenar el total de volumen
let totalVolume = 0
// Variable para contar el número total de sonidos
let totalSounds = 0

// Usamos for...of para recorrer el array de usuarios
for (const user of users) {
  // Usamos for...in para recorrer los sonidos favoritos de cada usuario
  for (const sound in user.favoritesSounds) {
    // Sumar el volumen de cada sonido al total
    totalVolume += user.favoritesSounds[sound].volume
    // Incrementar el contador de sonidos
    totalSounds++
  }
}

// Calcular la media del volumen
const averageVolume = totalVolume / totalSounds
console.log(averageVolume) // Imprimir la media
