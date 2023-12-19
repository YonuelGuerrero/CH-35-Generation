const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex: expresiones regulares. Determinan patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Desabilitar el botomn
submitButton.disabled= true;

/*evento para input,   el cual, evaluara el patron de expresion regular y en caso de cumplir con  el patronn, habilitara el button y podremos ser redirigidos a la pagina de index.html
-se obtiene el valor actual del campo email (input) usand e.target.value y se almacena en una variable (text)
-se evalua la regex
*/
emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if(emailREGEX.test(text)== true){
        submitButton.disabled = false;
    }
})