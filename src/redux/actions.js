import axios from "axios"

const ADD_FAV = "ADD_FAV"
const REMOVE_FAV = "REMOVE_ADD"
const GET_CHARACTER_DETAIL_AXIOS = "GET_CHARACTER_DETAIL_AXIOS"
const GET_CHARACTER_DETAIL_FETCH = "GET_CHARACTER_DETAIL_FETCH"
const CLEAN_DETAIL = "CLEAN_DETAIL"
const FILTER = "FILTER"
const ORDER = "ORDER"

const addFav = (char) => {
    return {
        type: ADD_FAV,
        payload: char,
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

const getCharacterDetailAxios = (id) => {
    return (dispatch) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data}) => dispatch({ type: GET_CHARACTER_DETAIL_AXIOS, payload: data}))
    }
}


const getCharacterDetailFetch = (id) => {
    return (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_CHARACTER_DETAIL_FETCH, payload: data}))
    }
}

const cleanDetail = () => {
    return {type: CLEAN_DETAIL}
}

const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order  
    }
}

export {
    ADD_FAV,
    REMOVE_FAV,
    addFav,
    removeFav,
    getCharacterDetailAxios,
    getCharacterDetailFetch,
    GET_CHARACTER_DETAIL_AXIOS,
    GET_CHARACTER_DETAIL_FETCH,
    CLEAN_DETAIL,
    cleanDetail,
    ORDER,
    FILTER,
    orderCards,
    filterCards,
}
