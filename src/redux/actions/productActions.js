import {ActionTypes} from "../constants/action-types";

//ACTIONS FOR EACH ACTION-TYPES
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}