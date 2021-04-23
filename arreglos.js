//. Arreglos / Listas
              //0, 1, 2
var myArray = [1 , 2, 3 ]

console.log(myArray[0])

               // n numero de elementos (MAX RAM)
var myArrayString = ["Edificio", "Carro", "Casa" ]

console.log(myArrayString)

var myArrayString2 =  [
    {nombre : "Bryan"}, //0
    {nombre: "Marcos"}, //1
    {nombre: "Tania"},  //2
    {nombre: "Carlos"}  //3


]

console.log(myArrayString2[0])  //{ nombre: 'Bryan'}
console.log(myArrayString2[1])  //{ nombre: 'Marcos'}
console.log(myArrayString2[2])  //{ nombre: 'Tania'}
console.log(myArrayString2[3])  //{ nombre: 'Carlos'}
console.log(myArrayString2[4])  //{ nombre: 'Undefined '}


/**
 * Ejercicio2
 * 1.-Vamos a crear un arreglo con 10 elementos dentrode los cuales
 * 2.- Imprimir  lo que arrojaria ese arreglo en cierta posicion
 */



var myArrayE2 =  [ "Lilia", 28, "Valle","CDMX", 38, undefined]


console.log(myArrayE2[0])  //4

/** Aprender a utilizar For */

console.log(myArrayE2.length)
// Voy a dar vueltas hasta que ...
// 0 < 4 

for(var x=0; x = myArrayE2.length; x++) {

    //. x = 0, 0 es menor que 4 --> Si va a entrar al for
    //. x = 1, 1 es menor que 4 --> Si va a entrar al for
    //. x = 2, 2 es menor que 4 --> Si va a entrar al for

}

  console.log(`Este momento el indice es: ${x} y el valor es`, myArray[x])


// Ejercicio 3: (Revisar)

  //var my10ElmentsArray = ["Lilia", 28, "Valle", 75, "CDMX",05,"Julieta",2022,"Edificio"]
//console.log(my10ElmentsArray)

//for (let x = 0; x < my10ElmentsArray.length; x--) {
//const element = my10ElmentsArray[x];
//console.log(element)
//}

// Ejercicio 4

var myNumberArray =  [1,2,3,4,5,6,7,8,9,10]
console.log(myNumberArray)






