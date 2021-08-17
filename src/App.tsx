import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import Product from "./components/products/Product";
import Login from "./components/accounts/Login";
import SignUp from "./components/accounts/SignUp";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/" component={Home} />
                <Route exact path="/:page" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
