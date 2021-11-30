/**Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola. */

let frase = prompt('Escriba su frase:');
console.log('su frase es:', frase)

/**Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación. */

let nombre = prompt("Escriba su nombre")
console.log('Hola', nombre, '!');


/*Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario. */

let numero1 = parseInt(prompt('Escriba el primer numero:'))
let numero2 = parseInt(prompt('Escriba el segundo numero'))

let suma = numero1 + numero2;

console.log('la suma de los numeros es:', suma)

/**Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: */

let nacimiento = parseInt(prompt("Escriba su fecha de nacimiento "));

let edadActual;

edadActual = 2021 - nacimiento;
console.log('tu edad es ', edadActual)

/**El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona. */

let peso = parseFloat(prompt("Cual es tu peso:"));
let altura = parseFloat(prompt("Cual es tu altura en :"));

let Bmi = peso / (altura ** 2)
console.log('Tu indice de masa corporal acorde a tu peso y estatura es: ', Bmi)



