import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav'
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   //* declaro  un estado, con valor inicial [] --> array vacío, que retorna un arreglo con dos elementos. El primero es el nombre del estado con su valor inicial y el segundo es el modificador de estado --> setCharacters
   const [characters, setCharacters] = useState([])

   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const email = "ejemplo@gmail.com"
   const password = "123456"

   const login = (userData) => {
      if (userData.password === password && userData.email === email) {
      setAccess(true)
      navigate("/home")
      }
   }
   
   useEffect(() => {
      !access && navigate("/")
   }, [access, navigate])

   const onClose = (id) => {
      let filteredChars = characters.filter(e => {return e.id !== id})
      setCharacters(filteredChars)
   }

   const onSearch = (id) => {
      // Verificar si el personaje ya está siendo mostrado
      const isCharacterShown = characters.some((e) => e.id === id)
      if (isCharacterShown) alert('El personaje ya está siendo mostrado')
      else {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               const characterExists = characters.find((character) => character.id === data.id)
               if (!characterExists) setCharacters((oldChars) => [...oldChars, data])
               else alert('El personaje ya está siendo mostrado')
            }
         })
         .catch((error) => {
            alert('No hay personajes con ese id');
            console.error(error);
          })
      }
   }

   return (
      <div className={styles.App}>
         <div className={styles.titleContainer}>
            <h1>RICK AND MORTY</h1>
         </div>
         {location.pathname !== "/" &&  <Nav onSearch={onSearch}/>}
        
         <Routes>
            <Route
               path= '/home'
               element= {<Home
                  onClose= {onClose}
                  characters= {characters}/>}
            />
            <Route
               path= '/'
               element= {<Form login= {login}/>}
            />
            <Route
               path= '/about'
               element= {<About/>}
            />
            <Route
               path= '/detail/:id'
               element= {<Detail/>}
            />
            <Route
               path= '/create'
               element= {<Form/>}
            />
            <Route
               path= '/favorites'
               element= {<Favorites/>}
            />
         </Routes>
      </div>
   );
}  

export default App;