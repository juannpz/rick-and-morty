/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getCharacterDetailAxios, cleanDetail } from "../redux/actions"

const useCharacter = () => {

    //defino el dispatch para utilizarlo donde guste    
    const dispatch = useDispatch()

    const {id} = useParams()

    const characterDetail = useSelector((state) => state.characterDetail)
    // accedo al estado global y guardo su characterDetail en una const nueva
    const myFavorites = useSelector((state) => state.myFavorites)

    // useEffect recibe como primer parámetro una callback que se ejecuta cuando el componente se monta. En este caso lo que se ejecuta en el "onMount" o "componentDidMount" es el dispatch de getCharacterDetail, la cual es una action creator asíncrona que me trae la data de la API. 
    // en segundo lugar, recibe el array de dependencias. Este indica que se debe volver a ejecutar el callback cuando el valor de uno de sus elemtntos cambie. En este caso lo que quiero es que el dispatch se ejecute y traiga la data del character cada vez que el id cambia.
    // en tercer lugar, está el return interno que va a ejecutar lo qwue tenga dentro cuando el componente se desmonte. En este caso, lo que hago es vaciar el objeto characterDetail del estado global, realizando un dispatch del action creator cleanDetail.
    // useEffect con array de dependencias vacío => componentDidMount
    // useEffect con elementos dentro del array de dep. => componentDidUpdate
    // useEffect con un return que haga cosas => componentWillUnmount
    useEffect(() => {
        dispatch(getCharacterDetailAxios(id))

        return () => {
            dispatch(cleanDetail())
        }


    }, [id])

    // retorno las variables que necesite para poder utilizarlas desde cualquier otro lugar. Reocordando que characterDetail tiene el contenido traído de characterDetail del objeto global. Lo mismo con myFavorites. Puedo retornar un solo valor o, como en este caso, un objeto con los las nuevas variables que traen los datos del objeto global. 
    return {
        characterDetail,
        myFavorites,
    }
}

export default useCharacter