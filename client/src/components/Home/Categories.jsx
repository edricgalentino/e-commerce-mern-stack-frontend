import React from "react";
import { categories } from "../../data";

const Categories = () => {
    return (
        <>
            <div className="flex  justify-around m-5 mt-10  gap-5">
                {categories.map((category, index) => {
                    return (
                        <div key={index} className="flex w-full h-[35rem] justify-center items-center bg-cover" style={{ backgroundImage: `url(${category.img})`, backgroundPosition: "center" }}>
                            <div className="flex flex-col items-center">
                                <h1 className="text-[40px] text-white whitespace-nowrap font-bold">{category.title}</h1>
                                <button className=" w-40 mt-4 p-2 font-semibold bg-white hover:bg-slate-300 text-black">SHOP NOW</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-around gap-5 m-5">
                {[
                    { img: "https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80", title: "NEW DRESSES" },
                    { img: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", title: "THE PERFECT JEANS" },
                ].map((category, index) => {
                    return (
                        <div key={index} className="flex w-full h-[30rem] justify-center items-center bg-cover" style={{ backgroundImage: `url(${category.img})`, backgroundPosition: "center" }}>
                            <div className="flex flex-col items-center">
                                <h1 className="text-[40px] text-white whitespace-nowrap font-bold">{category.title}</h1>
                                <button className=" w-40 mt-4 p-2 font-semibold bg-white hover:bg-slate-300 text-black">SHOP NOW</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
