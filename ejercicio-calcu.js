/* Escribir una calculadora para calcular la edad,
el usurio ingresa su año de nacimiento y el 
programa le dara la edad */

const año = parseInt(prompt("cual es tu año de nacimiento"));
const año_actual= 2021;
const edad = `tu edad es ${año_actual-año}`;

document.write(edad);

