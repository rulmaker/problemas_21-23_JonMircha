//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const cuadrado = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No ingresaste un número");

    if (!(arreglo instanceof Array)) return console.warn(`El valor "${arreglo}" ingresado, no es un arreglo`)

    let x = [];

    for (let i of arreglo) {
        i *= i;
        x.push(i);
    }
    return console.log(x);
}

// cuadrado([1, 4, 5]);
// cuadrado([8, 35, 40]);
// cuadrado();
// cuadrado({})
// cuadrado("hola")





/*
let numeros = [1, 4, 5],
    multiplicar = [];

numeros.forEach(function (x) {
    x *= x;
    multiplicar.push(x);
})
console.log(multiplicar);
*/

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].




//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


// Solución de Jon

// 21 -

const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    const newArr = arr.map(el => el * el);
    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);


}

// devolverCuadrados();
// devolverCuadrados(true);
// devolverCuadrados({});
// devolverCuadrados([]);
// devolverCuadrados([1, 2, "3"]);
// devolverCuadrados([1, 4, {}]);
// devolverCuadrados([1, 4, 8]);

// 22 -

const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    return console.info(`Arreglo original: ${arr},\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(...arr)}`);
}

// arrayMinMax();
// arrayMinMax({});
// arrayMinMax([]);
// arrayMinMax([1, "2"]);
// arrayMinMax([1, 4, 9, -3]);
// arrayMinMax([-15, 12, 56, -56]);


// 23 -

const numParImpar = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    });
}

// numParImpar();
// numParImpar("Hola");
// numParImpar([1, "2"]);
// numParImpar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);