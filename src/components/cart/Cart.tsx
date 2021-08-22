import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import Navbar from "../navigation/Navbar";
//action creators
import { fetchCartProducts } from "../../state/actions/cart";
import { addToCart } from "../../state/actions/cart";
//types
import { State } from "../../state/reducers";
import { IProduct } from "../../state/reducers/productsReducer";

const Cart = () => {
    const dispatch = useDispatch();

    const products = useSelector(
        (state: State) => state.cart.listOfCartProducts
    );

    const totalCost = useSelector((state: State) => state.cart.totalCartPrice);

    useEffect(
        () => {
            dispatch(fetchCartProducts());
        },
        [ dispatch, products ]
    );

    const handleAddProduct = (id: number) => {
        dispatch(addToCart(id));
    };

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id}>
                    <p>{product.product.product_name}</p>
                    <p>{product.product.product_price}</p>
                    <p>{product.quantity}</p>
                    <button
                        onClick={() => handleAddProduct(product.product.id)}
                    >
                        +
                    </button>
                </div>
            );
        });
    };

    return (
        <div>
            <Navbar />
            <h1>Cart</h1>
            <h2>Total: ${totalCost}</h2>
            {renderProducts()}
        </div>
    );
};

export default Cart;
