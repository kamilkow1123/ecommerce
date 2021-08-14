import resultsAPI from "../../api/resultsAPI";
//types
import { Dispatch } from "redux";
import { ActionType } from "./types";

export const fetchProducts = (page: number) => async (dispatch: Dispatch) => {
    if (!page) page = 1;

    try {
        const response = await resultsAPI.get(`/product/list?page=${page}`);
        // console.log(response.data);

        dispatch({ type: ActionType.FETCH_PRODUCTS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};
