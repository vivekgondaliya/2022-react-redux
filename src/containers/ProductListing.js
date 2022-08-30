import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setProducts} from "../redux/actions/productActions";

import axios from "axios";

import ProductComponent from "./ProductComponent";

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
        <div>
            <h1>Product Listing</h1>
            <div className="ui equal width grid container">
                <div className="four column row">
                    <ProductComponent />
                </div>
            </div>
        </div>
    )
}

export default ProductListing;