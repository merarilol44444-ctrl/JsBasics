let numeros = [1, 2, 3, 4, 5, 6, 7]
numeros.forEach((numeros) => {
  console.log(numeros);
});
//itera el arreglo utilizando forEach e imprime los numeros

let numeros2 = [1, 2, 3, 4, 5, 6, 7]
const arrayMap = numeros2.map((numeros2) => numeros2 * 5)
console.log('arrayMap',arrayMap)
//Utiliza map y regresa un nuevo arreglo que multiplique cada elemnto por 5 e imprimelo

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
nuevoArray2 = numeros3.filter(
    numeros3 => numeros3 % 2 === 0)
console.log(nuevoArray2)
//Utiliza filter y regresa un nuevo arreglo de los numeros pares e imprimelo

let numeros4 = [10, 20, 30, 40, 50, 60]
const ejemplo = numeros4.find(numeros4 => numeros4 > 45)
console.log(ejemplo)
//Utiliza find y regresa un numero mayor a 45 e imprimelo

let frutas = ['manzana', 'naranja','fresa']
const frutasExiste = frutas.includes('fresa')
console.log(frutasExiste)
//Utiliza include para ver si existe la fruta 'fresa' e imprimelo

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nuevoArray3 = numeros5.slice(1, 4)
console.log(nuevoArray3)
//Utiliza slice y regresa un arreglo [2, 3, 4] e imprimelo

let numeros6 = [1, 2, 3, 4, 5]
const ultimo = numeros6.reduce((acum , total)=> acum + total, 0)
console.log(ultimo)
//Utiliza reduce y has la suma de los elementos e imprimelo