import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ product, key }) => {
    const [info, setInfo] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    return (
        <>
            <div className={`w-full z-10 bg-blue-50`}>
                <div onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)} className="flex justify-center items-center w-full -z-10 hover:md:bg-slate-700 hover:md:bg-opacity-40 h-96">
                    <img src={product.img} alt="" className="-z-10 md:w-[300px] w-5/6" />
                    <div className={`${info ? "absolute" : "md:hidden absolute"} flex md:mt-0 mt-72 justify-center items-center md:gap-4 gap-2`}>
                        <button
                            onClick={() => {
                                setIsAddedToCart(true);
                                Swal.fire({
                                    title: "Added to cart!",
                                    text: "Product has been added to cart!",
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 1500,
                                    timerProgressBar: true,
                                });
                            }}
                            className={`icon bg-white hover:bg-slate-200 rounded-full p-3 ${isAddedToCart ? "pointer-events-none" : ""}`}
                        >
                            {isAddedToCart ? <BsCheck2 size={"24px"} color={"green"} /> : <AiOutlineShoppingCart size={"24px"} color={"green"} />}
                        </button>
                        <Link to={"/detail-product"} className="icon bg-white hover:bg-slate-200 rounded-full p-3">
                            <AiOutlineSearch size={"24px"} color={"blue"} />
                        </Link>
                        <button
                            onClick={() => {
                                setIsWishlisted(!isWishlisted);
                            }}
                            className="icon bg-white hover:bg-slate-200 rounded-full p-3"
                        >
                            {isWishlisted ? <AiFillHeart size={"24px"} color={"red"} /> : <AiOutlineHeart size={"24px"} color={"red"} />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
