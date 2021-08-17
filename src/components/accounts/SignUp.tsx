import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../../state/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { State } from "../../state/reducers";

const SignUp = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state: State) => state.auth.error);
    const isAuthenticated = useSelector(
        (state: State) => state.auth.isAuthenticated
    );
    const [ errors, setErrors ] = useState({});

    useEffect(
        () => {
            if (errorMessage !== "") {
                let tempErrors: any = {};

                for (let newError in errorMessage) {
                    if (newError === "non_field_errors") {
                        tempErrors["re_password"] = errorMessage[newError];
                    } else {
                        tempErrors[newError] = errorMessage[newError];
                    }
                }
                setErrors(tempErrors);
            }
        },
        [ errorMessage ]
    );

    const SignUp = (details: any) => {
        dispatch(signUp(details));
    };

    return (
        <div>
            {!isAuthenticated ? (
                <div className="login">
                    <Link to="/" className="login__back-button">
                        <span>
                            <FaArrowLeft />
                        </span>{" "}
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
