/* Realizar un programa que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y diferencia,
en caso contrario informar el producto y la dovisión
del primero respecto al segundo */


const num1 = parseInt(prompt("Escribe un número"));
const num2 = parseInt(prompt("Escribe otro número"));

if(num1 > num2){
    document.write(`La suma es:${num1 + num2}`);
    document.write(`La resta es:${num1 - num2}`);
} else{
    document.write(`La multiplicación es: ${num1 * num2}`);
    document.write(`La división es: ${num1 / num2}`);
}

/* Entendi mejor este código */

