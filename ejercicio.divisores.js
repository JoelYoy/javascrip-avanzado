/* Mostrar todos los numero divisores de un número introducido. */

const numero = parseInt(prompt("Introduce un número"));

for(let i = 0; i <= numero; i++){
    if(numero % i === 0){
        document.write(i + "</br>");
    }
}


 