/*Operador 
Es un signo que especifica que debe efectuar una determinada operacion 

*Operadores aritmeticos (+, -, /, *,%,++,--)
*Operadores de asignacion (=)
*Operadores logicos (&&,!,)
*Operadores de comparacion (==,===, !=,<,>, >=, <=)
*Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)

*/
/*
==Operadores aritmeticos
(+) suma: se utiliza para sumar dos numeros 
(-) resta: se utiliza para restar un numero de otro 
(*) multiplicacion: se utiliza para multiplicar dos numeros 
(/) division: se utiliza para dividir un numero entre otro 
(%) residuo: se utiliza para obtener el residuo de una division 
(++) incremento: aumenta de uno en uno la cantidad o el numero
(--) decremento: disminuye de uno en uno la cantidad o el numero 
*/
let num1 = 5;
let num2 = 8;
let num1a = num1;
 num1a++;
let num1d = num1;
 num1d--;


console.log(`
 ${num1} + ${num2} = ${num1+num2}
 ${num1} - ${num2} = ${num1-num2}
 ${num1} * ${num2} = ${num1*num2}
 ${num1} / ${num2} = ${num1/num2}
 ${num1} % ${num2} = ${num1%num2}
 ${num1} -- = ${num1d}
 ${num1} ++ = ${num1a}
`);

//* Usando los operadores para un descuento
let precioReal = 200;
let descuento = 20;

console.log(`
kilo de carnita ${precioReal}
descuento %${descuento}
cantidad menos a pagar ${precioReal*(descuento/100)}
Precio con descuento ${precioReal*(1-(descuento/100))}
`);

/*
*Operadores de asignacion 
(=): Este operador no compara, lo que hace es asignar
p. ej:
let frutas = manzana;

*Operadores de comparacion 
(==) Igualdad: compara si nuestros valores son iguales 
*/

let numero3 = 10;
let texto = "10";

console.log (numero3 == texto);

//(===)IGUALDAD ESTRICTA: Compara si nuestros valores son iguales y el tipo de dato
let numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);


/* 
(!=) Desigualdad o distinto: verifica si dos valores no son iguales y de ser necesario realiza la conversion */
let precioCaja = 1499;
let precioMaximo= 1500;

