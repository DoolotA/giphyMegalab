import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RandomReducer } from "./Randoming";
import { TrandingReducer } from "./tranding";
import { CategoriesReducer } from "./categoriesReducer";

const rootReducer = combineReducers({
    trands: TrandingReducer,
    randoms: RandomReducer,
    CategoriesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

