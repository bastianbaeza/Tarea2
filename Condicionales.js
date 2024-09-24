/*
Condicionales Ejercicios:


Dado los siguientes valores numéricos:

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
​
Imprimir en consola el número mayor de los tres.
Imprimir en consola el número menor de los tres.
Imprimir en consola si el numero1 es par o impar.
Imprimir en consola si el numero2 es par o impar.
Imprimir en consola si el numero3 es par o impar.
Imprimir en consola si el numero1 es múltiplo de 5.
Imprimir en consola si el numero2 es múltiplo de 5.
Imprimir en consola si el numero3 es múltiplo de 5.


Ejemplo

const numero1 = 30
const numero2 = 20

if (numero1 > numero2) {
  console.log('numero1 es mayor que numero2')
}

*/

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Imprimir en consola el número mayor de los tres.
if (numero1 > numero2 && numero1 > numero3) {
  console.log(`El numero mayor es ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El numero mayor es ${numero2}`);
    }
    else {
        console.log(`El numero mayor es ${numero3}`);
    }


//Imprimir en consola el número menor de los tres.
if (numero1 < numero2 && numero1 < numero3) {
  console.log(`El numero menor es ${numero1}`);
}
else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`El numero menor es ${numero2}`);
    }
    else {
        console.log(`El numero menor es ${numero3}`);
    }

//Imprimir en consola si el numero1 es par o impar.
if (numero1 % 2 === 0) {
  console.log(`El numero1 es par`);
}

else {
  console.log(`El numero1 es impar`);
}

//Imprimir en consola si el numero2 es par o impar.

if (numero2 % 2 === 0) {

    console.log(`El numero2 es par`);
    }
        
        else {
            console.log(`El numero2 es impar`);
        }

//Imprimir en consola si el numero3 es par o impar.
if (numero3 % 2 === 0) {
  console.log(`El numero3 es par`);
}

else {
  console.log(`El numero3 es impar`);
}

//Imprimir en consola si el numero1 es múltiplo de 5.

if (numero1 % 5 === 0) {
    console.log(`El numero1 es múltiplo de 5`);
    }
        
        else {
            console.log(`El numero1 no es múltiplo de 5`);
        }

//Imprimir en consola si el numero2 es múltiplo de 5.
if (numero2 % 5 === 0) {
    console.log(`El numero2 es múltiplo de 5`);
    }
            
            else {
                console.log(`El numero2 no es múltiplo de 5`);
            }

//Imprimir en consola si el numero3 es múltiplo de 5.
if (numero3 % 5 === 0) {
    console.log(`El numero3 es múltiplo de 5`);
    }

    else {
        console.log(`El numero3 no es múltiplo de 5`);

    }



