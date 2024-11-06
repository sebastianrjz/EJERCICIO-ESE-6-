//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:
function findArrayIndex(array, text) {
  return array.indexOf(text)
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
// Ejemplo 1: Buscar "Han Solo"
const index1 = findArrayIndex(mainCharacters, 'Han Solo')
console.log(index1) // Debería imprimir: 2

// Ejemplo 2: Buscar "Rey"

const index2 = findArrayIndex(mainCharacters, 'Rey')
console.log(index2) // Debería imprimir: 4

// Ejemplo 3: Buscar un personaje que no está en el array (ej. "Yoda")

const index3 = findArrayIndex(mainCharacters, 'Yoda')
console.log(index3) // Debería imprimir: -1

// Ejemplo 4: Buscar "Leia"
const index4 = findArrayIndex(mainCharacters, 'Leia')

console.log(index4) // Debería imprimir: 1
