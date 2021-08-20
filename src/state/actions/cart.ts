import resultsAPI from "../../api/resultsAPI";
import { tokenConfig } from "./auth";
//types
import { Dispatch } from "redux";
import { ActionType } from "./types";
import { Action } from ".";
import { State } from "../reducers";

export const fetchCartProducts = () => async (
    dispatch: Dispatch<Action>,
    getState: () => State
) => {
    try {
        const response = await resultsAPI.get("/cart", tokenConfig(getState));

        // console.log(response.data);
        dispatch({
            type: ActionType.FETCH_CART_PRODUCTS,
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const addToCart = (id: number) => async (
    dispatch: Dispatch<Action>,
    getState: () => State
) => {
    try {
        console.log(tokenConfig(getState));
        const response = await resultsAPI.post(
            `/cart/cartitem/${id}/`,
            null,
            tokenConfig(getState)
        );

        // console.log(response);

        dispatch({
            type: ActionType.ADD_TO_CART,
        });
    } catch (err) {
        console.log(err);
    }
};
