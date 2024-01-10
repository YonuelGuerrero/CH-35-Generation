import './Navbar.css' //Importacion de css

//Crear funcion que contiene el marcado para que viva nuestro codigo 
const Navbar = ()=> {
    return (
        <> {/*Fragmento (el comentario debe ser multilinea y estar encerrado entre llaves)*/}
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>GenMex-35</h1>
            </div>
            <div className='navbar--links'>
                <div className="navbar--link">
                    <a href=''>Home</a>
                </div>
                <div className="navbar--link">
                    <a href=''>About</a>
                </div>
                <div className="navbar--link">
                    <a href=''>Astros API</a>
                </div>

            </div>
        </div>
        </>
    )
}

export default Navbar;