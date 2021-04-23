//. Objetos el objeto debe de ser consciso

// N propiedades 
var myObjectLilia = {
    firstName: 'Lilia',
    lastName: 'Valle',
    myAge: 27,
    myHobby: 'Hiking'

}

var myObjectByran = {
    firstName: 'Bryan',
    lastName: 'Montes'

}

//. Accede a el valor de la propiedad firstName
console.log(  myObjectLilia.firstName)

//. Accede a el valor de la propiedad firstName

console.log(  myObjectLilia['firstName'] )
console.log( myObjectLilia ['myAge'])


//. Sobre escribe el valor de una propiedad en el objeto
myObjectLilia.firstName = 'Julieta'


console.log(myObjectLilia.firstName)

//. Crea un ejemplo de un objeto

myObjectLilia.myHobby = 'Leer'

console.log (myObjectLilia)


/** 
 * Ejercicio 1
 * 1.- Crear un objeto con su informacion personal (Nombre, apellido, año de nacimiento)
 * 2.-Van a reemplazar el valor de una propiedad de su objeto
 * 3.-Van a crear una propiedad que no exisate en su objeto
 * 4.- Van a imprimir la propiedad creada e imprimir la propiedad
 * 
 */

var myObjectLiliaValle= {
    fistName: 'Lilia',
    lastName: 'Valle',
    myAge: 28


}

// Accede a el valor de la propiedad firstName
console.log(  myObjectLiliaValle.firstName )

//Sobre escribe el valor de una propiedad en el objeto
myObjectLiliaValle.firstName = 'Julieta'

myObjectLiliaValle.hobbies = 'Hiking'

console.log (myObjectLiliaValle)

//. Borrar una propiedad

delete myObjectLiliaValle['myAge']

console.log(myObjectLiliaValle)


//. 