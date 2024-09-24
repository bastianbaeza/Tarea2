/*
Ejercicios de Objetos

Ejercicios
Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
Ejemplo
Crear un objeto llamado computador y definir sus propiedades, las cuales son:
Teclado
Pantalla
Mouse
Marca
Enciende?
Precio
const computador = {
		teclado: "Redragon Kurama",
		mouse: "Logitech G203",
		marca: "ASUS",
		enciende: true,
		precio: 450000
}

console.log(computador); // {teclado: 'Redragon Kurama', mouse: 'Logitech G203', marca: 'ASUS', enciende: true, precio: 450000}
console.log(computador.teclado); // Redragon Kurama
console.log(computador.mouse); // Logitech G203
console.log(computador.marca); // ASUS
console.log(computador.enciende); // true
console.log(computador.precio); // 450000
console.log(typeof computador); // object
console.log(typeof computador.teclado); // string
console.log(typeof computador.mouse); // string
console.log(typeof computador.marca); // string
console.log(typeof computador.enciende); // boolean
console.log(typeof computador.precio); // number
*/

console.log('Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.');
const persona = {
    nombre: 'Juan',
    edad: 25,
    genero: 'Masculino'
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.genero);




console.log('Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.');
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 20,
    buenEstado: true
}

console.log(caja);
console.log(caja.cuadernos);
console.log(caja.lapices);
console.log(caja.papel);
console.log(caja.fotografias);
console.log(caja.buenEstado);
console.log(typeof caja);
console.log(typeof caja.cuadernos);
console.log(typeof caja.lapices);
console.log(typeof caja.papel);
console.log(typeof caja.fotografias);
console.log(typeof caja.buenEstado);

