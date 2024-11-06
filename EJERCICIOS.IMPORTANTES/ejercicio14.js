//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

//Finalmente retorna el array.

//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

// Función para encontrar el índice de un texto en el array
function findArrayIndex(array, text) {
  return array.indexOf(text) // Devuelve el índice del texto o -1 si no se encuentra
}

// Función para eliminar un item en el array
function removeItem(array, text) {
  // Llamamos a findArrayIndex para obtener el índice del texto
  const index = findArrayIndex(array, text)

  // Si el índice es válido (es decir, el texto se encontró), eliminamos el elemento
  if (index !== -1) {
    array.splice(index, 1) // Elimina el elemento en la posición 'index'
  }

  // Retornamos el array modificado
  return array
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

// Ejemplo 1: Eliminar "Han Solo"
const updatedArray1 = removeItem(mainCharacters, 'Han Solo')
console.log(updatedArray1) // Debería imprimir: ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

// Ejemplo 2: Eliminar "Rey"
const updatedArray2 = removeItem(mainCharacters, 'Rey')
console.log(updatedArray2) // Debería imprimir: ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]

// Ejemplo 3: Intentar eliminar un personaje que no existe (ej. "Yoda")
const updatedArray3 = removeItem(mainCharacters, 'Yoda')
console.log(updatedArray3) // Debería imprimir el array original sin cambios: ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

// Ejemplo 4: Eliminar "Leia"
const updatedArray4 = removeItem(mainCharacters, 'Leia')
console.log(updatedArray4) // Debería imprimir: ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
