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

        console.log(response);
    } catch (err) {
        console.log(err);
    }
};
