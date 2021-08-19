import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import { logout } from "../../state/actions/auth";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state: State) => state.auth["isAuthenticated"]
    );

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <Link to="/" className="nav__item">
                    Home
                </Link>
                <div className="nav__items">
                    {!isAuthenticated ? (
                        <React.Fragment>
                            <Link to="/login" className="nav__item">
                                Login
                            </Link>
                            <Link to="/signup" className="nav__item">
                                Sign Up
                            </Link>
                        </React.Fragment>
                    ) : (
                        <button className="nav__item" onClick={handleLogout}>
                            Logout
                        </button>
                    )}

                    <Link to="/cart" className="nav__item">
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
