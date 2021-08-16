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
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        {product.product_name}
                    </Link>
                    <p>{product.product_price}</p>
                </div>
            );
        });
    };

    const renderPageNav = () => {
        return _.times(numOfPages, index => (
            <Link to={`/${index + 1}`} key={index}>
                {index + 1}
            </Link>
        ));
    };

    return (
        <div>
            <h1>List</h1>
            {renderProducts()}
            <Link
                to={`/${parseInt(page) - 1}`}
                style={{
                    visibility: `${parseInt(page) > 1 ? "visible" : "hidden"}`,
                }}
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
            >
                Next Page
            </Link>
        </div>
    );
};

export default ProductsList;
