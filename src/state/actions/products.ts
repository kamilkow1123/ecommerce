import resultsAPI from "../../api/resultsAPI";
//types
import { Dispatch } from "redux";

export const fetchProducts = (page: number) => async (dispatch: Dispatch) => {
    if (!page) page = 1;

    try {
        const response = await resultsAPI.get(`/product/list?page=${page}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};
