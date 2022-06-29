import React from "react";
import Product from "./Product";
import { popularProducts } from "../../data";

const Products = () => {
    return (
        <>
            <div className=" gap-5 grid md:grid-cols-4 grid-cols-2 items-center m-5">
                {popularProducts.map((product, index) => {
                    return <Product key={index} product={product} />;
                })}
            </div>
        </>
    );
};

export default Products;
