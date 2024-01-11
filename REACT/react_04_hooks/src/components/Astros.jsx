import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Mandar a llamar la API, utilizando Hooks (useState y useEffect)
//Componente para agregar  la informacion de la API Astros dentro de las cards
const Astros = ()=>{
//Definir la url de la API
    const ASTROS_URL = 'http://api.open-notify.org/astros.json';

//Implementando useState
    const[astros, setAstros] = useState([]);

//Implementando useEffect

    useEffect(()=>{
        fetchAstros(); //Hoisting de una funion que voy a definir
     }, []);

//Crear funcion fetch para conectarse a la API
const fetchAstros = ()=> {
    fetch(ASTROS_URL)
        .then(response => response.json())
        .then(data => setAstros(data.people)) //Para que la informacion viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
        .catch (error => console.log (error))
}

    console.log(astros); //vive en consola del navegador 

    //Enviar la informacion de la API a las cards utilizando .map sobre el array `astros`

    return(
        <>
            {
                //Astro funciona como los elementos que se recorren en el array `astros` y .map recibe dichos elementos, mas un index y una funcion tipo callback
                astros.map((astro, index)=>(
                //Exporto el componente Astro
                //Crear una llave unica para cada elemento del array (key)
                //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                <Astro key={index} {...astro}/>
                ))
            }

        </>
    )
}

export default Astros