// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad= 20;
if (edad>18){
   console.log("Puedes votar pero ni te emociones, no sirve de mucho");
} else {
   console.log("No puedes votar nimodo :c");
}
/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
let numero = 224;
if (numero / 7 === 0 && numero / 8 === 0){
    console.log("Verdadero");
} else {
    console.log("Falsoooooo");
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
let numeroal = 5;
if (numeroal % 4 === 0) {
    console.log("Se puede dividir entre 4");
} else if (numeroal % 9 ===0){
    console.log("Se puede dividir entre 9");
}else {
    console.log("ni una ni otra padrino");
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let categoria = "terror";
switch (categoria) {
    case "accion":
        console.log("Echate la de duro de matar");
        break;
    case "drama":
        console.log("inserte pelicula de drama xd");
        break;
    case "comedia":
        console.log("Las de scary movie estan buenisimas eh");
        break;
    case "romance":
        console.log("Yo antes de ti");
        break;
    case "suspenso":
        console.log("No topo de suspenso la vdd");
        break;
    case "terror":
        console.log("La noche del demonio, pero aguas pq sueñas feo");
        break;
    default:
        console.log("error");
        break;
}


/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
let opcion = 2;

if (opcion === 1) {
    console.log("Usted va a disponer de efectivo"); 
} 
    else if (opcion === 2) {
    console.log("Usted va a transferir dinero de su cuenta a una cuenta externa");
} else if (opcion === 3){
    console.log("Deposite su efectivo en la bandeja correspondiente");
}else if (opcion === 4){
    console.log("Elija el servicio que desea pagar");
} else {
    console.log("Error");
}



/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function convertirDivisa(cantidad, opcion) {
    let resultado;

    switch (opcion) {
        case 1:
            resultado = cantidad / 20.12;
            console.log(cantidad + " pesos mexicanos son aproximadamente " + resultado + " dólares estadounidenses.");
            break;
        case 2:
            resultado = cantidad / 23.85;
            console.log(cantidad + " pesos mexicanos son aproximadamente " + resultado + " euros.");
            break;
        case 3:
            resultado = cantidad / 0.19;
            console.log(cantidad + " pesos mexicanos son aproximadamente " + resultado + " yenes japoneses.");
            break;
        case 4:
            resultado = cantidad / 26.79;
            console.log(cantidad + " pesos mexicanos son aproximadamente " + resultado + " libras esterlinas.");
            break;
        case 5:
            resultado = cantidad / 22.98;
            console.log(cantidad + " pesos mexicanos son aproximadamente " + resultado + " francos suizos.");
            break;
        default:
            console.log("Error, opcion no valida");
            break;
    }
}
convertirDivisa (200,2)