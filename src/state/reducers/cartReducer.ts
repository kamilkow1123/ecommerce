import { Action } from "../actions";
import { ActionType } from "../actions/types";
import { IProduct } from "./productsReducer";

const INITIAL_STATE = {
    listOfCartProducts: [] as IProduct[],
    totalCartPrice: 0 as number,
    numOfCartProducts: 0 as number,
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_CART_PRODUCTS:
            return {
                ...state,
                listOfCartProducts: action.payload.products,
                totalCartPrice: action.payload.get_cart_total,
                numOfCartProducts: action.payload.get_products_quantity,
            };
        case ActionType.ADD_TO_CART:
            return {
                ...state,
                totalCartPrice: action.payload.get_cart_total,
                numOfCartProducts: action.payload.get_products_quantity,
            };
        case ActionType.DELETE_FROM_CART:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default cartReducer;
