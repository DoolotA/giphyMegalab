import axios from "axios"
import {RANDOM} from './types'

export const getRandoming = () => {
    return async dispatch => {
        try {
            const url = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=UxxNJpDjQGUDIKXSj3fUxwAU6wUOAyBA&tag=&rating=g`);

            dispatch({type: RANDOM, payload: url.data})
        } catch (error) {
            console.log(error)
        }
    }
}


const initialState = {
    data: []
}

export const RandomReducer = (state = initialState, action) => {
    switch(action.type) {
        case RANDOM:
        
            return {...state.data,
                data: action.payload.data
            }
        default:
            return state
    }
} 