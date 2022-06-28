import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { sliderItems } from "../../data";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            <div className="flex w-full overflow-hidden justify-between items-center h-[88vh] ">
                <div
                    className={`arrow-left ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "block"} relative z-30 px-8 cursor-pointer`}
                    onClick={() => {
                        currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(sliderItems.length - 1);
                    }}
                >
                    <IoIosArrowBack size={"25px"} />
                </div>
                <div className=" absolute flex overflow-x-hidden">
                    {sliderItems.map((item, index) => {
                        return (
                            <div key={index} className={`flex min-w-full h-[88vh] mx-0 items-center transition-all-1000`} style={{ transform: `translateX(-${currentIndex * 100}%)`, backgroundColor: `#${item.bg}` }}>
                                <div className="img basis-5/12 bg-cover flex justify-center">
                                    <img src={item.img} alt="" width={"400px"} />
                                </div>
                                <div className="caption flex basis-7/12 flex-col gap-4 text-start">
                                    <h1 className="text-[70px] font-semibold">{item.title}</h1>
                                    <h1 className="text-3xl ">{item.desc}</h1>
                                    <button className="border-2 border-black w-40 mt-4 p-2 font-semibold hover:bg-black hover:text-white">SHOP NOW</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    className={`arrow-right ${currentIndex === sliderItems.length - 1 ? "opacity-0 pointer-events-none" : "block"} relative z-30 px-8 cursor-pointer`}
                    onClick={() => {
                        currentIndex < sliderItems.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
                    }}
                >
                    <IoIosArrowForward size={"25px"} />
                </div>
            </div>
        </>
    );
};

export default Slider;