if (precioCaja !== precioMaximo) {
    console.log ("El precio del producto no es igual al precio max");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

//kkkkkkkkkk
//* Operador desigualdad != y desigualdad estricta !==
let var1 = 3;
let var2 = "3";
let var3 = 4;
console.log(`
-----------------------------------------------------------
<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<*>
-----------------------------------------------------------
Operador de desiguldad != y desigualdad estricta !==

var1 es 3 de tipo int
var2 es 3 de tipo String
var3 es 4 de tipo int

var1 != var2 ${var1!=var2}
Esto debido a que ambos tienen como valor 3 aunque de diferente tipo

var2 != var3 ${var3!=var2}
Ahora se cumple que son diferentes

var1 !== var2 ${var1!==var2}
Se cumple por que compara el tipo y valor
ya que var1 es tipo int y var2 es tipo String

var1 !== var3 ${var1!==var3}
Se cumple por que compara el tipo y valor, si son diferentes
los dos son tipo int, pero de difernte valor
-----------------------------------------------------------
<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<*>
-----------------------------------------------------------
`);

/* != desigualdad: compara el Valor si el valor es diferente regresa true
!== desigualdad estricta: compara el Valory el TIPO de variable, si alguno de estos es diferente regresa true
*/

/*
(!==) DESIGUALDAD ESTRICTA: verifica si dos valores no son iguales, pero a diferecia de (!=), en este caso ambos valores deben tener el mismo tipo y valor*/
let numero5 = 10;
let numero6 = "10";

if (numero5 !== Number (numero6)){
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales");
}

//otro ejemplo de desigualdad estricta 
let precioCaja1 = 2000;
let precioOferta1 = "2000";

if (precioCaja1 !== precioOferta1){
    console.log("Difieren");
} else {
    console.log (Iguales);
}

//(>) Mayor que

let puntuacionFinal = 85;
let puntuacionMaxima = 300;

console.log(puntuacionFinal > puntuacionMaxima);

// (<): Menor que, nos indica si un valor es menor que otro
let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

let anios1 = 29;
let votar = 30;
console.log (anios1<votar);

//(>=)Mayor o igual, nos dice si un valor es mayor o igual que otro 
let edad = 40;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

let yo = 18;
let bar = 21;
console.log(yo>=bar);


//(<=)Menor o igual que
let she = 21;
let kinder = 7;
console.log(she<=kinder);


/*ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro*/


/*

// Solicitar al usuario que ingrese dos números
const numero1 = prompt("Ingrese el primer número:");
const numero2 = prompt("Ingrese el segundo número:");

// Verificar si los números son iguales
if (numero1 === numero2) {
    console.log("Los números son iguales.");
} else {
    // Determinar cuál número es mayor
    if (numero1 > numero2) {
        console.log("El primer número es mayor que el segundo.");
    } else {
        console.log("El segundo número es mayor que el primero.");
    }
}

*/

/* ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no*/

// Solicitar al usuario que ingrese dos palabras

/*const palabraD1 = prompt("Ingrese la primera palabra:");
const palabraD2 = prompt("Ingrese la segunda palabra:");

// Verificar si las palabras son iguales
if (palabraD1 === palabraD2) {
    console.log("Las palabras son iguales.");
} else {
    console.log("Las palabras no son iguales.");
}
*/
//OPERADORES LOGICOS
//(&&) AND: se utiliza cuando las dos condiciones deben cumplirse 

let mayoriaEdad = 18;
let tieneId = true;

if (mayoriaEdad >= 18 && tieneId) {
    console.log("Puedes rentar el salon");
} else {
    console.log("No lo puedes rentar");
}

//(||)OR: Se utiliza cuando se debe cumplir una condicion u otra

let esPrime = false;
let descuentoCup = true;

if(esPrime || descuentoCup){
    console.log("Califica para descuento");
} else{
    console.log("No califica para descuento");
}

//(!)NOT: se utiliza para negar el valor de una condicion

let esDiaLibre = false;

if(!esDiaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}

//==OPERADORES DE CADENA

//.toLowerCase hace el cambio de nuestro string a minusculas

let mensajeUsuario = "Bienvenidx A La Tierra";
let cambioMinus = mensajeUsuario.toLowerCase();

console.log(cambioMinus);

//.toUpperCase hace el cambio de nuestro string a mayusculas
let saludo = "Casi viernes, Casi Navidad";
let cambioMayus = saludo.toUpperCase();

console.log(cambioMayus);

//.trim quita los espacios

let aviso = "   aviso    ch   35  ";
let sinEspacios = aviso.trim();

console.log(sinEspacios);

//.toString convierte un tipo de dato number en string 
let numero10 = 31;
let cadenas = numero10.toString();

console.log(cadenas);

//.concat
let nombre = "Fernanda";
let apellido = "Ramos";
let nombreComp = nombre.concat (" ", apellido);

console.log(nombreComp);

/*EXPRESIONES
expresion aritmetica

let operacion = 14+25*12; (combina la suma con la multiplicacion)

expresion string (de cadena)

let notificacion = "Casi " + "anio nuevo"; (expresion concatenando cadenas de texto)

Expresiól lógica
let es MayorEdad = (23 > 18) && (23 < 65);

Expresión de asignación
let frasco = chocolates; asigna el valor a la variable
*/


//EJERCICIO HOTCAKES

// Solicitar al usuario ingresar los ingredientes
const harina = prompt("¿Tienes harina? (Sí/No)").toLowerCase();
const leche = prompt("¿Tienes leche? (Sí/No)").toLowerCase();
const huevo = prompt("¿Tienes huevos? (Sí/No)").toLowerCase();
const azucar = prompt("¿Tienes azúcar? (Sí/No)").toLowerCase();
const polvoHornear = prompt("¿Tienes polvo de hornear? (Sí/No)").toLowerCase();

// Verificar si se tienen todos los ingredientes
if (harina === "si" && leche === "si" && huevo === "si" && azucar === "si" && polvoHornear === "si") {
    console.log("¡Tienes todos los ingredientes para hacer hot cakes! 😊");
    //gregar el código para preparar los hot cakes
} else {
    console.log("Te faltan algunos ingredientes para hacer hot cakes. 😢");
}
