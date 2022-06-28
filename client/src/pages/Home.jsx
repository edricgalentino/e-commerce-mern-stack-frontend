import React from "react";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import Slider from "../components/Home/Slider";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </>
    );
};

export default Home;
