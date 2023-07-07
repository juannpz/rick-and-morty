import { ADD_FAV, CLEAN_DETAIL, GET_CHARACTER_DETAIL_AXIOS, GET_CHARACTER_DETAIL_FETCH, REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: [],
    characterDetail: {},
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return {...state}

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                  )
            }

        case GET_CHARACTER_DETAIL_AXIOS:
            return {
                ...state,
                characterDetail: action.payload,
            }

        case GET_CHARACTER_DETAIL_FETCH:
             return {
                 ...state,
                characterDetail: action.payload,
             }

        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {}
            } 
        
    }
}

export default reducer