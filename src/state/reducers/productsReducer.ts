import { Action } from "../actions";
import { ActionType } from "../actions/types";

export interface IProduct {
    id: number;
    product_name: string;
    product_price: string;
    categories: string[];
    accession_number?: string;
    availability?: number;
    detail_description?: string;
    product_condition?: string;
    shipping_cost?: string;
}

const INITIAL_STATE = {
    listOfProducts: [] as IProduct[],
    numOfProducts: 0 as number,
    currentProduct: null as IProduct | null,
};

const productsReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
            return {
                ...state,
                listOfProducts: action.payload.results,
                numOfProducts: action.payload.count,
            };
        case ActionType.FETCH_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload,
            };
        default:
            return state;
    }
};

export default productsReducer;
