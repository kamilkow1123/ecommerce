import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/actions/products";
//types
import { State } from "../../state/reducers";

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(
        (state: State) => state.products.listOfProducts
    );

    useEffect(() => {
        dispatch(fetchProducts(1));
    }, []);

    console.log(products);

    return (
        <div>
            <h1>List</h1>
            {products.map((product: any, index: number) => {
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
