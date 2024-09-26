/*

Características             | Funciones Regulares                         | Arrow Functions
--------------------------- |---------------------------------------------|---------------------------------------------
Sintaxis                    | Más verbosa                                 | Más concisa
Contexto de 'this'          | Dinámico (depende de cómo se llama)         | Léxico (depende de dónde se define)
Objeto 'arguments'          | Disponible                                  | No disponible (usar '...args' en su lugar)
Uso de 'new'                | Puede ser usada como constructor            | No puede ser usada como constructor
Retorno implícito           | No (se requiere 'return')                   | Sí (en funciones de una sola línea)

*/

function regularFunction (num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

regularFunction(4); // 4 is even
regularFunction(7); // 7 is odd

const arrowFunction = (num) => {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");    
    }
}

arrowFunction(4); // 4 is even
arrowFunction(7); // 7 is odd