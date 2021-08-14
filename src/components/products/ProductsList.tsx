import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../state/actions/products";

const ProductsList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(1));
    }, []);

    return (
        <div>
            <h1>List</h1>
        </div>
    );
};

export default ProductsList;
