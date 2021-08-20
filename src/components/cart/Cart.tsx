import { useEffect } from "react";
import { useDispatch } from "react-redux";
//action creators
import { fetchCartProducts } from "../../state/actions/cart";

const Cart = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchCartProducts());
        },
        [ dispatch ]
    );

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;
