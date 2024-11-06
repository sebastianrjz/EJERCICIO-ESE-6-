//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// Ejemplo 1: Intercambiar el primer y el último personaje
const swappedArray1 = swap(fantasticFour, 0, 3)
console.log(swappedArray1)

const swappedArray2 = swap(fantasticFour, 1, 2)
console.log(swappedArray2)

function swap(array, index1, index2) {
  // Guardamos el valor del primer índice en una variable temporal
  const temp = array[index1]

  // Intercambiamos los valores
  array[index1] = array[index2]
  array[index2] = temp

  // Retornamos el array modificado
  return array
}
function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    console.log('Índice fuera de rango')
    return array
  }

  // Guardamos el valor del primer índice en una variable temporal
  const temp = array[index1]

  // Intercambiamos los valores
  array[index1] = array[index2]
  array[index2] = temp

  // Retornamos el array modificado
  return array
}
