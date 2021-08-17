import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import _ from "lodash";
//action creators
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
    const numOfProducts = useSelector(
        (state: State) => state.products.numOfProducts
    );
    const numOfPages = Math.ceil(numOfProducts / 12);

    useEffect(
        () => {
            dispatch(fetchProducts(page));
        },
        [ dispatch, page ]
    );

    const renderProducts = () => {
        return products.map((product: IProduct) => {
            return (
                <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="products__item"
                >
                    {/* <div className="products__img" /> */}
                    <img
                        src={product.image_url}
                        className="products__img"
                        alt="product"
                    />
                    <p className="products__name">{product.product_name}</p>
                    <p className="products__price">${product.product_price}</p>
                </Link>
            );
        });
    };

    const renderPageNav = () => {
        return _.times(numOfPages, index => (
            <Link
                to={`/${index + 1}`}
                key={index}
                className="products__pages__page"
            >
                {index + 1}
            </Link>
        ));
    };

    return (
        <div className="products">
            <div className="products__wrapper">{renderProducts()}</div>
            <div className="products__pages">
                <Link
                    to={`/${parseInt(page) - 1}`}
                    style={{
                        visibility: `${parseInt(page) > 1
                            ? "visible"
                            : "hidden"}`,
                    }}
                    className="products__pages__button"
                >
                    Previous Page
                </Link>
                {renderPageNav()}
                <Link
                    to={`/${page ? parseInt(page) + 1 : 2}`}
                    style={{
                        visibility: `${parseInt(page) < numOfPages ||
                        (!page && numOfPages !== 1)
                            ? "visible"
                            : "hidden"}`,
                    }}
                    className="products__pages__button"
                >
                    Next Page
                </Link>
            </div>
        </div>
    );
};

export default ProductsList;
