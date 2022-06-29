import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div
                className="flex w-full h-screen lg:p-0 p-5 justify-center items-center opacity-80 bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)` }}
            >
                <form action="post" className="flex w-96 bg-white lg:gap-4 gap-6 lg:p-5 p-7 justify-start items-start flex-col">
                    <h1 className="title text-3xl uppercase text-start">SIGN IN</h1>
                    <label htmlFor="username" className=" w-full">
                        <input type="text" id="username" className=" border-2 border-slate-500 w-full p-3" placeholder="username" />
                    </label>
                    <label htmlFor="password" className=" w-full">
                        <input type="password" id="password" className=" border-2 border-slate-500 w-full p-3" placeholder="password" />
                    </label>
                    <button type="submit" className=" w-2/5 bg-teal-700 hover:bg-teal-800 text-white uppercase text-lg p-2 px-4">
                        Login
                    </button>
                    <div className="info flex flex-col gap-2">
                        <Link to={"/"} className="text-sm uppercase underline text-start">
                            Forgot your password?
                        </Link>
                        <Link to={"/register"} className="text-sm uppercase underline text-start">
                            Create a new account
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
