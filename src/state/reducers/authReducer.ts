import { Action } from "../actions";
import { ActionType } from "../actions/types";

export interface IUser {
    first_name: string;
    last_name: string;
    phone: string;
    id: number;
    email: string;
}

const INITIAL_STATE = {
    auth_token: localStorage.getItem("auth_token") as string,
    isAuthenticated: false as boolean,
    isLoading: false as boolean,
    user: null as IUser | null,
    error: "" as string | string[],
};

const authReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionType.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ActionType.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
                error: "",
            };
        case ActionType.LOGIN_SUCCESS:
            if (action.payload)
                localStorage.setItem("auth_token", action.payload.auth_token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                error: "",
            };
        case ActionType.AUTH_ERROR:
        case ActionType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth_token");
            return {
                ...state,
                auth_token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: "",
            };
        case ActionType.LOGIN_FAIL:
            localStorage.removeItem("auth_token");
            return {
                ...state,
                auth_token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: "Details do not match!",
            };
        case ActionType.SIGNUP_FAIL:
            localStorage.removeItem("auth_token");
            return {
                ...state,
                auth_token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload,
            };
        case ActionType.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null,
                error: "",
            };
        default:
            return state;
    }
};

export default authReducer;
