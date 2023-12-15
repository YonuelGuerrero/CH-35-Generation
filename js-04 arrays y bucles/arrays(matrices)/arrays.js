/*
*==Arrays==
*Es una coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa en el array.
*Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
*/
//Crear un Array
const numeros = [1,2,3,4,5];

//Array con cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];

console.log (comida);

//Array mixto
const mixto = [
    "pluma", 
    8, 
    true, 
    { nombre:"Mar"}
];
console.log(mixto);

//Array Vacio
const lista = [];
console.log(lista);

//Agregar elementos a mi array vacio
lista [0] = "Leche";
lista [1] = "Carne de pollo";
lista [2] = "Espinaca";
lista [3] = "Huevo";
console.log (lista);

//Otra manera de crear arrays
const frutas = new Array("manzana", "naranja", "peras", "mandarinas");
/* Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array */
console.log(frutas);

//Longitud de un array 
console.log(frutas.length);

//Acceder a los elementos del Array, acorde a su posicion (indice)
console.log(frutas[3]); //mandarinas
console.log(frutas[5]); //undefined

//Modificar un elemento del array por el indice 
const cremeria = ["jamon", "salchicha", "queso adobera", "queso cotija", "yogurt"];
console.log(cremeria);
//Cambiar un elemento de queso a quesillo 
cremeria[2] = "Quesillo";
cremeria[4] = "Danonino";
console.log(cremeria);

//Arreglo de los arreglos o multidimensional 
console.log("arreglo de arreglos");

//Estados: estado de mexico, jalisco, yucatan, sonora, oaxaca, cdmx

//Platillos: guajolocombo, torta ahogada, panuchos, dogos, tlayuda, tacos

const estados = ["estado de mexico", "jalisco", "yucatan", "sonora", "oaxaca", "cdmx"];

const platillos = ["guajolocombo", "torta ahogada", "panuchos", "dogos", "tlayuda", "tacos"];

const menu = [estados, platillos];

console.log("estado:", menu[0][2]);
console.log("platillo:", menu[1][2])

/*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.*/

console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`);

/*
Metodos de arrays
*Metodo de cola (queue): implican agregar elementos al final del array, y eliminar elementos al inicio del array. sigue el principio de FIFO (first-in-first-out) lo que significa que el primer elemento añadido es el primer elemento eliminado.
se usa:
-push
-shift
-unshift

*Metodo de pila (stack): implica agregar elementos al final del array y eliminar elementos del final del array. sigue el principio LIFO (last-in-fist-out) que significa que el ultimo elemento añadido es el primero en ser eliminado.
se usa:
-push
-pop
*/
console.log("Metodos de arrays");

const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);

//pop() eliminar el ultimo elemento del array
let popch35 = ch35.pop();

console.log(popch35); //Muestra el dato eliminado 
console.log(ch35); //Muestra la lista menos el dato eliminado 

//push() agregar al final del array
let pushch35 = ch35.push("Mony");
console.log(ch35);

//shift() quitar primero del array
let shiftch35 = ch35.shift();
console.log(ch35);

//Unshift() agregar al principio del array
let unshiftch35 = ch35.unshift("Dany");
console.log(ch35);

//Reverse() cambia el sentido del ordenamienoto del array 
let reversech35 = ch35.reverse();
console.log(ch35);

/*
Investigar:
-sort
-forEach
-slice
-splice
-indexOf
*/