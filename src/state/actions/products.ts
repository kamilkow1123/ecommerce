import resultsAPI from "../../api/resultsAPI";
//types
import { Dispatch } from "redux";
import { ActionType } from "./types";
import { Action } from ".";

export const fetchProducts = (page: string) => async (
    dispatch: Dispatch<Action>
) => {
    if (!page) page = "1";

    try {
        const response = await resultsAPI.get(`/product/list?page=${page}`);
        // console.log(response.data);

        dispatch({ type: ActionType.FETCH_PRODUCTS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

export const fetchProduct = (id: string) => async (
    dispatch: Dispatch<Action>
) => {
    try {
        const response = await resultsAPI.get(`/product/${id}`);
        // console.log(response.data);

        dispatch({ type: ActionType.FETCH_PRODUCT, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};
