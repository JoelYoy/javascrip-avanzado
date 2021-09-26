/* Solcitar número al usuario, mostrar la suma y la media de los números introducidos 
hasta introducir un número negativo y ahi mostrar el resultado */

let num = parseInt(prompt("Ingresa un número"));

cont = 0;
prom = 0;

while(num > 0){
    cont++;
    prom = prom+num;
    num = parseInt(prompt("Ingrese un número"));
}

document.write(`<p> Números validos: </p>`);
document.write(`suma ${prom} promedio ${prom/cont}</p`);
document.write(`Los números son: ${numeros}</p`);




