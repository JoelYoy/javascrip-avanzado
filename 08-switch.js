/* switch
Estructura de control de flijo, nos ayuda a tomar decisiones 
mediante la evaluación de una condición(Tipo if) */

const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

if(edad === 18){
    mensaje = "Acaba de cumplir la mayoria de edad";
}

switch (edad) {
    case 18: 
       mensaje = "Acaba de cumplir la mayoria edad";
       break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`);

const edad = prompt("Ingresa tu nombre");
let mensaje = "";

switch (nombre) {
    case "Carlos": 
       mensaje = "Eres administrador";
       break;
    case "juan":
        mensaje = "Eres usurio";
        break;
        default:
            mensaje = "No tienes permisos para usar el sistema";
        break;
    
}

document.write(`<p>${mensaje}</p>`);


