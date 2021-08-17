import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../state/actions/auth";
import { State } from "../state/reducers";
import Navbar from "./navigation/Navbar";
import ProductsList from "./products/ProductsList";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.auth["user"]);

    useEffect(() => {
        if (!user) {
            dispatch(loadUser());
        }
    });

    return (
        <div>
            <Navbar />
            <ProductsList />
        </div>
    );
};

export default Home;
