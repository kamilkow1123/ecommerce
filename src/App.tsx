import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:page" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
