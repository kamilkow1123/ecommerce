import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import Navbar from "../navigation/Navbar";
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

    console.log(products);

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.product.id}>
                    <p>{product.product.product_name}</p>
                    <p>{product.product.product_price}</p>
                    <p>{product.quantity}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <Navbar />
            <h1>Cart</h1>
            {renderProducts()}
        </div>
    );
};

export default Cart;
