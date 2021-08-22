import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import Navbar from "../navigation/Navbar";
//action creators
import { deleteFromCart, fetchCartProducts } from "../../state/actions/cart";
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
        [ dispatch, totalCost ]
    );

    const handleAddProduct = (id: number) => {
        dispatch(addToCart(id));
    };

    const handleDeleteProduct = (id: number) => {
        dispatch(deleteFromCart(id));
    };

    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className="cart__product">
                    <p className="cart__product__name">
                        {product.product.product_name}
                    </p>
                    <p className="cart__product__price">
                        {product.product.product_price}
                    </p>
                    <button
                        className="cart__product__button"
                        onClick={() => handleDeleteProduct(product.product.id)}
                    >
                        -
                    </button>
                    <p className="cart__product__quantity">
                        {product.quantity}
                    </p>
                    <button
                        className="cart__product__button"
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
            <div className="cart">
                <div className="cart__container">
                    <div className="cart__products">{renderProducts()}</div>
                    <div className="cart__info">
                        <h1 className="cart__header">Summary</h1>
                        <h2 className="cart__total">Total: ${totalCost}</h2>
                        <button className="cart__button">Go to payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
