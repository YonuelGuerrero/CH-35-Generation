/*
Tipos de datos
> - String (Cadenas de texto)
> - Number (numericos)
> - Booleans (booleanos; true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)

console.log(); Nos permite visualizar en consola del navegador el codigo de js.
console.warn(); Muestra un mensaje de advertencia
console.error(); Muestra un mensaje de error
console.table();
*/

let firstName;
firstName="daniel";
let lastName="Maldonado";

console.log(firstName+" "+lastName);
console.log("Mi nombre es "+firstName+" y mi apellido es "+lastName);

/*
ECMAScript 6 (ES6). Interpolacion de cadenas
> - backticks ``
> - Para variables ${}
> - Texto para string
*/
let age = 37;
//sin salto de linea
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);
//con salto de linea
console.log(`Mi nombre es ${firstName}
mi apellido es ${lastName}
tengo ${age} años`);

//console.warn();
console.warn(`Precaucion, no es buena practica dejar sin punto y coma`);
//console.error();
console.error(`Status 404`);

/* Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
-Los arrays se pueden manipular mediante métodos específicos.
-Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
-Un array posee n cantidad de elementos.
-Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/
let arreglo1 = []; //array vacio
console.log (`array vacio ${arreglo1}`);

//Los elementos de un array se separan mediante comas
let cars = ["volkswagen", "BMW", "Mazda", "Kia"]; //Array de strings
console.log(cars);
//Longitud e indice son diferentes. La longitud (lenght) es el numero de elementos y el indice correspondiente a cada elemento a partir del 0.

console.log(typeof(cars)); //output: objects

//Array de numbers
let salariesMxn = [12000, 13000, 10000, 11000, 14000, 15000, 16000, 17000, 18000, 10000, 19000, 20000];
console.log(salariesMxn.length); //Output: 12
console.log(salariesMxn);

/*
Objetos.
los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente
  const object = {
    clave1: "valor1" (dato1),
    clave2: valor2 (dato2),
  }
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
  firstName: "Yonuel",
  lastName: "Guerrero",
  age: "27",
  country: "Mexico"
}
console.log(employee);
//Mostrando mi array como table
console.table(cars);
//Mostrando mi objeto como table
console.table(employee);


//Comentarios de una sola linea

/*comentarios 
multilinea*/

//alert ("Hola mundo");

//console.log ("Mensaje para la consola");

/* var nombre = prompt("Ingresa tu nombre");
alert ("Hola, "+ nombre+"  !Bienvenido a la CH35!"); */

/*var numero1 = parseInt(prompt("Ingresa el primer numero:"))
var numero2 = parseInt(prompt("Ingresa el segundo numero:"))

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1 / numero2));
*/

/* var nombre = prompt("Ingresa tu nombre");
var edad = prompt("ingresa tu edad");

    if (edad >=18)
{
  alert("Ya tas ruco, pasale")
}
if(edad <18)
{
  alert("No puedes tas chikito")
}
*/


//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/* 
let nombre= "Daniel";
let invitaxsExtra = 2;
let esMayorEdad = true;
let edad = "24";
let invitadxEspecial = "null";
let horaDeSalida = undefined;

console.log(nombre);
document.write(nombre);
*/

/* Encasillamiento o tipado 
nos es util para el mantenimiento del codigo ya que lo hace mas legible y facil de entender 
prevencion de errores para reducir la probabilidad de los mismos 
mejora el rendimiento de nuestro programa */

/*let numero = 15;
let texto = "Hola";

//Con encasillamiento:

let numeroEncasillado = Number = 5;
let textoEncasillado = String = "Hola";*/

//typeOf palabra reservada para saber que tipo de dato tenemos

/* console.log(typeof (nombre))

// conversion de string a number 

let funcionNumber = console.log (typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log (typeof parseFloat (nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en numeros, ambas nos ayudan para este cambio 

//conversion de number a string

console.log (typeof string (edad));
console.log (typeof edad.toString()); 

//Conversion de boolean a number 

let numero = Number (esMayorEdad);

console.log(typeof (numero)); 

let texto = String (esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString());

let negacion = !esMayorEdad;

console.log (negacion); */

//Concatenar = unir strings

/* 
let saludo = "Hola humanx ";
let frase = "el futuro es hoy";

texto= saludo + frase;

document.write (texto);
console.log(texto);
alert(texto); */



