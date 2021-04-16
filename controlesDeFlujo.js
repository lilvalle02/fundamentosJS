// Controles de flujo

// Hardcode. Es agregar valores directamente al codigo.


var a = 10
var b = 50

 console.log('a > b ==>', a > b)

 //if (a > b) {
 //console.log("El número es mayor")
//} else {
//console.log("El número es menor")
// }

/**
 * If lo que evalua es un boleano (true o false)
 * Si es true, ejecuta el primer bloque
 * {
    console.log("El número es mayor")
  }
 * 
  si es falso entonces ejecuta el bloque del "else"
  else {
    console.log("El número es menor")
  }
 */

// Valores truthys o falseys

// Truthy
// var myNumber = -10
// var myNumber = 20
// var myNumber = "Hola Mundo"
// var myBolean = true
// var myObject = {nombre: "Bryan"}
// var myObject = {}
// var myArray = [1,2,3]
// var myArray = []


// Falsey 
// var myNumber = 0
// var myString = ""
// var myBolean = false
// var myUndefined = undefined
// var myNull = null
// var myNan = NaN

// var myNumber = -10

// if (myNumber) {
//   console.log("Truthy")
// } else {
//   console.log("Falsey")
// }



// if (3 !== "3") {
//   console.log('3 == "3" es diferente')
// } else {
//   console.log('3 == "3" no es diferente')
// }

// if (3 === "3") {
//   console.log('3 === "3" es truthy')
// } else {
//   console.log('3 === "3" es falsey')
// }





// if (10 < 10) {
//   console.log('10 < 10 es verdadero')
// } else {
//   console.log('10 < 10 es falso')
// }

/**
 * Ejercicio 2
 * 1 .- Vamos a crear condiciones usando if y utilizando cada uno de los operadores logicos (8)
 * 2.- Crear condiciones con 3 truthys y 3 falseys (6)
 * Tiempo 15 minutos.
 */

var a = 10
var b = 15
var c = 20
var d = 25
var w = 10
var x = 15
var y = 20
var z = 25


if (w == b) {
     console.log("El número es igual")
     } else {
      console.log("El número no es igual")}



if (w != b) {
    console.log("El número es desigual")
    } else {
    console.log("El número no es desigual")
}


if (w === b) {
    console.log("El número es estrictamente igual")
    }else {
    console.log("El número no es estrictamente igual")
}

if (w !== b) {
    console.log("El número es estrictamente desigual")
    }else {
    console.log("El número no es estrictamente desigual")
}

if (w > b) {
    console.log("El número es mayor que")
    }else {
    console.log("El número no es mayor que")
}

if (y >= b) {
    console.log("El número es mayor o igual que")
    }else {
    console.log("El número no es mayoro igual  que")
}

if (w < b) {
    console.log("El número es menor que")
    }else {
    console.log("El número no es menor que")
}
    
if (a <= x) {
    console.log("El número es menor o igual que")
    }else {
    console.log("El número no es menor igual  que")
}


var myNumber = -10
var myNumber = 20
var myNumber = "Hola Mundo"
var myNumber = -10

if (myNumber) {
console.log("Truthy")
 } else {
 console.log("Falsey")
 }

/**
 * Switch
 */

 var colorPlayera = "azul"

 switch (colorPlayera) {
   case "negro":
     console.log("El color es negro")
   break
   case "rosa":
     console.log("El color es rosa")
   break
   case "amarillo":
       console.log("El color es amarillo")
   break
   case "morado":
        console.log("El color es morado")
    break
    case "verde":
        console.log("El color es verde")
    break
    case "gris":
        console.log("El color es gris")
   default: 
     console.log("El color de la playera no fue encontrado")
 }

 