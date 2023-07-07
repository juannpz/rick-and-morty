
// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
import styles from "./detail.module.css"
// import { cleanDetail, getCharacterDetailAxios, getCharacterDetailFetch } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux"
import useCharacter from "../../hooks/hooks"

const Detail = () => {

    // const [character, setCharacter] = useState({})

    const character = useCharacter().characterDetail

    // useEffect(() => {
        // axios(`https://rickandmortyapi.com/api/character/${id}`)
        // .then(({ data }) => {
        //    if (data.name) {
        //       setCharacter(data);
        //    } else {
        //       window.alert('No hay personajes con ese ID');
        //    }
        // });
        // return setCharacter({});

    //  }, [id])


    return (
        <div>
            <h3>Nombre: {character.name && character.name}</h3>
             <img src={character.image} alt= {character.name}/>
             <h5></h5> 
             <section className={styles.section}> 
                <span>Estatus: {character.status ? character.status : "data not found"}</span>
                <span>Especie: {character.species && character.species}</span>
                <span>Genero: {character.gender && character.gender}</span>
                <span>origen: {character.origin ? character.origin.name : "data not found"}</span>
                
            </section>
        </div>
    )
}

export default Detail