// Funciones

// ¿Que es una funcion?
/**
 * Sirve para reutilizar codigo
 * Funciona para simplificar codigo
 * Repetir acciones/sentencias/tasks
 * 
 * Regla num 1:
 * 
 * ============ Una funcion debe retornar un resultado ==============
 */

function congelar( alimento ) {

  // Concatenacion
    return "Congelado" + alimento
}

var polloCongelado = congelar("Pollo")
var conejoCongelado = congelar("Conejo")

console.log(  polloCongelado     )
console.log(   conejoCongelado   )


/**
 * Ejercicio 1 
 * 1.- Vamos a saludar a 3 personas distintas usando una funcion
 * 2.- La funcion recibira un parametro de tipo string
 * 3.- Hacer console.log de los saludos Fuera de la Funcion
 */



 function saludar( nombre ) {

    // Concatenacion
      return "Hola" + nombre
  }
  
  var nombre1 = saludar(" Lilia")
  var nombre2 = saludar(" Juan")
  var nombre3 = saludar(" Pedro")
  
  console.log(   nombre1   )
  console.log(   nombre2   )
  console.log(   nombre3   )


/**
 * Ejercicio 2
 * 1.- Crear una funcion que retorne la edad de las personas mandandoel año de nacimiento
 * 2.- La funcion debe retornar la edad sin tomar en cuenta los meses o dias
 * Ejemplo: obtenerEdad(1993) retornara "Tienes 28 años"
 */
 
 function getAge(birthYear) {

  var actualYear = new Date().getFullYear() // 2021
  return actualYear - birthYear
}


var edadLilia = getAge( 1992 ) 
var edadRicardo = getAge( 1981 ) 


console.log(   edadLilia   )
console.log(   edadRicardo  )
/**
 * Ejercicio 3
 * 1.- hacer una funcion que reciba 2 parametros y que devuelva el numero mayor
 * 2.- La funcion debera retornar un valor de tipo Number
 */

function getMax(valor1, valor2) {
if (valor1 > valor2 ) {
  return `valor1 :${valor1} es mayor que valor2: ${valor2}` 
 } else { 
     return valor2 + " es mayor que el otro numero"
 }
}

var getMax1 = getMax(100,101)
var getMax2 = getMax (300, 101)
var getMax3 = getMax (-6, 0)
var getMax4 = getMax (-600, -750)
 
console.log (getMax1)
console.log (getMax2)


// `Congelando ${ alimento } usando refrigerador ${ marca } a ${ temperatura } ${ unidadMedida }`
// "Congelando" + " " + alimento + " " + "usando refrigerador" + " " + marca + " " + "a" + " " + temperatura + " " + unidadMedida

// ES6 (EcmaScript 6)
// const
// let
// ========
// backtips
// `Hola
// Mundo
// Otra linea
// <a>${saludo}</a>`
// ========
// arrow functions
// ES6

const getMaxEs6 = (valor1, valor2) => {
  if (valor1 > valor2) {
    return `valor1: ${valor1} es mayor que valor2: ${valor2}`
  } else {
    return `valor2: ${valor2} es mayor que valor1: ${valor1}`
  }
}

var getMax2 = getMaxEs6(300, 101) // 300
console.log("getMaxEs6 ==>", getMax2)
