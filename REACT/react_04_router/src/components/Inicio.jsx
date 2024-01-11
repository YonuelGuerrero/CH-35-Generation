import { Link } from "react-router-dom"

const Inicio = () =>{
    return (
        <>
        <div>
            <h1>Esta es la pagina de inicio</h1>
            <Link to= "Nosotros">
            Presiona aqui para ir a la pagina Sobre Nosotros
            </Link>
            <br/>
            <Link to="Contacto">
                Presiona aqui para ir a la pagina Contacto
            </Link>
        </div>
        </>
    )
}

export default Inicio