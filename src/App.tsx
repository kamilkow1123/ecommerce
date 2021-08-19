import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import Home from "./components/Home";
import Product from "./components/products/Product";
import Login from "./components/accounts/Login";
import SignUp from "./components/accounts/SignUp";
import { loadUser } from "./state/actions/auth";
import Cart from "./components/cart/Cart";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    });

    return (
        <Router>
            <Switch>
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/" component={Home} />
                <Route exact path="/:page" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;
