const nombre = prompt("cual es tu nombre");
const edad = prompt("cual es tu edad");


console.log("hola " + nombre + " saludos. tu edad es " + edad + " años"  );

/* imprimir variables y contantes dentro de strings */
const saludo = `<h1>hola ${nombre} saludos. Tu edad es ${edad} años</h1>`;
console.log(saludo);
document.write(saludo);

