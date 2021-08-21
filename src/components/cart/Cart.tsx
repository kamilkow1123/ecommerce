import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//action creators
import { fetchCartProducts } from "../../state/actions/cart";
//types
import { State } from "../../state/reducers";
import { IProduct } from "../../state/reducers/productsReducer";

const Cart = () => {
    const dispatch = useDispatch();

    const products = useSelector(
        (state: State) => state.cart.listOfCartProducts
    );

    useEffect(
        () => {
            dispatch(fetchCartProducts());
        },
        [ dispatch ]
    );

    const renderProducts = () => {
        return products.map(({ product }: { product: IProduct }) => {
            return (
                <div key={product.id}>
                    <p>{product.product_name}</p>
                    <p>{product.product_price}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>Cart</h1>
            {renderProducts()}
        </div>
    );
};

export default Cart;
