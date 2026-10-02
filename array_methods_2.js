const lenguajesDeProgramacion =["JavaScript", "Python", "C#", "Ruby", "PHP", "LISP"]

//Filter
nuevoArray = lenguajesDeProgramacion.filter(
    lenguaje => lenguaje === 'JavaScript'
)
console.log(nuevoArray)
//Comprobar si un elemento existe

const resultado = lenguajesDeProgramacion.includes('Ruby')
console.log(resultado)

//Some - Devuelve si al menos uno cumple con la condicion
const numeros = [10,20,30,40,50]
const resultadoNum = numeros.some(numero => numero > 15)
console.log('resultado',resultadoNum)

//Find - Devuelve si el primer elemento que cumpla con la condicion
const resultadoNum2 = numeros.find(numero => numero >15)
console.log('resultado num2', resultadoNum2)

//Every - Retorna true o false si todos cumplen la condicion
const resultadoNum3 = numeros.every(numero => numero > 15)
console.log('resultado num 3', resultadoNum3)

//Reduce - Acumulador de alguin total
const resultadoNum4 = numeros.reduce((total,numero)=> numero + total, 0)
console.log('resultado num 4', resultadoNum4)

//ForEach = Itera en cada uno de los elemtos de un array
const nuevoArray2 = lenguajesDeProgramacion.forEach((lenguaje, index) => console.log(lenguaje))
//console.log('Nuevo Array 2',nuevoArray2)

//Creaun nuevo array apartir de uno original
const arrayMap = lenguajesDeProgramacion.map( lenguaje => lenguaje)
console.log('arrayMap:',arrayMap)