import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
    products: productsReducer,
    auth: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
