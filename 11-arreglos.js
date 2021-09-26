/* Arreglos
Estructura de datos */

/* declaración de arreglos */
const arreglo = [];
const arreglos2 = new Array();

let lenguajes = ["javascript", "java", "PHP", "Python", "c#", 
"c++", "Scala", "Rust", "Ruby", "Cobol",];


/* for(let i = 0; i < lenguajes-length-1; i++){    
}  */

/* Nos sirve para recorrer los elementos de un arreglo */
/* forEach */
document.write("<ul>");
lenguajes.forEach(function(lenguaje, index){ //se conoce como función anonima 
    document.write(`<li> ${index} - ${lenguaje} </li>`);
    // console.log(lenguaje); 
});
document.write("<ui>");
/* console.log(lenguajes.length); */

/* Map, crea un nuevo arreglo con los resultados */
let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero) {
    return numero * 2
});

console.log(numeros);
console.log(numeros2);

/* Includes determina si un arreglo contiene un valor */
console.log(lenguajes.includes("PHP"));
/* console.log(lenjuajes.includes("Go")); */

/* Filter, crear un nuevo arreglo con todos los elementos que cumplan con la condición */
let filtrados = numeros.filter(function(numero){
    if(numero > 10) {
        return numero;
    }
});

console.log(filtrados);

