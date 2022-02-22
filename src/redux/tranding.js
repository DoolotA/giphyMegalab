import axios from "axios"

export const getTranding = () => {
    return async dispatch => {
        try {
            const url = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=UxxNJpDjQGUDIKXSj3fUxwAU6wUOAyBA&limit=25&rating=g`);

            dispatch({type: "TRANDS", payload: url.data})
        } catch (error) {
            console.log(error)
        }
    }
}


const initialState = {
    data: []
}

export const TrandingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TRANDS":
        
            return {...state.data,
                data: action.payload.data
            }
        default:
            return state
    }
} 