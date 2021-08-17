import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    SignUp: (details: any) => void;
    errors: any;
};

const SignUpForm: React.FC<Props> = ({ SignUp, errors }) => {
    const [ details, setDetails ] = useState<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string;
        password: string;
        re_password: string;
    }>({
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        re_password: "",
    });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        SignUp(details);
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <h2>SignUp</h2>

            <div className="form__group">
                <label className="form__group__label" htmlFor="email">
                    Email:
                </label>
                <input
                    className="form__group__input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={e =>
                        setDetails({ ...details, email: e.target.value })}
                    value={details.email}
                />
                {errors.email && (
                    <p className="form__error-SignUp">{errors.email}</p>
                )}
            </div>
            <div className="form__group">
                <label className="form__group__label" htmlFor="first_name">
                    First Name:
                </label>
                <input
                    className="form__group__input"
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={e =>
                        setDetails({
                            ...details,
                            first_name: e.target.value,
                        })}
                    value={details.first_name}
                />
                {errors.first_name && (
                    <p className="form__error-SignUp">{errors.first_name}</p>
                )}
            </div>
            <div className="form__group">
                <label className="form__group__label" htmlFor="last_name">
                    Last Name:
                </label>
                <input
                    className="form__group__input"
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={e =>
                        setDetails({
                            ...details,
                            last_name: e.target.value,
                        })}
                    value={details.last_name}
                />
                {errors.last_name && (
                    <p className="form__error-SignUp">{errors.last_name}</p>
                )}
            </div>
            <div className="form__group">
                <label className="form__group__label" htmlFor="phone">
                    Phone number:
                </label>
                <input
                    className="form__group__input"
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={e =>
                        setDetails({ ...details, phone: e.target.value })}
                    value={details.phone}
                />
                {errors.phone && (
                    <p className="form__error-SignUp">{errors.phone}</p>
                )}
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
                {errors.password && (
                    <p className="form__error-SignUp">{errors.password}</p>
                )}
            </div>
            <div className="form__group">
                <label className="form__group__label" htmlFor="re_password">
                    Confirm Password:
                </label>
                <input
                    className="form__group__input"
                    type="password"
                    name="re_password"
                    id="re_password"
                    onChange={e =>
                        setDetails({
                            ...details,
                            re_password: e.target.value,
                        })}
                    value={details.re_password}
                />
                {errors.re_password && (
                    <p className="form__error-SignUp">{errors.re_password}</p>
                )}
            </div>
            <input
                type="submit"
                value="SignUp"
                className="form__submit-button"
            />
            <p>
                Already have an account?
                <Link className="form__SignUp-button" to="/login">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default SignUpForm;
