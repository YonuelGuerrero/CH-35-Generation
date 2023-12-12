console.log("Hola CH35");
/* Control de flujo y estructura de control
*
Las estructuras de control son un componente fundamental dentro de la programacion, entre algunas de las faccilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instruccionesb en caso de que no se necesite
 * 
- Facilitar tanto la escritura de codigo como la claridad de este
 * 
Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 */

 /*Declaracion de sentencia if-else
 -palabra reservada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar una expresion logica (true, false) se abr ey cierran llaver {} para indicar que sentencia va a ejecutar si la condicion se cumple (true), 
 despues de la llave {}declarada para el bloque de ejecucion if, colocamos la palabra reservada else. Para este ejemplo no es necesario colocar mas expresiones dentro de un {}; simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla (false).
 */

 let n= 15;
 if (n>10){
    console.log(true);
 } else {
    console.log(false);
 }

 /*
 if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces esta misma sentencia, lo que nos permitira tomar decisiones mas complejas
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar en codigo poco legible y confuso
 */

 //If anidados
let edad=28;
if (edad<18) {
    console.log("Eres menor de edad, retirate");
} else if (edad>=18 && edad<65){
    console.log("Eres un adulto joven");
} else {
    console.log("Eres un adulto mayor");
}

/*Sentencia switch
Es otro tipo de estructura de control de flujo, que nuevamente se encuentra en diversos lenguajes de programacion. Es bastante parecido al de la sentencia if-else,
pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresion que cumpla con un caso especifico, sera la secuencia que se va a ejecutar dentro de la declaracion.

-Declaracion:
Se empieza por colocar la palabra reservada Switch, seguido de esto, solocamos parentesis () donde se debe colocar el valor que va a indicar que sentencia/caso a ejecutar.
-Falta indicar el bloque de codigo que se limita a esta sentencia, como lo hicimos con la sentencia if o con las funciones.
-Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee establecer segun sea el valor indicado dentro del parentesis ()
-Cada uno de estos casos se separa de la siguiente manera :
        -case valor: instruccion a ejecutar si el valor empata con este caso.
        -despues, para indicar que la ejecucion de la sentencia debe cortarse cuando se cumple, se coloca la instruccion "break".
    Cuando terminemos de establecer los casos que necesitemos declarar dentro de nuestra sentencia, debemos colocar un valor por defecto default
    -Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
        default: mensaje no disponible.
*/

let dia = "martes";
switch (dia){
    case "lunes": 
        console.log("odio los lunes");
        break;
    case "martes": 
        console.log("quien avienta cuetes los martes");
        break;
    case "miercoles": 
        console.log("toca presentar proyecto");
        break;
    case "jueves": 
        console.log("juevebes casi viernes");
        break;
    case "viernes": 
        console.log("viernes de disfraces");
        break;
    case "sabado": 
        console.log("sabadaba de chelearrrr");
        break;
    case "domingo": 
        console.log("domingo de resurreccion");
        break;
    default:
        console.log ("Dia desconocido");
        break;
} //Termina switch
/*
-Operador ternario
Expresion condicional if-else mas simple y legible 
principalmente se usa para simplificar condiciones de una soa expresion
tambien puede anidar sentencias if-else-if sin embargo, no se recomienda porque el codigo se puede volver confuso y poco legible.
Su declaracion es la siguiente:

-Palabra reservada var, let o const:
se le asigna un nombre como si se tratara de una variable, operador de asignacionn "=", seguido de este operador hay que colocar una expresion logica, esta va dentro de un parentesis (), despues hay que agregar un caracter ? que indica el camino a seguir, dependieendo de si se cumple (o no) la expresion,
Para separar el resultado true de false debemos agregar un caracter de : ,del lado izq se coloca la sentencia a ejecutar
Si se cumple la condicion, del lado derecho se coloca la sentencia a ejecutar

*/
//Ejemplo de operador ternario
let verificacion = n > 5 ? "Si es mayor" : "No es mayor";
console.log (verificacion);

/*
-Cuando usar if-else , o cuando usar switch?
-if-else: cuando necesitemos tomar decisiones bajo condiciones mas flexibles
-switch: cuando tengamos un conjunto fijo de valores para comparar una expresion 
*/

//EJERCICIOS
