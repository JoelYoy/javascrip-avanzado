/* ciclo while
Nos permite repetir el código mientras una condición
sea verdadera */

/* let num1 = parseInt(prompt("Ingresa un número"));
 */
/* Nan
 Not a number */

 /* while(isNaN(num1)){
    num1 = parseInt(prompt("Ingresa un número"));
} */

let num1 = parseInt(prompt("Ingrese un número"));
const num_secreto = 23;
let intentos = 1;

while(num1 !== 23){
    console.log("No adivinaste el número secreto, intenta de nuevo");
    console.log(`Intento: ${intentos}`);
    intentos++; /* para saber el número de intentos */
    num1 = parseInt(prompt("Iingresa un número"));
}

console.log("Felicidades, encontraste el número secreto");

/* ciclo do while */ 
/* primero ejecuta y luego pregunta */
 
let num1 = parseInt(prompt("Ingresa un número"));

do {
    document.write(`<p>El número introducido es: ${num1}</p>`);
    num1 = parseInt(prompt("Ingresa un número"));
}
while(num1 > 5);