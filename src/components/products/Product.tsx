import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//action creators
import { fetchProduct } from "../../state/actions/products";

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    useEffect(
        () => {
            console.log("fetching");
            dispatch(fetchProduct(id));
        },
        [ dispatch, id ]
    );

    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    );
};

export default Product;
