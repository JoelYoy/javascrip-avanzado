/* Pedir un número al usurio y decirle 
si es par o inpar */

const valor = parseInt(prompt("Ingresa un valor"));

if(valor%2 == 0){
    document.write("El número es par");
 } else{
        document.write("El número es impar");
}
