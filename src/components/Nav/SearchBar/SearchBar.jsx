import { useState } from "react";
import styles from './SearchBar.module.css'

 const SearchBar = (props) => {

   const [id, setId] = useState("")
   const handleChange = (event) => {
      console.log("funca", event.target.value);
      setId(event.target.value)
   }

   return (
      <div className={styles.addContainer}>
         <input className={styles.StyledInput}  

            onChange={handleChange}
            value={id} 
            placeholder="ingresa el id del pj"/>
         <button className={styles.StyledButton}
            onClick={() => props.onSearch(id)}>Agregar
         </button>
      </div>
   );
}

export default SearchBar
