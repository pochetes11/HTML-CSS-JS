/*Ejercicio 1: 
¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que? 
*/ const persona = {
  nombre: "Roma",
  edad: 30,
  hobbies: ["leer", "salir", "futbol"],
};

const { weight = 70, height = 180 } = persona;
console.log(weight, height);

// Respuesta: se imprimira 70 y 180
// porque le dieron a las constantes
// ese valor por defecto
