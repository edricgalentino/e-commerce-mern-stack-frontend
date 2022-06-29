import React from "react";
import Select from "react-select";
import Product from "../components/Home/Product";
import { popularProducts } from "../data";

const ProductList = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <>
            <div className="flex flex-col bg-white gap-5 p-5">
                <div className="title flex md:justify-start justify-center items-center px-5 pt-5">
                    <h1 className=" text-3xl font-semibold">Dresses</h1>
                </div>
                <div className="filter flex md:flex-row flex-col justify-between z-20 items-start w-full px-5">
                    <div className="filter flex md:flex-row flex-col mt-5 justify-between md:items-center items-start gap-3">
                        <h1 className=" md:text-2xl text-xl font-semibold">Filter products:</h1>
                        <div className="flex gap-3">
                            <Select options={options} />
                            <Select options={options} />
                            <Select options={options} />
                        </div>
                    </div>
                </div>
                <div className=" gap-5 grid md:grid-cols-6 grid-cols-2 items-center m-5">
                    {popularProducts.map((product, index) => {
                        return <Product key={index} product={product} />;
                    })}
                    {popularProducts.map((product, index) => {
                        return <Product key={index} product={product} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default ProductList;
