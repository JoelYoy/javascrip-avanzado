/* Mostrar todos los números impares que hay
entre dos números introduciendos por el 
usuario. */

const num1 = parseInt(prompt("Ingresa un número"));
const num2 = parseInt(prompt("Ingresa otro número"));

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++){
        if (i % 2 !=0){
        document.write(`<sting>${i},</string`);
    }
  }
} else{
    document.write(`El segundo número debe ser mayor que el primero`);
}

