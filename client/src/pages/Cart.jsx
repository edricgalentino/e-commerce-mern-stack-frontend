import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
    const [count, setCount] = React.useState(1);
    return (
        <>
            <div className="flex items-center px-5 py-10 flex-col w-full">
                <h1 className="text-center text-4xl ">YOUR BAG</h1>
                <div className="info flex justify-between w-full items-center pt-4">
                    <div className="continue-shop-button">
                        <Link to={"/"} className=" border-2 border-black p-2 bg-white text-black hover:bg-black hover:text-white uppercase">
                            CONTINUE SHOPPING
                        </Link>
                    </div>
                    <div className="info md:flex hidden justify-between w-64">
                        <Link to={"/"} className="underline">
                            Shopping Bag (2)
                        </Link>
                        <Link to={"/"} className="underline">
                            Your Wishlist (0)
                        </Link>
                    </div>
                    <div className="checkout-button">
                        <button className=" border-2 border-black p-2 bg-black text-white uppercase">CHECKOUT NOW</button>
                    </div>
                </div>
                <div className="flex w-full my-10 lg:flex-row flex-col gap-3">
                    <div className="lg:w-3/4 w-full p-3 mx-auto">
                        <div className="product flex md:flex-row flex-col md:justify-evenly border-y-2 md:gap-0 gap-5 md:items-center items-start p-5">
                            <div className="img basis-1/6 mx-auto md:mx-0">
                                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" width={"200px"} alt="" />
                            </div>
                            <div className="flex basis-4/6 flex-col justify-between items-start gap-4 md:px-12">
                                <h1 className=" text-xl">
                                    <strong>Product: </strong>T-SHIRT
                                </h1>
                                <h1 className=" text-xl">
                                    <strong>ID: </strong>3747941403
                                </h1>
                                <div className="color justify-center items-center flex gap-3">
                                    <h1 className=" text-xl font-bold">Color:</h1>
                                    <div className={`w-5 h-5 rounded-full bg-black hover:ring-4 hover:ring-slate-400`}></div>
                                    <div className={`w-5 h-5 rounded-full bg-blue-800 hover:ring-4 hover:ring-slate-400`}></div>
                                    <div className={`w-5 h-5 rounded-full bg-blue-200 hover:ring-4 hover:ring-slate-400`}></div>
                                </div>
                                <h1 className=" text-xl">
                                    <strong>Size: </strong>UK 17
                                </h1>
                            </div>
                            <div className="flex basis-1/6 w-full md:flex-col flex-row md:justify-around justify-between gap-5">
                                <div className="count flex gap-4 justify-center">
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
                                <div className="price-per-stuff flex justify-center">
                                    <h1 className=" text-3xl">$10.00</h1>
                                </div>
                            </div>
                        </div>
                        <div className="product flex md:flex-row flex-col md:justify-evenly border-y-2 md:gap-0 gap-5 md:items-center items-start p-5">
                            <div className="img basis-1/6 mx-auto md:mx-0">
                                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" width={"200px"} alt="" />
                            </div>
                            <div className="flex basis-4/6 flex-col justify-between items-start gap-4 md:px-12">
                                <h1 className=" text-xl">
                                    <strong>Product: </strong>T-SHIRT
                                </h1>
                                <h1 className=" text-xl">
                                    <strong>ID: </strong>3747941403
                                </h1>
                                <div className="color justify-center items-center flex gap-3">
                                    <h1 className=" text-xl font-bold">Color:</h1>
                                    <div className={`w-5 h-5 rounded-full bg-black hover:ring-4 hover:ring-slate-400`}></div>
                                    <div className={`w-5 h-5 rounded-full bg-blue-800 hover:ring-4 hover:ring-slate-400`}></div>
                                    <div className={`w-5 h-5 rounded-full bg-blue-200 hover:ring-4 hover:ring-slate-400`}></div>
                                </div>
                                <h1 className=" text-xl">
                                    <strong>Size: </strong>UK 17
                                </h1>
                            </div>
                            <div className="flex basis-1/6 w-full md:flex-col flex-row md:justify-around justify-between gap-5">
                                <div className="count flex gap-4 justify-center">
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
                                <div className="price-per-stuff flex justify-center">
                                    <h1 className=" text-3xl">$10.00</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/4 md:w-1/2 md:mx-auto w-full h-min p-5 bg-white border-2  flex flex-col items-start justify-between">
                        <h1 className="text-start text-4xl font-thin ">ORDER SUMMARY</h1>
                        <div className="all-price py-5 gap-2 flex flex-col justify-between items-center w-full">
                            <div className="price flex justify-between items-center w-full">
                                <h1 className="text-start text-2xl">Bag</h1>
                                <h1 className="text-start text-2xl">$ 10.00</h1>
                            </div>
                            <div className="price flex justify-between items-center w-full">
                                <h1 className="text-start text-2xl">Watch</h1>
                                <h1 className="text-start text-2xl">$ 20.00</h1>
                            </div>
                            <div className="price flex justify-between items-center w-full">
                                <h1 className="text-start text-2xl">Discount</h1>
                                <h1 className="text-start text-2xl">- $ 5.00</h1>
                            </div>
                        </div>
                        <div className="total py-5 border-t-2 border-black flex justify-between items-center w-full">
                            <h1 className="text-start text-3xl font-semibold ">Total</h1>
                            <h1 className="text-start text-2xl font-semibold ">$ 25.00</h1>
                        </div>
                        <button className=" w-full p-2 mx-auto bg-black text-white">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
