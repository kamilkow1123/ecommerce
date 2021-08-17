import { IProduct } from "../reducers/productsReducer";
import { ActionType } from "./types";

interface fetchProductsAction {
    type: ActionType.FETCH_PRODUCTS;
    payload: {
        count: number;
        next: string;
        results: IProduct[];
    };
}

interface fetchProductAction {
    type: ActionType.FETCH_PRODUCT;
    payload: IProduct;
}

interface loadUserAction {
    type:
        | ActionType.USER_LOADING
        | ActionType.USER_LOADED
        | ActionType.AUTH_ERROR;
    payload?: any;
}

interface loginAction {
    type: ActionType.LOGIN_SUCCESS | ActionType.LOGIN_FAIL;
    payload?: any;
}

interface signUpAction {
    type: ActionType.SIGNUP_SUCCESS | ActionType.SIGNUP_FAIL;
    payload?: any;
}

interface logoutAction {
    type: ActionType.LOGOUT_SUCCESS;
}

export type Action =
    | fetchProductsAction
    | fetchProductAction
    | loadUserAction
    | loginAction
    | signUpAction
    | logoutAction;
