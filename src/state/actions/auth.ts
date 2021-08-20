import { ActionType } from "./types";
import resultsAPI from "../../api/resultsAPI";
import { Dispatch } from "redux";
import { Action } from ".";
import { State } from "../reducers";
import history from "../../history";
import { IDetails } from "../../components/accounts/SignUpForm";

//check token & load user
export const loadUser = () => async (
    dispatch: Dispatch<Action>,
    getState: () => State
) => {
    //User Loading
    dispatch({ type: ActionType.USER_LOADING });

    try {
        const response = await resultsAPI.get(
            "/auth/users/me/",
            tokenConfig(getState)
        );

        // console.log(response);

        dispatch({
            type: ActionType.USER_LOADED,
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ActionType.AUTH_ERROR,
        });
    }
};

//login user
export const login = (email: string, password: string) => async (
    dispatch: Dispatch<Action>
) => {
    //headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    //Request body
    const body = JSON.stringify({ email, password });

    try {
        const response = await resultsAPI.post(
            "/auth/token/login/",
            body,
            config
        );

        // console.log(response.data);

        dispatch({
            type: ActionType.LOGIN_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ActionType.LOGIN_FAIL,
        });
    }
};

//signUp user
export const signUp = (details: IDetails) => async (
    dispatch: Dispatch<Action>
) => {
    //headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    //Request body
    const body = JSON.stringify(details);

    try {
        await resultsAPI.post("/auth/users/", body, config);

        dispatch({
            type: ActionType.SIGNUP_SUCCESS,
        });
        history.push("/login");
    } catch (err) {
        console.log(err.response.data);
        dispatch({
            type: ActionType.SIGNUP_FAIL,
            payload: err.response.data,
        });
    }
};

// LOGOUT
export const logout = () => async (
    dispatch: Dispatch<Action>,
    getState: () => State
) => {
    try {
        await resultsAPI.post(
            "/auth/token/logout/",
            null,
            tokenConfig(getState)
        );

        dispatch({
            type: ActionType.LOGOUT_SUCCESS,
        });
    } catch (err) {
        console.log(err);
    }
};

//setup config with token - helper function
export const tokenConfig = (getState: () => State) => {
    //get token from state
    const token = getState().auth["auth_token"];

    //headers
    const config: { headers: { [key: string]: string } } = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    //if token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};
