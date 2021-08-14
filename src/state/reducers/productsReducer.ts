import { Action } from "../actions";
import { ActionType } from "../actions/types";

export interface IProduct {
    product_name: string;
    product_price: number;
    categories: string[];
}

const INITIAL_STATE = {
    listOfProducts: [] as IProduct[],
    numOfProducts: 0 as number,
    currentPost: null as IProduct | null,
};

const productsReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
            return {
                ...state,
                listOfProducts: action.payload.results,
                numOfProducts: action.payload.count,
            };
        default:
            return state;
    }
};

export default productsReducer;
