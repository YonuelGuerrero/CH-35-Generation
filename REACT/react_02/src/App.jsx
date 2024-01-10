import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'


function App() {
  
  const imgfasion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"


 return (
    <>
      <Navbar/>
      <Main/>
      <Button label='Traer informacion'/>
      <Button label='Enviar informacion'/>
      <Button label='Combinar informacion'/>
      <Products
      img={imgfasion}
      name="Fashion"
      description="Tennis Fitness Running Purple"
      price="$1958"
      />

      <Products 
      img={imgDark}
      name="Dark"
      description="Tennis Dark Running"
      price="$2296"
      />

      <Products
      img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
      name="Camel"
      description="Casual tennis"
      price="$3431"
      />

    </>
  )
}

export default App
