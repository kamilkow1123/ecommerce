import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <Link to="/" className="nav__item">
                    Home
                </Link>
                <Link to="/" className="nav__item">
                    <FaShoppingCart />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
