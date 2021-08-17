import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    Login: (details: { username: string; password: string }) => void;
    error: string;
};

const LoginForm: React.FC<Props> = ({ Login, error }) => {
    const [ details, setDetails ] = useState<{
        username: string;
        password: string;
    }>({ username: "", password: "" });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        Login(details);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <h2>Login</h2>
            {error !== "" ? (
                <div className="form__error-login">{error}</div>
            ) : (
                ""
            )}
            <div className="form__group">
                <label className="form__group__label" htmlFor="form-username">
                    Username
                </label>
                <input
                    className="form__group__input"
                    type="text"
                    name="username"
                    id="username"
                    onChange={e =>
                        setDetails({ ...details, username: e.target.value })}
                    value={details.username}
                />
            </div>
            <div className="form__group">
                <label className="form__group__label" htmlFor="password">
                    Password:
                </label>
                <input
                    className="form__group__input"
                    type="password"
                    name="password"
                    id="password"
                    onChange={e =>
                        setDetails({
                            ...details,
                            password: e.target.value,
                        })}
                    value={details.password}
                />
            </div>
            <input
                className="form__submit-button"
                type="submit"
                value="LOGIN"
            />
            <p>
                Don't have an account?
                <Link className="form__signup-button" to="/signup">
                    Sign Up
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
