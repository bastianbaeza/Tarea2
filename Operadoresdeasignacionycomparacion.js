/*
Ejercicios


Dado los siguientes valores numéricos:


const numero1 = 15;
const numero2 = 20;
const numero3 = '25';


1. Muestre por consola si el numero1 es mayor o igual que numero2.
2. Muestre por consola si el numero1 es menor o igual que numero2.
3. Muestre por consola si el numero1 es menor que numero3.
4. Muestre por consola si el numero3 es menor que numero2.
5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
6. Muestre por consola si el numero1 es estrictamente igual al numero2.


💡 Recordar que es diferente `==` y `===` .


*/

const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

//Muestre por consola si el numero1 es mayor o igual que numero2.
console.log(`El numero1 es mayor o igual que el numero2 : ${(numero1 >= numero2)}`)

//Muestre por consola si el numero1 es menor o igual que numero2.
console.log(`El numero1 es menor o igual que el numero2 : ${(numero1 <= numero2)}`)
//Muestre por consola si el numero1 es menor que numero3.
console.log(`El numero1 es menor que el numero3 : ${(numero1 < numero3)}`)
//Muestre por consola si el numero3 es menor que numero2.
console.log(`El numero3 es menor que el numero2 : ${(numero3 < numero2)}`)
//Muestre por consola si el numero3 es estrictamente diferente que numero1.
console.log(`El numero3 es estrictamente diferente que el numero1 : ${(numero3 !== numero1)}`)
//Muestre por consola si el numero1 es estrictamente igual al numero2.
console.log(`El numero1 es estrictamente igual al numero2 : ${(numero1 === numero2)}`)


