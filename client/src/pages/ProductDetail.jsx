import React from "react";
import Select from "react-select";
import { BiPlus, BiMinus } from "react-icons/bi";

const Product = () => {
    const options = [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
    ];
    const [count, setCount] = React.useState(1);
    return (
        <>
            <div className="flex justify-between md:flex-row flex-col md:gap-5 p-12 w-full">
                <div className="flex md:basis-5/12 justify-center">
                    <img className="" src="https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
                <div className="flex flex-col md:basis-7/12 lg:pr-32 md:w-40 w-full md:py-0 py-9 gap-7 items-start">
                    <h1 className="text-4xl text-start">Casual Jeans</h1>
                    <p className="text-lg text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem fugiat voluptatem, accusamus animi, officiis voluptatibus quam quaerat libero ex ab commodi aperiam nesciunt nam incidunt, ipsam ipsa ducimus
                        sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga laborum quis, natus accusantium libero iusto eaque non veniam quibusdam.
                    </p>
                    <h1 className="text-6xl font-thin">$ 20.00</h1>
                    <div className="flex justify-between md:w-1/2 w-full items-center">
                        <div className="color justify-center items-center flex gap-3">
                            <h1 className=" text-xl font-bold">Color:</h1>
                            <div className={`w-5 h-5 rounded-full bg-black hover:ring-4 hover:ring-slate-400`}></div>
                            <div className={`w-5 h-5 rounded-full bg-blue-800 hover:ring-4 hover:ring-slate-400`}></div>
                            <div className={`w-5 h-5 rounded-full bg-blue-200 hover:ring-4 hover:ring-slate-400`}></div>
                        </div>
                        <div className="size justify-center items-center flex gap-3">
                            <h1 className=" text-xl font-bold">Size:</h1>
                            <Select options={options} />
                        </div>
                    </div>
                    <div className="flex justify-between md:w-1/2 w-full items-center">
                        <div className="color justify-center items-center flex gap-3">
                            <button
                                onClick={() => {
                                    setCount(count - 1);
                                }}
                                className={`${count === 1 ? "pointer-events-none" : ""}`}
                            >
                                <BiMinus size={"32px"} color={`${count === 1 ? "darkgray" : ""}`} />
                            </button>
                            <h1 className="text-3xl">{count}</h1>
                            <button
                                onClick={() => {
                                    setCount(count + 1);
                                }}
                            >
                                <BiPlus size={"32px"} />
                            </button>
                        </div>
                        <div className="justify-center items-center flex gap-3">
                            <button className=" bg-transparent border-2 border-black hover:text-white hover:bg-black p-3">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
