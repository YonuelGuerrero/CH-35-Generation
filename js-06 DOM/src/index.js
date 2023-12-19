/*
manipulacion del dom 
-leer y traer nodos del arbol del dom
    document.getElementById (traer elementos por id)
    document.getElementsByClassName (por class name)
    document.getElementsByTagName (por etiqueta)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Traer el string dentro de mi id

//gelElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la  clase
console.log(typeof titulos); //Muestra que es un objeto xq es una coleccion de arrays 

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/* Metodos para llamar elementos mediante selectores de css
se usa para proceso mas especificos y la sintaxis querySelector
    -document.querySelector("Selector"); //#,.,<>
    -document.querySelectorAll() selecciona los elementos que se especifiquen
Siempre van a traer el primer elemento con el selector indicado
*/

//querySelector
const query = document.querySelector("#title4");
    console.log(query.innerText);

const queryClass = document.querySelector(".title");
    console.log(queryClass);

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
    console.log(queryClassAll);


//Manipular  elementos de DOM (styles) con js
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento 
const titulo2 = document.querySelector("#title2");

titulo2.innerText = "Sesion de manipulacion del DOM - CH35";
titulo2.style.color = "green";

/*
Metodos para crear y agregar elementos en el DOM. este proceso se divid en dos: crear  el nodo y agregar el nodo

    -crear nodos
        *document.createElement("element") --> crea elementos a partir de etiqueta
        *document.createTextNode("text") --> crea texto dentro de las etiquetas
*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -Agregar nodos
        *parentElement.appenChild(const);
        *parentElement.append(const);
        *parentElement.insertBefore(const);
        *parentElement.insertAdjacentElement(const);
    Utilizaremos mayormente appendChild
    */

//Obtengo el  elemento padre por tag, clase o iD
const parentElement = document.getElementById("dif");
//crear texto que vivira en el nodo1
const textoNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto en el nodo1
nodo1.appendChild(textoNodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "hotpink";

/* Agregando imagen */
//Insertm imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "../src/assets/octocat.jpg";
imgNodo.alt = "imagen octocat";
imgNodo.width = "300";

/*Otra forma  de leer y modificar nodos
    document.outerHTML (leer);
    node.innerHTML (escribir sobre el nodo);
*/
const elementoOuter = titulo2.outerHTML;
    console.log(elementoOuter);

titulo2.innerHTML = "Manipulacion del DOM - CH35";


