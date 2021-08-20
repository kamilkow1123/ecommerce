import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
