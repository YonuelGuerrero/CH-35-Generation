import './App.css'
import axios from 'axios'

function App() {
    //Funcion async-await para consumir API
      const getUsers = async () => {
        try{
          const response = await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log(response);
        } catch(error){
          console.log("peligraaa", error);
        }
      }

      //Funcion async-await para enviar un usuario 
      const postUser = async () => {
        try{
          const url = "https://jsonplaceholder.typicode.com/posts";
          const user = {
            userId: 1986,
            title: "Java fullstack dev",
            body: "Daniel Maldonado"
          }
          const response = await axios.post(url, user);
          console.log(response);
        } catch (error){
          console.log("cuidaditaaa", error);
        }
      }

  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
