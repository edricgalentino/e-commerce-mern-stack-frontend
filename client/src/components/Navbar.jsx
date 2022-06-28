import React, { useState } from "react";
import Annoucement from "../components/Home/Annoucement";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { US, ID } from "country-flag-icons/react/3x2";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [showLanguage, setShowLanguage] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [showAnnoucement, setShowAnnoucement] = useState(true);
    return (
        <>
            {showAnnoucement && <Annoucement setShowAnnouncement={(value) => setShowAnnoucement(value)} />}
            <div className="flex justify-between p-7 py-10 h-14 z-50 items-center font-main">
                <div className="flex justify-evenly gap-4 items-center">
                    <div className="flex flex-col">
                        <h1
                            className="text-lg  flex items-center cursor-pointer"
                            onClick={() => {
                                setShowLanguage(!showLanguage);
                            }}
                        >
                            {language} <IoMdArrowDropdown />
                        </h1>
                        <div className={`w-20 h-20 flex left-4 ${showAnnoucement ? "top-28" : "top-20"} border-black border-2 z-10 flex-col justify-around items-center bg-white ${showLanguage ? "absolute" : "hidden"}`}>
                            <div
                                onClick={() => {
                                    setLanguage("EN");
                                    setShowLanguage(false);
                                }}
                                className=" flex justify-center items-center gap-2 font-semibold hover:bg-slate-200 w-full h-full"
                            >
                                <US className=" w-7" />
                                EN
                            </div>
                            <div
                                onClick={() => {
                                    setLanguage("ID");
                                    setShowLanguage(false);
                                }}
                                className=" flex justify-center items-center gap-2 font-semibold hover:bg-slate-200 w-full h-full"
                            >
                                <ID className=" w-7" />
                                ID
                            </div>
                        </div>
                    </div>
                    <div className="input flex items-center border-2 border-black gap-2 p-2">
                        <input type="text" placeholder="Search" className="bg-transparent outline-none" />
                        <AiOutlineSearch className=" cursor-pointer" />
                    </div>
                </div>
                <div className=" flex justify-center">
                    <Link to={"/"} className=" text-center text-3xl font-bold">
                        SHOPPIE
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
                    <Link to={"/"} className="text-lg cursor-pointer">
                        REGISTER
                    </Link>
                    <Link to={"/"} className="text-lg cursor-pointer">
                        SIGN IN
                    </Link>
                    <Link to={"/cart"} className="cart flex">
                        <AiOutlineShoppingCart className=" cursor-pointer mb-2" size={"30px"} />
                        <div className=" w-3 h-3 bg-black flex items-center justify-center p-3 text-xs text-white rounded-full relative right-2 bottom-1">42</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
