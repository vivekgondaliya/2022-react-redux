import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import axios from "axios";

import Product from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch(); 

    const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error : ", err);
        });

        dispatch(setProducts(response.data));
    }

    useEffect(
        () => {getProducts()},
        []
    );

    return (
        <>
            <h1>Product Listing</h1>
            <Product />
        </>
    )
}

export default ProductListing;