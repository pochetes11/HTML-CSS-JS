/*Ejercicio 1: 
¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que? 
*/ const persona = {
  nombre: "Luna",
  edad: 30,
  hobbies: ["leer", "salir", "futbol"],
};

const { weight = 70, height = 180 } = persona;
console.log(weight, height);

// Respuesta: se imprimira 70 y 180
// porque le dieron a las constantes
// ese valor por defecto

// 2- ¿Qué se imprimirá en la consola al ejecutar
// el siguiente código? Y por que?

const person = {
  name: "Sol",
  age: 30,
  hobbies: ["leer", "sali", "futbol"],
};

const { age: personAge } = person;
console.log(age);

// Respuesta: Se imprimira la edad porque el
// codigo solicita la edad

// 3- ¿Cómo se llama el atajo que nos permite recuperar
// el valor de una propiedad de un objeto?

// Respuesta: El atajo se llama partner
