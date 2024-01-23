const baseEndpoint = "https://api.github.com"; //Comillas dobles
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); //Se selecciona la clase, no el id
const $b = document.querySelector(".blog"); //comillas dobles
const $l = document.querySelector(".location");

async function displayUser(username) { //funcion async
 try { //Try  
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = response.json(); //Convertimos la respuesta en formato json
  data.then((data) =>{
  console.log(data);
  $n.textContent = `${data.name}`; //se usan backtics ``
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  });
} catch (error) { //Try-catch, definimos ek mensaje de error
    handleError(error);
}
}

function handleError(err) {
  console.log("OH NO!"); //Comilla doble para el string
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski'); //Se elimina el catch de esta linea