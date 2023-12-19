/*
para manipular la informacion de un usuario necesito crear un perfil mediante un objeto de js
*/
const user = {
    username: 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favfilms: ['shrek', 'mean girls', 'interestellar']
}

//Crear una funcion que me permita ingresarr el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*mostrando elementos de unalista en forma de lista 
    para mostrar el array en forma de lista realizamos un  ciclo forEach, para recorrer todo el array y traer cada elemento a la lista */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);        
    });
    //Modificando estilos de la ul para quitar vinetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#1F0802"
    //Mostrando elementos de lista en forma de fila 
}

//Invocando la funcion 
createUser(user);

/*
Eventos para actualizar el username mediante el input y el boton
*/
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value; 
})