// Ejemplo de arrays | arrays position = [0, 1, 2, 3, 4];
const myArray = [1, 2, 3, 4, 5];
const myArray2 = [6, 7, 8, 9, 10];

// function length: Devuelve el número de elementos en el array
console.log(myArray.length);

// function at: Devuelve el elemento en la posición especificada (en este caso, posición 2)
console.log(myArray2.at(2));

// function concat: Une dos arrays en uno solo
const myArray3 = myArray.concat(myArray2);
console.log(myArray3);

// function constructor: Crea un nuevo array con los elementos dados
const myArray4 = new Array("Apple", "Banana", "Orange");
console.log(myArray4[2]);

// function copyWithin: Copia una parte del array dentro del mismo array, sobrescribiendo elementos existentes
console.log(myArray.copyWithin(0, 4));

// function entries: Devuelve un nuevo objeto Array Iterator con pares clave/valor para cada índice del array
const iterator1 = myArray2.entries();
console.log(iterator1.next().value);

// function every: Verifica si todos los elementos del array cumplen con la condición especificada
const areEvery = (x) => x < 15;
console.log(myArray2.every(areEvery));

// function fill: Llena una parte del array con un valor estático
console.log(myArray.fill(1, 0, 1));

// function filter: Crea un nuevo array con los elementos que pasan una prueba
const result = myArray4.filter((word) => word.length > 5);
console.log(result);

// function find: Devuelve el primer elemento que cumple con la condición especificada
const found = myArray2.find((element) => element > 6);
console.log(found);

// function findIndex: Devuelve el índice del primer elemento que cumple con la condición especificada
const isLargeNumber = (element) => element > 7;
console.log(myArray2.findIndex(isLargeNumber));

// function findLast: Devuelve el último elemento que cumple con la condición especificada
const found1 = myArray2.findLast((element) => element > 6);
console.log(found1);

// function findLastIndex: Devuelve el índice del último elemento que cumple con la condición especificada
const isLargeNumber1 = (element) => element > 7;
console.log(myArray2.findLastIndex(isLargeNumber1));

// function flat: Aplana un array anidado en un nuevo array de una sola dimensión
var myArray5 = [1, 2, [3, 4, [5, 6, ,8]]];
myArray5.flat();
console.log(myArray5);

// function flatMap: Mapea cada elemento a una nueva estructura y aplana el resultado
const result1 = myArray.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result1);

// function forEach: Ejecuta una función para cada elemento del array
myArray4.forEach((element) => console.log(element));

// function includes: Verifica si un array contiene un elemento específico
console.log(myArray.includes(4));

// function indexOf: Devuelve el primer índice en el que se encuentra un elemento (o -1 si no se encuentra)
const index = myArray.indexOf(4);
console.log(index);

// function join: Une todos los elementos del array en una cadena, separados por un delimitador
console.log(myArray4.join('_'));

// function keys: Devuelve un nuevo objeto Array Iterator que contiene las claves de los índices en el array
const iterator = myArray.keys();
for (const key of iterator) {
    console.log(key);
}

// function lastIndexOf: Devuelve el último índice en el que un elemento puede ser encontrado en el array
console.log(myArray4.lastIndexOf('Banana'));

// function map: Crea un nuevo array con los resultados de aplicar una función a cada elemento
var doubles = myArray.map(function (x) {
    return x * 2;
});
console.log(doubles);

// function pop: Elimina el último elemento de un array y lo devuelve
console.log(myArray.pop());

// function push: Añade uno o más elementos al final del array y devuelve la nueva longitud del array
const count = myArray4.push('Grape');
console.log(count);
console.log(myArray4);

// function reduce: Aplica una función a un acumulador y cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor
let initialValue = 0;
const sumWithInitial = myArray2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

//function reduceRight: Resultado de reducir el array desde el último elemento
const reducedRight = myArray2.reduceRight((acc, curr) => acc + curr);
console.log(reducedRight);

//function reverse: Invierte el orden de los elementos en el array
const reversedArray = myArray.reverse();
console.log(reversedArray);

//function shift: Elimina el primer elemento y lo devuelve
const firstElement = myArray.shift();
console.log(firstElement);

//function slice: Devuelve una copia de una porción del array
const slicedArray = myArray2.slice(1, 4);
console.log(slicedArray);

//function some: Verifica si algún elemento cumple la condición
const hasLargeNumber = myArray2.some((element) => element > 8);
console.log(hasLargeNumber);

//function sort: Ordena los elementos del array alfabéticamente o numéricamente
const sortedArray = myArray4.sort();
console.log(sortedArray);

//function splice: Modifica el array eliminando y agregando elementos
const splicedArray = myArray2.splice(2, 1, 15);
console.log(myArray2);

//function toLocaleString: Devuelve una cadena con los elementos separados por comas
console.log(myArray2.toLocaleString());

//function toString: Convierte el array en una cadena de texto
console.log(myArray.toString());

//function unshift: Añade un elemento al principio del array
myArray.unshift(0);
console.log(myArray);

//function values: Itera sobre los valores del array
const iterator2 = myArray2.values();
for (const value of iterator2) {
    console.log(value);
}