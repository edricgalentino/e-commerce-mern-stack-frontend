import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Cart = () => {
    return (
        <>
            <div className="flex items-center px-5 py-10 flex-col w-full h-screen bg-white">
                <h1 className="text-center text-4xl ">YOUR BAG</h1>
                <div className="info flex justify-between w-full items-center pt-4">
                    <div className="continue-shop-button">
                        <button className=" border-2 border-black p-2 bg-white text-black hover:bg-black hover:text-white uppercase">CONTINUE SHOPPING</button>
                    </div>
                    <div className="info flex justify-between w-64">
                        <a className="underline" href="#">
                            Shopping Bag (2)
                        </a>
                        <a className="underline" href="#">
                            Your Wishlist (0)
                        </a>
                    </div>
                    <div className="checkout-button">
                        <button className=" border-2 border-black p-2 bg-black text-white uppercase">CHECKOUT NOW</button>
                    </div>
                </div>
                <div className="flex w-full my-10 gap-3">
                    <div className="w-3/4 p-3 bg-slate-200">
                        <div className="flex justify-evenly items-center bg-red-200 p-5">
                            <div className="img basis-1/6">
                                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="" />
                            </div>
                            <div className="flex basis-4/6 flex-col justify-between items-start gap-4 px-10">
                                <h1 className=" text-xl">
                                    <strong>Product: </strong>T-SHIRT
                                </h1>
                                <h1 className=" text-xl">
                                    <strong>ID: </strong>3747941403
                                </h1>
                                <div className=" w-5 h-5 rounded-full bg-yellow-100"></div>
                                <h1 className=" text-xl">
                                    <strong>Size: </strong>UK 17
                                </h1>
                            </div>
                            <div className="flex basis-1/6 flex-col justify-around bg-white">
                                <div className="count flex gap-4 justify-center">
                                    <button>
                                        <BiPlus size={"32px"} />
                                    </button>
                                    <h1 className=" text-3xl">1</h1>
                                    <button>
                                        <BiMinus size={"32px"} />
                                    </button>
                                </div>
                                <div className="price-per-stuff flex justify-center">
                                    <h1 className=" text-3xl">$10.00</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4  p-5 bg-white border-2  flex flex-col items-start justify-between">
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
