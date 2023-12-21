//Programacion sincronica
function two(){
    console.log ("dos");
}
function one(){
    console.log ("uno");
    two();
    console.log("tres");
}

one();
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

//Proframacion asincrona
//setTimeOut - recibe una funcion anonima y establece el tiempo (en milisegundos) de ejecucion para cumplir con la condicion de asincronismo

/* EJERCICIO

const twoAsync = () => {
    setTimeout( () => {
    console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function() {
    console.log("uno Async");
    }, 3000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();
*/


//-->USANDO FETCH PARA MOSTRAR EN CONSOLA 
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    //si se cumple la promesa, vamos a traer los datos de la api y se convertira en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuarios de la apli
        console.log(data [0].name); //mostrando solo el usuario 0, solo su nombre 
    })
    .catch(error => console.error("algo salio mal", error)); //mensaje de error

//--> USANDO FETCH PARA MOSTRAR EN NAVEGADOR 

    const botonInfo = document.querySelector('#btn-mensaje');
    const info = document.querySelector('#mensaje');
    //Variable para guardar la informacion que se va a traer desde la API: debe ser de tipo null
    let post = null;

    //Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () =>{
    fetch ("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then (response => {
            post = response; //guardo los datos de response en la variable de tipo null, para que modificar el dato
            //mandamos a llamar la variable desde la  funcion, hay que hacerla
            mostrarDatos(post);
        })
        .catch(error => console.error("problemasssss", error));
});
    //funcion que me permita manipular la variable de tipo null
//quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //creando nodos (elementos) mediante DOM manipulation 
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //ponerlos en el html (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.userName;
    email.innerHTML = post.email;
    phone.innerHTML =  post.phone;

    //Hacer que aparezcan en el navegador 
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//--> USANDO FETCH PARA MOSTRAR PRODUCTOS EN NAVEGADOR 
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then (response => response.json())
    .then (response => {
        productos = response 
        //funcion por definir
        mostrarProductos(productos);
    })
    .catch (error => console.error("cuidaoo", error))
})

//funcion para crear , agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mando a llamar las llaves de title, price, description, category, image desde la API
    productos.map((productos) => {
    const imagen = document.createElement("img");
    const titulo = document.createElement("h3");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");
//Enviar a html con .innerHTM
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

//mostrarloe en navegador agregandolos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);

})
}

//Metodo post utilizando fetch, me permite crear recursos en la api
fetch ("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un metodo de tipo POST
    method: "POST",
    //creo el body de mi nuevo objeto siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify ({
        userId: 1986,
        title: "suenan los androides con ovejas electricas?",
        body: "author: phillipe K. Dick"
    }),
    //definir headers 
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })


// ------>Programacion asincrona (promise) <--- //
//funcion flecha de tipo async -await
//indico que es una funcion asincrona con la palabra reservada async antes de los parametros 
const getUser = async() => {
    // para que se cumpla la promesa, no utiliza then , sino que usamos try
    //para errores, se sigue utilizando catch
    try{
            //retardo para que se ejecute de manera asincrona. tengo que crear una nueva promesa que recibe un setTimeOut
            await new Promise(resolve => setTimeout(resolve, 3000));
        
        //Mi promesa que se ejecuta 
        const url = "https://jsonplaceholder.typicode.com/users/4"
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.error("error inexplicable", error);
    }
}

//invocar la funcion, por favor, que no se nos olvide
getUser();


//-->LOCAL STORAGE <--//
//nos permite crear, modificaar, eliminar, guardar objetos de javascript de manera local en el equipo 
//crear un objeto de js con sus llaves y valores 
const user = [
    {
    id : 1, 
    name: "Daniel",
    apellido: "Maldonado",
    email: "email@gmail.com",
    posicion: "instructor",
    empresa: "Generation"
},
{
    id: 2,
    nombre: "Yonuel",
    apellido: "Guerrero",
    email: "yonuelguerrero@gmail.com",
    posicion: "java jr developer",
    empresa: "amDocs"
} ];
//convertir el objeto creado a notacion json y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//traer el objeto desde localStorage
const users = JSON.parse(localStorage.getItem("usuario"));

    console.log(users);
console.log(`${user[1].nombre} con posicion ${user[1].posicion} de la empresa ${user[1].empresa}`);


