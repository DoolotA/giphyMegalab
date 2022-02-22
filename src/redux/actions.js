import { CATEGORY_GET, CATEGORY_INSIDE, NULL_CATEGORY, } from "./types";
const keyUrl = "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh";


export const category_geta = () => {
    return async dispatch => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${keyUrl}&rating=g`);
            const jsonData = await response.json();
            dispatch({
                type: CATEGORY_GET,
                data: jsonData.data,
            })
        } catch (err) {
            alert(err)
        }
    }
}


export const nullCategory = () => {
    return{
        type: NULL_CATEGORY
    }
}

export const category_inside = (name, counter) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${keyUrl}&q=${name}&limit=${counter}&offset=${counter}&rating=g&lang=en`);
            const jsonData = await response.json();
            dispatch({
                type: CATEGORY_INSIDE,
                data: jsonData.data,
                name: name
            })
        } catch (err) {
            alert(err)
        }
    }
}
