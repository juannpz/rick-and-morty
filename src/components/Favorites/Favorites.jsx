import { useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from './Favorites.module.css'

const Favorites = () => {       

    const favorites = useSelector(state=>state.myFavorites)

    return (
        <div className={styles.favsContainer}>
            {favorites.map(({id, name, species, gender, image}) => {
                return (
                    <Card
                        id= {id}
                        key= {id}
                        name={name}
                        species={species} 
                        gender={gender}
                        status={status}
                        image={image}
                        origin={origin.name}
                    />
                )
            })}
        </div>
    )
}

export default Favorites