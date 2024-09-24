/*
Ejercicios Funciones

Crea una función que reciba un string y retorne el string en mayúsculas.
Crea una función que reciba un string y retorne el string en minúsculas.
Crear una función que reciba como parámetro 2 números y los reste.
Crear una función que reciba como parámetro 2 números y los divida.
Crear una función que reciba como parámetro 2 números y los multiplique.
Crear una función que reciba un string y devuelva la longitud del string.
Ejemplo
function suma (numero1, numero2) {
  return numero1 + numero2
}

  const resultado = suma(10, 20)
  console.log(resultado) // 30

  */

console.log('Crea una función que reciba un string y retorne el string en mayúsculas.');
function mayusculas(string) {
    return string.toUpperCase();
}
console.log(mayusculas('hola'));


console.log('Crea una función que reciba un string y retorne el string en minúsculas.');
function minusculas(string) {
    return string.toLowerCase();
}

console.log(minusculas('HOLA'));

console.log('Crear una función que reciba como parámetro 2 números y los reste.');
function resta(num1, num2) {
    return num1 - num2;
}
console.log(resta(10, 5));

console.log('Crear una función que reciba como parámetro 2 números y los divida.');
function division(num1, num2) {
    return num1 / num2;
}
console.log(division(10, 5));

console.log('Crear una función que reciba como parámetro 2 números y los multiplique.');
function multiplicacion(num1, num2) {
    return num1 * num2;
}
console.log(multiplicacion(10, 5));

console.log('Crear una función que reciba un string y devuelva la longitud del string.');
function longitud(string) {
    return string.length;
}

console.log(longitud('Hola mundo'));


