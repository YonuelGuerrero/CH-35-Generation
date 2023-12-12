/* Funciones
son bloques de codigo con instrucciones que se pueden reutilizar las veces que sea necesarias.
Algunas funciones reciben parametros y otras no reciben parametros*/

//Funcion que permite saludar
function saludar() {
    console.log("Hola desde una funcion");
}
//Ejecutar la funcion con el nombre de la funcion y los parametros 
saludar();

//Hoisting. Caqracteristica de una funcion que nos permite invocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque de codigo o despues.
//Se invoca en la linea 10 y 17
function saludar() {
    console.log("Hola invocando la funcion con hoisting");
}
saludar();

//Funciones que retornan algo... Para que una funcion retorne algo (un string, una operacion,una variable, etc), necesitamos indicarle al codigo de la funcion que vamos a retornar con la palabra return
function greeting(){
    return "Hola desde una funcion que retorna";
}
console.log(greeting());

//Funcion que retorna y recibe parametros
function sumar(x, y){
    return x + y;
}
let resultado = sumar (255, 245); //Variable
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcular el cuadrado de un numero
function calcCuadrado (numero){
        return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//-- Funciones flecha (Arrow function) -- Es una manera de declarar una funcion por declaracion, sintetizando codigo y haciendolo mas legible.

//Funcion flecha para calcular el cubo de un numero 
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo (3);
console.log(resultCubo);

//Funciones anonimas. son un tipo de funciones que se declaran sin  nombre de funcion y se alojan en el interior de una variable. se hace referencia a ellas cada vez que la utilicemos.
//Las funciones anonimas no permiten el hoisting, (no se pueden invocar antes de inicializarlas).
const mensaje = function (){
    return "este es un msj desde una funcion anonima";
}
console.log (mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
//Funcion B
const functionB = function (){
    console.log ("ejecutando funcion B");
}
//Funcion A que mandara a llamar a la funcion B
const functionA = function (Callback) {
    Callback();
}
functionA (functionB);
