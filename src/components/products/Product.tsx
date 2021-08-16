import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//action creators
import { fetchProduct } from "../../state/actions/products";
//types
import { State } from "../../state/reducers";
import Navbar from "../navigation/Navbar";

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const product = useSelector(
        (state: State) => state.products.currentProduct
    );

    useEffect(
        () => {
            dispatch(fetchProduct(id));
        },
        [ dispatch, id ]
    );

    return !product ? null : (
        <div>
            <Navbar />
            <h1>{product.product_name}</h1>
            <p>{product.product_price}</p>
            <p>{product.detail_description}</p>
        </div>
    );
};

export default Product;
