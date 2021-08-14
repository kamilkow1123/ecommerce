import { ActionType } from "../actions/types";

const INITIAL_STATE = {
    listOfProducts: [],
    numOfProducts: 0,
    currentPost: null,
};

const productsReducer = (state = INITIAL_STATE, action: any) => {
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
