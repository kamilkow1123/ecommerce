import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    Login: (details: { email: string; password: string }) => void;
    error: string;
};

const LoginForm: React.FC<Props> = ({ Login, error }) => {
    const [ details, setDetails ] = useState<{
        email: string;
        password: string;
    }>({ email: "", password: "" });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        Login(details);
    };

    return (
        <form onSubmit={submitHandler} className="auth-form">
            <h2>Login</h2>
            {error !== "" ? (
                <div className="auth-form__error-login">{error}</div>
            ) : (
                ""
            )}
            <div className="auth-form__group">
                <label className="auth-form__group__label" htmlFor="form-email">
                    E-mail
                </label>
                <input
                    className="auth-form__group__input"
                    type="text"
                    name="email"
                    id="email"
                    onChange={e =>
                        setDetails({ ...details, email: e.target.value })}
                    value={details.email}
                />
            </div>
            <div className="auth-form__group">
                <label className="auth-form__group__label" htmlFor="password">
                    Password:
                </label>
                <input
                    className="auth-form__group__input"
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
                className="auth-form__submit-button"
                type="submit"
                value="LOGIN"
            />
            <p>
                Don't have an account?
                <Link className="auth-form__signup-button" to="/signup">
                    Sign Up
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
