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

export type Action = fetchProductsAction;
