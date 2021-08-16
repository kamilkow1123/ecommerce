import { IProduct } from "../reducers/productsReducer";
import { ActionType } from "./types";

interface fetchProductsAction {
    type: ActionType.FETCH_PRODUCTS;
    payload: {
        count: number;
        next: string;
        results: IProduct[];
    };
}

interface fetchProductAction {
    type: ActionType.FETCH_PRODUCT;
    payload: IProduct;
}

export type Action = fetchProductsAction | fetchProductAction;
