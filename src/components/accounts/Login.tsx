import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../state/actions/auth";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";

const Login = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state: State) => state.auth["error"]);
    const isAuthenticated = useSelector(
        (state: State) => state.auth["isAuthenticated"]
    );
    const [ error, setError ] = useState("");

    useEffect(
        () => {
            if (errorMessage !== "") {
                setError("Details do not match!");
            }
        },
        [ errorMessage ]
    );

    const Login = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        dispatch(login(email, password));
    };

    return (
        <div>
            {!isAuthenticated ? (
                <div className="auth">
                    <Link
                        to="/"
                        className="auth__back-button auth__back-button--login"
                    >
                        <FaArrowLeft style={{ fill: "#fff" }} />
                        back
                    </Link>
                    <LoginForm Login={Login} error={error} />
                </div>
            ) : (
                <Redirect to="/" />
            )}
        </div>
    );
};

export default Login;
