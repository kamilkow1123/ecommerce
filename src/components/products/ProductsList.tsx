import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../state/actions/products";
//types
import { State } from "../../state/reducers";
import { IProduct } from "../../state/reducers/productsReducer";

const ProductsList = () => {
    const { page } = useParams<{ page: string }>();
    const dispatch = useDispatch();
    const products = useSelector(
        (state: State) => state.products.listOfProducts
    );

    useEffect(
        () => {
            dispatch(fetchProducts(page));
        },
        [ page ]
    );

    return (
        <div>
            <h1>List</h1>
            {products.map((product: IProduct, index: number) => {
                return (
                    <div key={index}>
                        <p>{product.product_name}</p>
                        <p>{product.product_price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;
