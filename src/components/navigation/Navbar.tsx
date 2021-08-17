import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <Link to="/" className="nav__item">
                    Home
                </Link>
                <div className="nav__items">
                    <Link to="/login" className="nav__item">
                        Login
                    </Link>
                    <Link to="/signup" className="nav__item">
                        Sign Up
                    </Link>
                    <Link to="/" className="nav__item">
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
