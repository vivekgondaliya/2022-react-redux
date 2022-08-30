import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import Product from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);

    const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error : ", err);
        });

        console.log(response);
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