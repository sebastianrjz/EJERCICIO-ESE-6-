//2.1 En base al siguiente javascript, crea variables en base a las propiedadesdel objeto usando object destructuring e imprimelas por consola.Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: 'The last us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}

const { title, gender, year } = game

console.log(title) // 'The last us 2'
console.log(gender) // ['action', 'zombie', 'survival']
console.log(year) // 2020

//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormenteimprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange']
// Destructuring del array
const [fruit1, fruit2, fruit3] = fruits

// Imprimir las variables por consola
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}

const { name, race } = animalFunction()
console.log(name)
console.log(race)

//2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = { name1: 'Mazda 6', itv: [2015, 2011, 2020] }

const { itv, name1 } = car

// Destructuring del array 'itv' para asignar cada año a una variable
const [year1, year2, year3] = itv

// Imprimir los valores por consola

console.log(name1)
console.log(itv) // [2015, 2011, 2020]
console.log(year1) // 2015

console.log(year2) // 2011
console.log(year3) // 2020
