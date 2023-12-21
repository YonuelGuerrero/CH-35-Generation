/* PARADIGMAS DE PROGRAMACION 

-> Programacion imperativa:
    Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.

-> Programacion basada en eventos:
    Se basa en la gestion y respuesta de eventos 

-> Programacion declarativa:
    explica lo que queremos obtener

-> Programacion orientada a objetos:
    Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristivas (propiedades o atributos) y sus comportamientos o acciones (metodos).

    */

//Clases: plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //el constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos 
    //para inicializar un objeto es necesario definir un constructor que tomara los atributos
    //clases= molde, objeto= gomita, constructor= chefsito, atributos= ingredientes, metodos= comportamientos

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}

comer (){
    console.log("Bon apetit");
} //metodo comer

bailar() {
    console.log("Dale hasta el suelo");
}; //Metodo bailar

mostrarInfo(){
    console.log("nombre: ", this.nombre);
    console.log("apellido: ", this.apellido);
    console.log("edad: ", this.edad);
    console.log("email: ", this.email);
    console.log("telefono: ", this.telefono);
}
}

let usuario1 = new persona ("Fernanda", "Ramos", 31, "fer@gmail.com", "5574123698");
let usuario2 = new persona ("Mariana", "Valladolid", 28, "mariana@gmail.com", "4433748493");
let usuario3 = new persona ("Yonuel", "Guerrero", 27, "yonuelguerrero@gmail.com", "3317453874");
let usuario4 = new persona ("Anna", "Fernandez", 27, "anafernandez@gmail.com", "337284754");
let usuario5 = new persona ("Maara", "Lomeli", 29, "maara@gmail.com", "5536244937");

console.log(usuario1); //imprimir objeto completo 
console.log(usuario4.email) //imprimir un atributo en especifico
console.log(usuario1.email, usuario2.email, usuario3.email) //imprimir un atributo de varios objtos
usuario1.comer();
usuario3.bailar();
usuario5.mostrarInfo();
console.log(usuario3.telefono, usuario5.apellido);

//Pilares de la programacion orientada a objetos

/* Herencia
Polimorfismo
Encapsulamiento
Abstraccion*/

//Herencia nos permite heredar a clases inferiores para poder optimizar el programa

class arrendadxr extends persona { //subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor (nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        super (nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo() {
        console.log("capacidad: ", this.capacidad);
        console.log("costo: ", this.costo);
        console.log("Nombre del lugar: ", this.nombreLugar);
    }
}

let arrendadxr1 = new arrendadxr ("Rocio", "Hernandez", 29, "rocio@gmail.com", "557726374", 100, 50000, "salonG");

console.log (arrendadxr1);
console.log(arrendadxr1.costo);
arrendadxr1.mostrarInfo();

/*POLIMORFISMO
Tener objetos de diferentes tipos que pueden ser manipulados en comun
*/
class producto {
    marca = "";
    precio = 0;

    mostrarDescripcion(){
        console.log("Marca: ");
        console.log("Precio: ");
    }
}

let producto1 = new producto ("CeraVe", 85);
/* ====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento. */

/* ENCAPSULAMIENTO 
ocultar la implementacion de un objeto y solo mostrar los datos necesarios */

class Usuario {
    #contrasena;

    constructor (userName, correo, contrasena){
        this.userName = userName;
        this.correo = correo;
        this.#contrasena = contrasena;
    }

verificarContrasena (contrasena){
    return this.#contrasena === contrasena;
    }
}

/*ABSTRACCION 
no es nada mas que traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos */

//Los objetos de tipo json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principios Solid 
/* 
1- Principio de responsabilidad unica (single responsability principle, SRP)
Una clase debe tener asignada una tarea o responsabilidad especifica, y esta no deberia cambiar

2- Principio abierto/cerrado (open/close principle, OCP)
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma 

3- Principio de sustitucion de Liskov (Liskov sustitution principle, LSP)
Una clase hijo puede sustituir objetos de una clase padre

4- Principio de segregacion de interfaces (Interface segregation principle, ISP)
Delimitar los metodos que necesito y dejar fuera los innecesarios

5- Principio de inversion de dependencias (Dependency inversion principle DIP)
----> TAREA 
*/

/* tarea
programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para inicializar sus atributos (constructor), imprimirlo y mostrar un mensaje con el resultado si la calificacion es aprobatoria o no. */

class alumno { 
    nombre = ""; 
    calificacion = 0; 

    constructor(nombre, calificacion) { 
        this.nombre = nombre;
        this.calificacion = calificacion;     
    }
    printCalificacion() { 
        console.log(`${this.nombre} tiene una calificación de ${this.calificacion}`);
    }
    evaluacion() { 
        
        if (this.calificacion >= 6) { 
            console.log(`${this.nombre}, pasó :).`);
        } else {
            console.log(`${this.nombre}, no pasó :(`);
        }
    }
}

const alumno1 = new alumno("Javier", 3); 
const alumno2 = new alumno("Yonuel", 9); 

alumno1.printCalificacion();
alumno1.evaluacion(); 

alumno2.printCalificacion();
alumno2.evaluacion(); 

