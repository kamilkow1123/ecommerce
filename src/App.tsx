import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import Product from "./components/products/Product";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/" component={Home} />
                <Route exact path="/:page" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
