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
            <div className="product">
                <div className="product__container">
                    <div className="product__images">
                        <img src={product.image_url} className="product__img" />
                        {/* <img src={product.image_url} className="product__img" />
                        <img src={product.image_url} className="product__img" />
                        <img src={product.image_url} className="product__img" /> */}
                        {/* <div className="product__img" />
                        <div className="product__img" />
                        <div className="product__img" />
                        <div className="product__img" /> */}
                    </div>
                    <div className="product__info">
                        <h1 className="product__name">
                            {product.product_name}
                        </h1>
                        <p className="product__price">
                            ${product.product_price}
                        </p>
                        <p className="product__description">
                            {product.detail_description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
