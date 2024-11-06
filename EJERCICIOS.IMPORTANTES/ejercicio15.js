//Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()

function rollDice(sides) {
  // Generamos un número aleatorio entre 1 y 'sides' (el número de caras del dado)
  const result = Math.floor(Math.random() * sides) + 1

  // Retornamos el resultado de la tirada
  return result
}
console.log(rollDice(6))
console.log(rollDice(20))
console.log(rollDice(12))
console.log(rollDice(10))
