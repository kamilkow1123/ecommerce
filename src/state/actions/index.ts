import { IErrorMessage } from "../../components/accounts/SignUp";
import { IUser } from "../reducers/authReducer";
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
    payload?: IUser;
}

interface loginAction {
    type: ActionType.LOGIN_SUCCESS | ActionType.LOGIN_FAIL;
    payload?: {
        auth_token: string;
    };
}

interface signUpAction {
    type: ActionType.SIGNUP_SUCCESS | ActionType.SIGNUP_FAIL;
    payload?: IErrorMessage;
}

interface logoutAction {
    type: ActionType.LOGOUT_SUCCESS;
}

interface fetchCartProductsAction {
    type: ActionType.FETCH_CART_PRODUCTS;
    payload: any;
}

interface addToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: any;
}

interface deleteFromCartAction {
    type: ActionType.DELETE_FROM_CART;
    payload: any;
}

export type Action =
    | fetchProductsAction
    | fetchProductAction
    | loadUserAction
    | loginAction
    | signUpAction
    | logoutAction
    | fetchCartProductsAction
    | addToCartAction
    | deleteFromCartAction;
