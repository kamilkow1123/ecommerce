import { useState, useEffect } from "react";
import SignUpForm, { IDetails } from "./SignUpForm";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../../state/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { State } from "../../state/reducers";

export interface IErrorMessage {
    email?: string[];
    first_name?: string[];
    last_name?: string[];
    password?: string[];
    re_password?: string[];
    non_field_errors?: string[];
}

const SignUp = () => {
    const dispatch = useDispatch();
    const errorMessage: IErrorMessage = useSelector(
        (state: State) => state.auth["error"]
    );
    const isAuthenticated = useSelector(
        (state: State) => state.auth["isAuthenticated"]
    );
    const [ errors, setErrors ] = useState({});

    useEffect(
        () => {
            if (errorMessage !== "") {
                let tempErrors: { [key: string]: string[] } = {};
                for (let newError in errorMessage) {
                    if (newError === "non_field_errors") {
                        tempErrors["re_password"] = errorMessage[newError] ?? [''];
                    } else {
                        tempErrors[newError as keyof IErrorMessage] = errorMessage[newError as keyof IErrorMessage] ?? [''];
                    }
                }
                setErrors(tempErrors);
            }
        },
        [ errorMessage ]
    );

    const SignUp = (details: IDetails) => {
        dispatch(signUp(details));
    };

    return (
        <div>
            {!isAuthenticated ? (
                <div className="auth">
                    <Link to="/" className="auth__back-button">
                        <FaArrowLeft style={{ fill: "#fff" }}/>
                        back
                    </Link>
                    <SignUpForm SignUp={SignUp} errors={errors} />
                </div>
            ) : (
                <Redirect to="/" />
            )}
        </div>
    );
};

export default SignUp;
