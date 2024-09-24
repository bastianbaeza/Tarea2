/*
Ejercicios de Arrays

Ejercicios
Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
Ejemplo
const numeros = [1, 2, 3, 4, 5]
// Agregar un elemento al final del arreglo
numeros.push(6)
console.log(numeros) // [1, 2, 3, 4, 5, 6]

// Eliminar el ultimo elemento del arreglo
numeros.pop()
console.log(numeros) // [0, 1, 2, 3, 4, 5]

*/

console.log('Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.');
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

console.log(sumaArray([1, 2, 3, 4, 5]));

console.log('Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.');
function promedioArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

console.log(promedioArray([1, 2, 3, 4, 5]));

console.log('Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.');
function mayusculasArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase());
    }
    return newArray;
}

console.log(mayusculasArray(['hola', 'mundo']));
console.log('Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.');
function paresArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(paresArray([1, 2, 3, 4, 5]));


